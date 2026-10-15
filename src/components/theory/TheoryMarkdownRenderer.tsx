import React from 'react';

// Conjuntos de tokens de Python para resaltado sintáctico de alto contraste
const KEYWORDS = new Set([
  'def', 'return', 'if', 'elif', 'else', 'while', 'for', 'in', 'is', 'not', 'and', 'or',
  'break', 'continue', 'pass', 'try', 'except', 'finally', 'raise', 'lambda', 'yield',
  'import', 'from', 'as', 'global', 'nonlocal', 'with', 'assert', 'class', 'del'
]);

const CONSTANTS = new Set(['True', 'False', 'None']);

const BUILTINS = new Set([
  'print', 'input', 'len', 'range', 'type', 'id', 'int', 'float', 'str', 'bool',
  'list', 'tuple', 'dict', 'set', 'sorted', 'enumerate', 'zip', 'sum', 'min', 'max',
  'abs', 'round', 'open', 'super', 'dir', 'help'
]);

const EXCEPTIONS = new Set([
  'BaseException', 'Exception', 'ArithmeticError', 'ZeroDivisionError', 'LookupError',
  'IndexError', 'KeyError', 'TypeError', 'ValueError', 'SyntaxError', 'NameError',
  'IndentationError', 'KeyboardInterrupt', 'SystemExit', 'AttributeError', 'ImportError',
  'FileNotFoundError', 'StopIteration'
]);

type TokenType =
  | 'keyword'
  | 'constant'
  | 'builtin'
  | 'exception'
  | 'method'
  | 'comment'
  | 'string'
  | 'number'
  | 'operator'
  | 'identifier'
  | 'plain';

interface Token {
  type: TokenType;
  text: string;
}

// Tokenizador sintáctico para fragmentos y bloques de código Python
export function tokenizePythonCode(code: string): Token[] {
  const tokenRegex = /(#[^\n]*|"""[\s\S]*?"""|\x27\x27\x27[\s\S]*?\x27\x27\x27|"[^"\n]*"|\x27[^\x27\n]*\x27|\b0[bB][01]+\b|\b0[oO][0-7]+\b|\b0[xX][0-9a-fA-F]+\b|\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b|\.[a-zA-Z_]\w*|\b[a-zA-Z_]\w*\b|\/\/|\*\*|==|!=|<=|>=|->|\+=|-=|\*=|\/=|%=|[{}()[\]:,=+\-*/%~<>])/g;

  let lastIndex = 0;
  const parts: Token[] = [];
  let m: RegExpExecArray | null;

  while ((m = tokenRegex.exec(code)) !== null) {
    if (m.index > lastIndex) {
      parts.push({ type: 'plain', text: code.slice(lastIndex, m.index) });
    }
    const token = m[0];
    if (token.startsWith('#')) {
      parts.push({ type: 'comment', text: token });
    } else if (token.startsWith('"""') || token.startsWith("'''")) {
      parts.push({ type: 'string', text: token });
    } else if (token.startsWith("'") || token.startsWith('"')) {
      parts.push({ type: 'string', text: token });
    } else if (token.startsWith('.')) {
      parts.push({ type: 'method', text: token });
    } else if (CONSTANTS.has(token)) {
      parts.push({ type: 'constant', text: token });
    } else if (EXCEPTIONS.has(token)) {
      parts.push({ type: 'exception', text: token });
    } else if (KEYWORDS.has(token)) {
      parts.push({ type: 'keyword', text: token });
    } else if (BUILTINS.has(token)) {
      parts.push({ type: 'builtin', text: token });
    } else if (/^(0[bBoOxX]|\d)/.test(token)) {
      parts.push({ type: 'number', text: token });
    } else if (/^(\/\/|\*\*|==|!=|<=|>=|->|\+=|-=|\*=|\/=|%=|\+|\-|\*|\/|%|<|>|=|~)$/.test(token)) {
      parts.push({ type: 'operator', text: token });
    } else {
      parts.push({ type: 'identifier', text: token });
    }
    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < code.length) {
    parts.push({ type: 'plain', text: code.slice(lastIndex) });
  }

  return parts;
}

function getTokenClass(type: TokenType): string {
  switch (type) {
    case 'keyword':
      return 'text-purple-600 dark:text-purple-400 font-bold';
    case 'constant':
      return 'text-amber-600 dark:text-amber-400 font-bold';
    case 'builtin':
      return 'text-teal-600 dark:text-teal-400 font-semibold';
    case 'exception':
      return 'text-rose-600 dark:text-rose-400 font-bold';
    case 'comment':
      return 'text-slate-500 dark:text-slate-400 italic';
    case 'method':
      return 'text-sky-600 dark:text-sky-400 font-semibold';
    case 'string':
      return 'text-emerald-600 dark:text-emerald-400 font-normal';
    case 'number':
      return 'text-blue-600 dark:text-blue-400 font-medium';
    case 'operator':
      return 'text-amber-700 dark:text-amber-300 font-bold';
    case 'identifier':
    case 'plain':
    default:
      return 'text-slate-800 dark:text-slate-200';
  }
}

// Chip de código en línea con resaltado sintáctico integrado
export const CodeChip: React.FC<{ code: string }> = ({ code }) => {
  const tokens = tokenizePythonCode(code);
  return (
    <code className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded-md bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 font-mono text-[13px] leading-tight align-baseline shadow-xs select-text">
      {tokens.map((tok, i) => (
        <span key={i} className={getTokenClass(tok.type)}>
          {tok.text}
        </span>
      ))}
    </code>
  );
};

export const PythonCodeBlock: React.FC<{ code: string; className?: string }> = ({
  code,
  className = '',
}) => {
  const tokens = tokenizePythonCode(code);
  const defaultTextSize = className.includes('text-') ? '' : 'text-sm';
  return (
    <pre className={`font-mono whitespace-pre overflow-x-auto select-text ${defaultTextSize} ${className}`}>
      <code>
        {tokens.map((tok, i) => {
          let colorClass = 'text-slate-100';
          switch (tok.type) {
            case 'keyword':
              colorClass = 'text-purple-400 font-bold';
              break;
            case 'constant':
              colorClass = 'text-amber-400 font-bold';
              break;
            case 'builtin':
              colorClass = 'text-teal-400 font-semibold';
              break;
            case 'exception':
              colorClass = 'text-rose-400 font-bold';
              break;
            case 'comment':
              colorClass = 'text-slate-400 italic';
              break;
            case 'string':
              colorClass = 'text-emerald-400 font-normal';
              break;
            case 'method':
              colorClass = 'text-sky-300 font-medium';
              break;
            case 'number':
              colorClass = 'text-sky-400 font-normal';
              break;
            case 'operator':
              colorClass = 'text-amber-300 font-semibold';
              break;
            case 'identifier':
              colorClass = 'text-slate-100';
              break;
            default:
              colorClass = 'text-slate-200';
              break;
          }
          return (
            <span key={i} className={colorClass}>
              {tok.text}
            </span>
          );
        })}
      </code>
    </pre>
  );
};

// Detección de funciones, métodos y excepciones en texto plano que no lleven comillas inversas
const STANDALONE_ENTITY_REGEX = /((\.[a-zA-Z_]\w*\(\))|\b(?:print|input|len|range|type|id|int|float|str|bool|list|tuple|dict|set)\(\)|\b(?:BaseException|Exception|ArithmeticError|ZeroDivisionError|LookupError|IndexError|KeyError|TypeError|ValueError|SyntaxError|NameError|IndentationError)\b)/g;

function renderPlainTextWithEntities(text: string, keyPrefix: string): React.ReactNode[] {
  const elements: React.ReactNode[] = [];
  let lastIdx = 0;
  let match: RegExpExecArray | null;
  STANDALONE_ENTITY_REGEX.lastIndex = 0;

  while ((match = STANDALONE_ENTITY_REGEX.exec(text)) !== null) {
    if (match.index > lastIdx) {
      elements.push(
        <React.Fragment key={`${keyPrefix}-txt-${lastIdx}`}>
          {text.slice(lastIdx, match.index)}
        </React.Fragment>
      );
    }
    const entity = match[0];
    elements.push(
      <CodeChip key={`${keyPrefix}-ent-${match.index}`} code={entity} />
    );
    lastIdx = STANDALONE_ENTITY_REGEX.lastIndex;
  }

  if (lastIdx < text.length) {
    elements.push(
      <React.Fragment key={`${keyPrefix}-txt-${lastIdx}`}>
        {text.slice(lastIdx)}
      </React.Fragment>
    );
  }

  return elements;
}

// Parseador en línea para negritas (**texto**), cursivas (*texto*) y código (`codigo`)
function renderInline(text: string, keyPrefix = 'inline'): React.ReactNode[] {
  const inlineRegex = /(`[^`]+`|\*\*(?:[^*]|(?:\*[^*]))+\*\*|(?<!\*)\*(?!\*)([^*]+)(?<!\*)\*(?!\*))/g;

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = inlineRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const rawText = text.slice(lastIndex, match.index);
      elements.push(...renderPlainTextWithEntities(rawText, `${keyPrefix}-pre-${lastIndex}`));
    }

    const token = match[0];
    const itemKey = `${keyPrefix}-tok-${match.index}`;

    if (token.startsWith('`')) {
      const code = token.slice(1, -1);
      elements.push(<CodeChip key={itemKey} code={code} />);
    } else if (token.startsWith('**')) {
      const boldContent = token.slice(2, -2);
      elements.push(
        <strong key={itemKey} className="font-bold text-slate-900 dark:text-slate-100">
          {renderInline(boldContent, `${itemKey}-b`)}
        </strong>
      );
    } else if (token.startsWith('*')) {
      const italicContent = token.slice(1, -1);
      elements.push(
        <em key={itemKey} className="italic text-slate-800 dark:text-slate-200">
          {renderInline(italicContent, `${itemKey}-i`)}
        </em>
      );
    }

    lastIndex = inlineRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    const rawText = text.slice(lastIndex);
    elements.push(...renderPlainTextWithEntities(rawText, `${keyPrefix}-post-${lastIndex}`));
  }

  return elements;
}

interface TheoryMarkdownRendererProps {
  content: string;
  className?: string;
  textSize?: 'sm' | 'base' | 'lg';
}

/**
 * Renderizador de Markdown estructurado para la sección de Teoría y Enunciados.
 * Convierte encabezados ###, listas numeradas 1., listas con viñetas *,
 * negritas **, cursivas * y código `...` en elementos HTML estilizados,
 * con resaltado de sintaxis para palabras reservadas y built-ins de Python.
 */
export const TheoryMarkdownRenderer: React.FC<TheoryMarkdownRendererProps> = ({
  content,
  className = '',
  textSize = 'sm'
}) => {
  const lines = content.trim().split('\n');

  const isLg = textSize === 'lg';
  const isBase = textSize === 'base';

  const containerTextClass = isLg
    ? 'text-base sm:text-lg lg:text-xl text-slate-800 dark:text-slate-100 font-medium'
    : isBase
      ? 'text-sm sm:text-base text-slate-800 dark:text-slate-200'
      : 'text-sm text-slate-700 dark:text-slate-300';

  const paragraphTextClass = isLg
    ? 'text-base sm:text-lg lg:text-xl text-slate-800 dark:text-slate-100 leading-relaxed my-2.5 font-medium'
    : isBase
      ? 'text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed my-2'
      : 'text-sm text-slate-700 dark:text-slate-300 leading-relaxed my-2';

  const headerTextClass = isLg
    ? 'text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-slate-50'
    : 'text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100';

  const listTextClass = isLg
    ? 'text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed'
    : 'text-sm text-slate-700 dark:text-slate-300 leading-relaxed';

  return (
    <div className={`${containerTextClass} leading-relaxed space-y-2 select-text ${className}`}>
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        // Línea vacía entre párrafos
        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Encabezado de nivel 3 (###)
        if (trimmed.startsWith('###')) {
          const headerText = trimmed.replace(/^###\s*/, '');
          return (
            <div key={idx} className="pt-3 pb-1 first:pt-0">
              <h4 className={`${headerTextClass} flex items-center gap-2`}>
                <span className="w-1.5 h-4 rounded-full bg-petrol-500 dark:bg-petrol-400 flex-shrink-0" />
                <span>{renderInline(headerText, `h-${idx}`)}</span>
              </h4>
            </div>
          );
        }

        // Lista numerada (1. elemento)
        const olMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
        if (olMatch) {
          const [, num, itemText] = olMatch;
          return (
            <div key={idx} className={`flex items-start gap-3 my-2 ${listTextClass}`}>
              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-petrol-100 dark:bg-petrol-900/60 text-petrol-800 dark:text-petrol-300 font-mono text-xs font-bold mt-0.5 shadow-xs border border-petrol-200/60 dark:border-petrol-800/60">
                {num}
              </span>
              <div className="flex-1 text-slate-700 dark:text-slate-300">
                {renderInline(itemText, `ol-${idx}`)}
              </div>
            </div>
          );
        }

        // Lista con viñetas (* o -) con soporte de niveles de sangría
        const ulMatch = line.match(/^(\s*)[*•-]\s+(.*)$/);
        if (ulMatch) {
          const [, indentSpaces, itemText] = ulMatch;
          const indentLevel = Math.min(Math.floor(indentSpaces.length / 2), 4);

          let indentClass = 'pl-1';
          let bulletClass = 'w-1.5 h-1.5 rounded-full bg-petrol-500 dark:bg-petrol-400';

          if (indentLevel === 1) {
            indentClass = 'pl-6 sm:pl-7';
            bulletClass = 'w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500';
          } else if (indentLevel === 2) {
            indentClass = 'pl-11 sm:pl-12';
            bulletClass = 'w-1 h-1 rounded-sm bg-petrol-400 dark:bg-petrol-500';
          } else if (indentLevel >= 3) {
            indentClass = 'pl-16 sm:pl-18';
            bulletClass = 'w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600';
          }

          return (
            <div
              key={idx}
              className={`flex items-start gap-2.5 my-1.5 ${listTextClass} ${indentClass}`}
            >
              <span className={`${bulletClass} mt-2 flex-shrink-0`} />
              <div className="flex-1 text-slate-700 dark:text-slate-300">
                {renderInline(itemText, `ul-${idx}`)}
              </div>
            </div>
          );
        }

        // Párrafo de texto estándar
        return (
          <p key={idx} className={paragraphTextClass}>
            {renderInline(line, `p-${idx}`)}
          </p>
        );
      })}
    </div>
  );
};
