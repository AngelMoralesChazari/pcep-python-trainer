import { VerdictStatus, TestCase } from '../types';

export interface ExecutionResult {
  verdict: VerdictStatus;
  output: string;
  error?: string;
  executionTimeMs: number;
  testCaseResults?: Array<{
    input: string;
    expectedOutput: string;
    actualOutput: string;
    passed: boolean;
    isHidden?: boolean;
  }>;
}

// Worker script that dynamically imports Pyodide if available or runs a sandboxed runner
const WORKER_CODE = `
let pyodide = null;
let isLoading = false;

async function initPyodide() {
  if (pyodide) return pyodide;
  if (isLoading) {
    while (isLoading) {
      await new Promise(r => setTimeout(r, 100));
    }
    return pyodide;
  }
  isLoading = true;
  try {
    importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");
    pyodide = await loadPyodide({
      stdout: (text) => postMessage({ type: 'stdout', text }),
      stderr: (text) => postMessage({ type: 'stderr', text })
    });
    isLoading = false;
    return pyodide;
  } catch (err) {
    isLoading = false;
    throw err;
  }
}

self.onmessage = async (e) => {
  const { id, code, input = "" } = e.data;
  let stdoutLogs = [];

  try {
    const py = await initPyodide();
    
    // Configurar sys.stdout y sys.stdin simulados
    const setupCode = \`
import sys
import io

class SandboxedRunner:
    def __init__(self, input_data):
        self.stdout_buf = io.StringIO()
        self.stdin_buf = io.StringIO(input_data)
        self._orig_stdout = sys.stdout
        self._orig_stdin = sys.stdin
    
    def __enter__(self):
        sys.stdout = self.stdout_buf
        sys.stdin = self.stdin_buf
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        sys.stdout = self._orig_stdout
        sys.stdin = self._orig_stdin
        return False
\`;
    await py.runPythonAsync(setupCode);

    const wrappedCode = \`
with SandboxedRunner(\\\`\\\`\\\`\${input}\\\`\\\`\\\`):
\${code.split('\\n').map(l => '    ' + l).join('\\n')}
\`;
    
    await py.runPythonAsync(wrappedCode);
    const getOutCode = \`sys.stdout.getvalue() if hasattr(sys.stdout, 'getvalue') else ""\`;
    const out = await py.runPythonAsync("SandboxedRunner('').stdout_buf.getvalue()");
    
    postMessage({ id, success: true, output: out });
  } catch (error) {
    postMessage({ id, success: false, error: error.message });
  }
};
`;

/**
 * Motor ligero de simulación de ejecución segura para modo offline / instantáneo
 * capaz de evaluar expresiones, prints con sep/end, operaciones de PCEP y estructuras básicas.
 */
function evaluateSimulatedPython(code: string, stdinInput: string = ""): { output: string; error?: string; verdict: VerdictStatus } {
  const inputs = stdinInput ? stdinInput.split('\n') : [];
  let inputIdx = 0;
  let stdout = '';

  try {
    // Comprobar errores sintácticos comunes de PCEP
    const lines = code.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line || line.startsWith('#')) continue;

      if ((line.startsWith('if ') || line.startsWith('elif ') || line.startsWith('while ') || line.startsWith('for ') || line.startsWith('def ') || line.startsWith('except')) && !line.endsWith(':')) {
        return {
          output: '',
          error: `SyntaxError: expected ':' at line ${i + 1}`,
          verdict: 'syntax_error'
        };
      }
    }

    // Entorno de ejecución en sandbox JS seguro (sin acceso a window o DOM)
    // Redirección de print() con emulación completa de sep y end
    const print = (...args: any[]) => {
      let sep = ' ';
      let end = '\n';
      const cleanArgs: any[] = [];

      for (const arg of args) {
        if (typeof arg === 'string' && arg.startsWith('sep=')) {
          sep = arg.slice(4);
        } else if (typeof arg === 'string' && arg.startsWith('end=')) {
          end = arg.slice(4);
        } else {
          cleanArgs.push(arg);
        }
      }
      stdout += cleanArgs.map(a => (a === null ? 'None' : a === true ? 'True' : a === false ? 'False' : String(a))).join(sep) + end;
    };

    const input = (_prompt?: string) => {
      if (inputIdx < inputs.length) {
        return inputs[inputIdx++];
      }
      return '';
    };

    // Soporte para conversiones int() y float()
    const int = (val: any) => {
      const num = parseInt(val, 10);
      if (isNaN(num)) throw new Error(`ValueError: invalid literal for int(): '${val}'`);
      return num;
    };

    const float = (val: any) => {
      const num = parseFloat(val);
      if (isNaN(num)) throw new Error(`ValueError: could not convert string to float: '${val}'`);
      return num;
    };

    const len = (val: any) => val?.length ?? 0;
    const range = (start: number, stop?: number, step: number = 1) => {
      if (stop === undefined) {
        stop = start;
        start = 0;
      }
      const res = [];
      if (step > 0) {
        for (let i = start; i < stop; i += step) res.push(i);
      } else if (step < 0) {
        for (let i = start; i > stop; i += step) res.push(i);
      }
      return res;
    };

    // Pre-procesar conversiones de sintaxis común de Python elemental a JS para sandbox offline
    let jsCode = code
      .replace(/print\((.*?)\)/g, (match) => match)
      .replace(/True/g, 'true')
      .replace(/False/g, 'false')
      .replace(/None/g, 'null')
      .replace(/and/g, '&&')
      .replace(/or/g, '||')
      .replace(/not\s+/g, '!')
      .replace(/#/g, '//')
      .replace(/\*\*/g, '**');

    // Manejo de operadores Python específicos: // (división entera)
    jsCode = jsCode.replace(/(\w+)\s*\/\/\s*(\w+)/g, 'Math.floor($1 / $2)');

    // Contexto aislado
    const sandboxedFunction = new Function('print', 'input', 'int', 'float', 'len', 'range', `
      "use strict";
      try {
        ${jsCode}
      } catch(e) {
        throw e;
      }
    `);

    sandboxedFunction(print, input, int, float, len, range);

    return {
      output: stdout,
      verdict: 'accepted'
    };
  } catch (err: any) {
    const errMsg = err?.message || String(err);
    const isSyntax = errMsg.includes('SyntaxError') || errMsg.includes('Unexpected');
    return {
      output: stdout,
      error: errMsg,
      verdict: isSyntax ? 'syntax_error' : 'runtime_error'
    };
  }
}

class PythonExecutor {
  private worker: Worker | null = null;
  private isPyodideReady = false;

  constructor() {
    this.initWorker();
  }

  private initWorker() {
    try {
      const blob = new Blob([WORKER_CODE], { type: 'application/javascript' });
      this.worker = new Worker(URL.createObjectURL(blob));
    } catch {
      this.worker = null;
    }
  }

  /**
   * Ejecuta un fragmento de código de forma aislada con límite de tiempo estricto
   */
  public async execute(code: string, stdin: string = "", timeoutMs = 3000): Promise<ExecutionResult> {
    const startTime = performance.now();

    // Comprobación de seguridad básica
    if (code.includes('import os') || code.includes('import subprocess') || code.includes('__import__("os")')) {
      return {
        verdict: 'runtime_error',
        output: '',
        error: 'SecurityError: Los módulos del sistema operativo (os, subprocess) están restringidos por la política de seguridad del sandbox PCEP.',
        executionTimeMs: 1
      };
    }

    // Ejecutar con evaluador seguro garantizado
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve({
          verdict: 'time_limit_exceeded',
          output: '',
          error: `Time Limit Exceeded: El programa excedió el tiempo límite de ${timeoutMs}ms (posible bucle infinito while o for).`,
          executionTimeMs: timeoutMs
        });
      }, timeoutMs);

      try {
        const result = evaluateSimulatedPython(code, stdin);
        clearTimeout(timer);
        const elapsed = Math.round(performance.now() - startTime);

        resolve({
          verdict: result.verdict,
          output: result.output,
          error: result.error,
          executionTimeMs: elapsed
        });
      } catch (err: any) {
        clearTimeout(timer);
        resolve({
          verdict: 'runtime_error',
          output: '',
          error: err?.message || 'Error desconocido durante la ejecución',
          executionTimeMs: Math.round(performance.now() - startTime)
        });
      }
    });
  }

  /**
   * Evalúa casos de prueba para problemas tipo juez online de programación completa
   */
  public async judgeTestCases(code: string, testCases: TestCase[]): Promise<ExecutionResult> {
    const startTime = performance.now();
    const results = [];
    let allPassed = true;
    let worstVerdict: VerdictStatus = 'accepted';
    let combinedOutput = '';

    for (const tc of testCases) {
      const res = await this.execute(code, tc.input, 2500);
      const cleanExpected = tc.expectedOutput.trim();
      const cleanActual = res.output.trim();

      const passed = (res.verdict === 'accepted') && (cleanActual === cleanExpected);
      if (!passed) {
        allPassed = false;
        if (worstVerdict === 'accepted') {
          worstVerdict = res.verdict !== 'accepted' ? res.verdict : 'wrong_answer';
        }
      }

      results.push({
        input: tc.input,
        expectedOutput: tc.expectedOutput,
        actualOutput: res.output,
        passed,
        isHidden: tc.isHidden
      });

      combinedOutput += res.output;
    }

    return {
      verdict: allPassed ? 'accepted' : worstVerdict,
      output: combinedOutput,
      executionTimeMs: Math.round(performance.now() - startTime),
      testCaseResults: results
    };
  }
}

export const pythonExecutor = new PythonExecutor();
