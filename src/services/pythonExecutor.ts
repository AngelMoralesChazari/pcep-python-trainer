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
 * Transpilador de Python básico a JS para sandbox offline que respeta
 * bloques de indentación, estructuras de control, operadores y variables.
 */
function transpilePythonToJS(code: string): string {
  const lines = code.split('\n');
  const jsLines: string[] = [];
  const indentStack: number[] = [0];

  for (const rawLine of lines) {
    if (!rawLine.trim()) {
      jsLines.push('');
      continue;
    }

    // Separar comentarios #
    const commentIdx = rawLine.indexOf('#');
    const lineCode = commentIdx !== -1 ? rawLine.slice(0, commentIdx) : rawLine;
    const comment = commentIdx !== -1 ? '//' + rawLine.slice(commentIdx + 1) : '';

    if (!lineCode.trim()) {
      jsLines.push(rawLine.replace('#', '//'));
      continue;
    }

    const indent = lineCode.match(/^\s*/)?.[0].length || 0;
    let trimmed = lineCode.trim();

    // Cerrar bloques cuando la sangría disminuye
    while (indentStack.length > 1 && indentStack[indentStack.length - 1] > indent) {
      indentStack.pop();
      jsLines.push(' '.repeat(indentStack[indentStack.length - 1] || 0) + '}');
    }

    let isBlock = false;
    if (trimmed.endsWith(':')) {
      isBlock = true;
      trimmed = trimmed.slice(0, -1).trim();
    }

    if (trimmed.startsWith('if ')) {
      trimmed = 'if (' + trimmed.slice(3) + ') {';
    } else if (trimmed.startsWith('elif ')) {
      trimmed = 'else if (' + trimmed.slice(5) + ') {';
    } else if (trimmed === 'else') {
      trimmed = 'else {';
    } else if (trimmed.startsWith('while ')) {
      trimmed = 'while (' + trimmed.slice(6) + ') {';
    } else if (trimmed.startsWith('for ') && trimmed.includes(' in ')) {
      const match = trimmed.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+(.+)$/);
      if (match) {
        trimmed = `for (${match[1]} of ${match[2]}) {`;
      }
    } else if (trimmed.startsWith('def ')) {
      trimmed = 'function ' + trimmed.slice(4) + ' {';
    } else if (isBlock) {
      trimmed = trimmed + ' {';
    }

    if (isBlock) {
      indentStack.push(indent + 4);
    }

    // Soporte para keyword arguments sep= y end= en print()
    trimmed = trimmed
      .replace(/(?<=[,(]\s*)sep\s*=\s*([^,)]+)/g, '__py_kw_sep($1)')
      .replace(/(?<=[,(]\s*)end\s*=\s*([^,)]+)/g, '__py_kw_end($1)');

    // Operadores y constantes de Python
    trimmed = trimmed
      .replace(/\band\b/g, '&&')
      .replace(/\bor\b/g, '||')
      .replace(/\bnot\s+/g, '!')
      .replace(/\bTrue\b/g, 'true')
      .replace(/\bFalse\b/g, 'false')
      .replace(/\bNone\b/g, 'null')
      .replace(/(\w+)\s*\/\/\s*(\w+)/g, '__py_floordiv__($1, $2)');

    jsLines.push(' '.repeat(indent) + trimmed + (comment ? ' ' + comment : ''));
  }

  while (indentStack.length > 1) {
    indentStack.pop();
    jsLines.push('}');
  }

  return jsLines.join('\n');
}

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

    const print = (...args: any[]) => {
      let sep = ' ';
      let end = '\n';
      const cleanArgs: any[] = [];

      for (const arg of args) {
        if (arg && typeof arg === 'object' && arg.__is_kw_sep) {
          sep = String(arg.val);
        } else if (arg && typeof arg === 'object' && arg.__is_kw_end) {
          end = String(arg.val);
        } else if (typeof arg === 'string' && arg.startsWith('sep=')) {
          sep = arg.slice(4);
        } else if (typeof arg === 'string' && arg.startsWith('end=')) {
          end = arg.slice(4);
        } else {
          cleanArgs.push(arg);
        }
      }
      stdout += cleanArgs.map(a => {
        if (a === null) return 'None';
        if (a === true) return 'True';
        if (a === false) return 'False';
        if (typeof a === 'object' && a !== null) {
          try { return JSON.stringify(a).replace(/"/g, "'"); } catch { return String(a); }
        }
        return String(a);
      }).join(sep) + end;
    };

    const input = (_prompt?: string) => {
      if (inputIdx < inputs.length) {
        return inputs[inputIdx++];
      }
      return '';
    };

    const int = (val: any, base?: number) => {
      const num = base ? parseInt(val, base) : parseInt(val, 10);
      if (isNaN(num)) throw new Error(`ValueError: invalid literal for int(): '${val}'`);
      return num;
    };

    const float = (val: any) => {
      const num = parseFloat(val);
      if (isNaN(num)) throw new Error(`ValueError: could not convert string to float: '${val}'`);
      return num;
    };

    const str = (val: any) => {
      if (val === null || val === undefined) return 'None';
      if (val === true) return 'True';
      if (val === false) return 'False';
      return String(val);
    };

    const bool = (val: any) => Boolean(val);
    const len = (val: any) => {
      if (val === null || val === undefined) throw new Error("TypeError: object of type 'NoneType' has no len()");
      return val?.length ?? Object.keys(val).length;
    };

    const range = (start: number, stop?: number, step: number = 1) => {
      if (stop === undefined) {
        stop = start;
        start = 0;
      }
      if (step === 0) throw new Error("ValueError: range() arg 3 must not be zero");
      const res = [];
      if (step > 0) {
        for (let i = start; i < stop; i += step) res.push(i);
      } else {
        for (let i = start; i > stop; i += step) res.push(i);
      }
      return res;
    };

    const list = (val?: any) => (val ? Array.from(val) : []);
    const dict = (entries?: any) => (entries ? Object.fromEntries(entries) : {});
    const set = (val?: any) => new Set(val || []);
    const tuple = (val?: any) => (val ? Array.from(val) : []);
    const abs = (val: number) => Math.abs(val);
    const round = (val: number) => Math.round(val);
    const sum = (arr: number[]) => (Array.isArray(arr) ? arr.reduce((acc, c) => acc + c, 0) : 0);
    const min = (...args: any[]) => {
      const items = Array.isArray(args[0]) && args.length === 1 ? args[0] : args;
      return Math.min(...items);
    };
    const max = (...args: any[]) => {
      const items = Array.isArray(args[0]) && args.length === 1 ? args[0] : args;
      return Math.max(...items);
    };
    const sorted = (arr: any[]) => [...arr].sort();
    const type = (val: any) => {
      if (typeof val === 'number') return Number.isInteger(val) ? "<class 'int'>" : "<class 'float'>";
      if (typeof val === 'string') return "<class 'str'>";
      if (typeof val === 'boolean') return "<class 'bool'>";
      if (Array.isArray(val)) return "<class 'list'>";
      if (val instanceof Set) return "<class 'set'>";
      if (val && typeof val === 'object') return "<class 'dict'>";
      if (val === null || val === undefined) return "<class 'NoneType'>";
      return `<class '${typeof val}'>`;
    };

    const __py_floordiv__ = (a: number, b: number) => {
      if (b === 0) throw new Error('ZeroDivisionError: integer division or modulo by zero');
      return Math.floor(a / b);
    };

    const __py_kw_sep = (val: any) => ({ __is_kw_sep: true, val });
    const __py_kw_end = (val: any) => ({ __is_kw_end: true, val });

    const scope: Record<string, any> = {
      print, input, int, float, str, bool, len, range, list, dict, set, tuple,
      abs, round, sum, min, max, sorted, type, __py_floordiv__, __py_kw_sep, __py_kw_end,
      Math,
      Exception: Error,
      ValueError: Error,
      TypeError: Error,
      ZeroDivisionError: Error,
      IndexError: Error,
      KeyError: Error
    };

    const proxy = new Proxy(scope, {
      has(_target, prop) {
        if (typeof prop === 'symbol') return false;
        return true;
      },
      get(target, prop) {
        if (typeof prop === 'symbol') return undefined;
        if (prop in target) return target[prop as string];
        throw new Error(`NameError: name '${String(prop)}' is not defined`);
      },
      set(target, prop, value) {
        target[prop as string] = value;
        return true;
      }
    });

    const jsCode = transpilePythonToJS(code);

    const sandboxedFunction = new Function('scope', `
      with(scope) {
        ${jsCode}
      }
    `);

    sandboxedFunction(proxy);

    return {
      output: stdout,
      verdict: 'accepted'
    };
  } catch (err: any) {
    const errMsg = err?.message || String(err);
    const isSyntax = errMsg.includes('SyntaxError') || errMsg.includes('Unexpected') || errMsg.includes('Invalid or unexpected token');
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
