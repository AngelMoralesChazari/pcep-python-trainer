import React from 'react';
import { Code2, ArrowRight, BookOpen, CheckSquare, Terminal, Award, ShieldCheck } from 'lucide-react';

interface HomePageProps {
  onStart: () => void;
  onLogin?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStart, onLogin }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20 space-y-16">
      {/* Hero Principal Sobrio y Profesional */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petrol-100 dark:bg-petrol-900/60 text-petrol-800 dark:text-petrol-200 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Alineado 100% con el Temario Oficial PCEP-30-02</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
          Entrena y Domina la Certificación <span className="text-petrol-600 dark:text-petrol-400">Python PCEP-30-02</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Prepárate para PCEP-30-02 practicando Python desde los fundamentos hasta la resolución de problemas.
          Teoría clara, análisis de código, predicción de salida, entorno interactivo seguro y simuladores reales de examen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            onClick={onStart}
            className="w-full sm:w-auto px-8 py-3.5 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl font-semibold text-sm transition shadow-sm flex items-center justify-center gap-2"
          >
            <span>Comenzar a Practicar</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onLogin || onStart}
            className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-semibold text-sm transition"
          >
            <span>Iniciar Sesión en la Nube</span>
          </button>
        </div>
      </div>

      {/* Las 4 Secciones del Temario */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono font-bold text-petrol-600 dark:text-petrol-400">Sección 1</span>
            <span className="font-semibold text-slate-400">18% del Examen</span>
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">Fundamentos y Programación Python</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Intérprete vs compilador, léxico, literales (0o, 0x, binarios), operadores aritméticos, precedencia, asociatividad y E/S de consola con print(sep, end).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono font-bold text-petrol-600 dark:text-petrol-400">Sección 2</span>
            <span className="font-semibold text-slate-400">29% del Examen</span>
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">Flujo de Control</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Condicionales anidados, cortocircuito booleano (and, or), bucles while y for, función range(), sentencias break, continue y la cláusula else en bucles.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono font-bold text-petrol-600 dark:text-petrol-400">Sección 3</span>
            <span className="font-semibold text-slate-400">25% del Examen</span>
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">Colecciones de Datos</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Listas (indexing, slicing, clonado vs referencia), inmutabilidad de tuplas, diccionarios (keys, values, items) y manipulación de cadenas de caracteres.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono font-bold text-petrol-600 dark:text-petrol-400">Sección 4</span>
            <span className="font-semibold text-slate-400">28% del Examen</span>
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">Funciones y Excepciones</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Definición con def, return y None, argumentos posicionales y keyword, scopes y global, jerarquía de Built-in Exceptions y bloques try-except.
          </p>
        </div>
      </div>
    </div>
  );
};
