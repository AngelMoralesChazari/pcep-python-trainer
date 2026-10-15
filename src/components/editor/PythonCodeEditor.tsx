import React, { useState, useRef, useMemo } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal, Clock, AlertCircle } from 'lucide-react';
import { pythonExecutor } from '../../services/pythonExecutor';
import { ExecutionResult } from '../../services/pythonExecutor';
import { tokenizePythonCode } from '../theory/TheoryMarkdownRenderer';

interface PythonCodeEditorProps {
  initialCode: string;
  onExecute?: (result: ExecutionResult, code: string) => void;
  stdinInput?: string;
  readOnly?: boolean;
  minHeight?: string;
}

function getEditorTokenColor(type: string): string {
  switch (type) {
    case 'keyword':
      return 'text-purple-400 font-bold';
    case 'constant':
      return 'text-amber-400 font-bold';
    case 'builtin':
      return 'text-teal-400 font-semibold';
    case 'exception':
      return 'text-rose-400 font-bold';
    case 'comment':
      return 'text-slate-400 italic';
    case 'string':
      return 'text-emerald-400 font-normal';
    case 'method':
      return 'text-sky-300 font-medium';
    case 'number':
      return 'text-sky-400 font-normal';
    case 'operator':
      return 'text-amber-300 font-semibold';
    case 'identifier':
    case 'plain':
    default:
      return 'text-slate-100';
  }
}

export const PythonCodeEditor: React.FC<PythonCodeEditorProps> = ({
  initialCode,
  onExecute,
  stdinInput = '',
  readOnly = false,
  minHeight = '240px'
}) => {
  const [code, setCode] = useState(initialCode);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);

  const tokens = useMemo(() => tokenizePythonCode(code), [code]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (preRef.current) {
      preRef.current.scrollTop = e.currentTarget.scrollTop;
      preRef.current.scrollLeft = e.currentTarget.scrollLeft;
    }
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Manejo de indentación con TAB (4 espacios según PEP-8)
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;

      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);

      // Reposicionar cursor
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
      }, 0);
    }

    // Atajo Ctrl+Enter / Cmd+Enter para ejecutar
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRun();
    }
  };

  const handleRun = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setExecutionResult(null);

    try {
      const res = await pythonExecutor.execute(code, stdinInput);
      setExecutionResult(res);
      if (onExecute) {
        onExecute(res, code);
      }
    } catch (err: any) {
      setExecutionResult({
        verdict: 'runtime_error',
        output: '',
        error: err.message || 'Error de ejecución',
        executionTimeMs: 0
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setExecutionResult(null);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
      {/* Barra superior de herramientas */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-2 font-mono">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">main.py</span>
          <span className="text-slate-400">({lines.length} líneas)</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            title="Copiar código"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiado' : 'Copiar'}</span>
          </button>

          {!readOnly && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              title="Reiniciar código original"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>
          )}

          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1 rounded font-medium bg-petrol-600 hover:bg-petrol-700 text-white transition disabled:opacity-50"
            title="Ejecutar código (Ctrl + Enter)"
          >
            <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Ejecutando...' : 'Ejecutar (Ctrl+Enter)'}</span>
          </button>
        </div>
      </div>

      {/* Área del editor con números de línea y coloreado de sintaxis */}
      <div className="relative flex font-mono text-sm bg-slate-900 text-slate-100 overflow-hidden" style={{ minHeight }}>
        {/* Números de línea sincronizados */}
        <div
          ref={lineNumbersRef}
          className="select-none py-3 px-3 text-right text-slate-500 bg-slate-950/40 border-r border-slate-800 shrink-0 overflow-hidden"
          style={{ maxHeight: minHeight }}
        >
          {lines.map((_, i) => (
            <div key={i} className="leading-6 text-xs">{i + 1}</div>
          ))}
        </div>

        {/* Contenedor relativo de código con resaltado */}
        <div className="relative flex-1 min-w-0 h-full">
          {/* Capa inferior coloreada con sintaxis */}
          <pre
            ref={preRef}
            aria-hidden="true"
            className="absolute inset-0 p-3 m-0 font-mono text-sm leading-6 overflow-hidden pointer-events-none whitespace-pre select-none text-slate-100 border-0"
            style={{
              minHeight,
              tabSize: 4,
              fontVariantLigatures: 'none',
              fontFeatureSettings: '"liga" 0, "calt" 0, "dlig" 0'
            }}
          >
            <code>
              {tokens.map((tok, i) => (
                <span key={i} className={getEditorTokenColor(tok.type)}>
                  {tok.text}
                </span>
              ))}
              {code.endsWith('\n') ? ' ' : ''}
            </code>
          </pre>

          {/* Textarea editable transparente con cursor blanco encima */}
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onScroll={handleScroll}
            onKeyDown={handleKeyDown}
            readOnly={readOnly}
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
            autoComplete="off"
            className="relative z-10 w-full h-full p-3 m-0 bg-transparent text-transparent caret-white font-mono text-sm leading-6 resize-none outline-none border-0 focus:ring-0 overflow-auto whitespace-pre selection:bg-petrol-500/40 selection:text-transparent"
            style={{
              minHeight,
              tabSize: 4,
              fontVariantLigatures: 'none',
              fontFeatureSettings: '"liga" 0, "calt" 0, "dlig" 0'
            }}
          />
        </div>
      </div>

      {/* Consola de salida de ejecución */}
      {executionResult && (
        <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-950 text-slate-200 p-3 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-petrol-400" />
              <span className="font-semibold text-slate-300">Terminal de Salida</span>
              {executionResult.verdict === 'accepted' && (
                <span className="px-2 py-0.5 rounded text-[11px] bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Ejecutado con éxito
                </span>
              )}
              {executionResult.verdict !== 'accepted' && (
                <span className="px-2 py-0.5 rounded text-[11px] bg-rose-950 text-rose-400 border border-rose-800">
                  {executionResult.verdict}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-slate-500">
              <Clock className="w-3 h-3" />
              <span>{executionResult.executionTimeMs}ms</span>
            </div>
          </div>

          {executionResult.output && (
            <pre className="text-emerald-400 whitespace-pre-wrap leading-relaxed">
              {executionResult.output}
            </pre>
          )}

          {executionResult.error && (
            <div className="mt-2 text-rose-400 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <pre className="whitespace-pre-wrap">{executionResult.error}</pre>
            </div>
          )}

          {!executionResult.output && !executionResult.error && (
            <span className="text-slate-500 italic">(El programa no generó salida estándar)</span>
          )}
        </div>
      )}
    </div>
  );
};
