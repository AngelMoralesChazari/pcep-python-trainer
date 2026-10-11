import React from 'react';
import { ArrowRight, ShieldCheck, BarChart2, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import pythonLogo from '../assets/Python.png';

interface HomePageProps {
  onStart: () => void;
  onLogin?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStart, onLogin }) => {
  const { user } = useAuth();

  return (
    <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      {/* Fondo de Estrellas animadas exclusivo en Tema Oscuro */}
      <div className="hidden dark:block fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="stars-container">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
        </div>
      </div>

      {/* Marca de agua / Logo de Python ambiental de fondo con animación flotante */}
      <div className="pointer-events-none select-none fixed inset-0 flex items-center justify-center overflow-hidden z-0">
        <div className="relative w-72 h-72 sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] opacity-[0.04] dark:opacity-[0.14] animate-float transition-opacity duration-700">
          {/* Resplandor cósmico difuso en tema oscuro */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-petrol-500/25 via-sky-500/20 to-blue-600/25 blur-3xl dark:opacity-90" />
          <img
            src={pythonLogo}
            alt="Python Ambient Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(45,212,191,0.2)] dark:drop-shadow-[0_0_65px_rgba(56,189,248,0.35)]"
          />
        </div>
      </div>

      {/* Contenido Principal con z-index superior para interacción y clics impecables */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12 sm:space-y-14">
        {/* Hero Principal Sobrio y Profesional */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-petrol-100 dark:bg-petrol-900/70 dark:backdrop-blur-sm text-petrol-800 dark:text-petrol-200 text-xs font-semibold shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Alineado 100% con el Temario Oficial PCEP-30-02</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
            <span>Entrena y Domina la Certificación</span>
            <span className="block text-petrol-600 dark:text-petrol-400 whitespace-nowrap mt-1">
              Python PCEP-30-02
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Prepárate para PCEP-30-02 practicando Python desde los fundamentos hasta la resolución de problemas.
            Teoría clara, análisis de código, predicción de salida, entorno interactivo seguro y simuladores reales de examen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={onStart}
              className="w-full sm:w-auto px-7 py-3 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl font-semibold text-sm transition shadow-sm flex items-center justify-center gap-2 group"
            >
              <span>Comenzar a Practicar</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {user ? (
              <button
                onClick={onStart}
                className="w-full sm:w-auto px-7 py-3 bg-white dark:bg-slate-900/90 dark:backdrop-blur-sm border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 shadow-sm"
              >
                <BarChart2 className="w-4 h-4 text-petrol-600" />
                <span>Ir a mi Panel ({user.displayName?.split(' ')[0]})</span>
              </button>
            ) : (
              <button
                onClick={onLogin || onStart}
                className="w-full sm:w-auto px-7 py-3 bg-white dark:bg-slate-900/90 dark:backdrop-blur-sm border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 shadow-sm"
              >
                <LogIn className="w-4 h-4 text-petrol-600" />
                <span>Iniciar Sesión en la Nube</span>
              </button>
            )}
          </div>
        </div>

        {/* Las 4 Secciones del Temario en Cuadrícula 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <div
            onClick={onStart}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 dark:backdrop-blur-md border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm hover:border-petrol-400 dark:hover:border-petrol-500 dark:hover:bg-slate-900/95 hover:shadow-md transition cursor-pointer group"
          >
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono font-bold text-petrol-600 dark:text-petrol-400 group-hover:underline">Sección 1</span>
              <span className="font-semibold text-slate-400">18% del Examen</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-petrol-600 dark:group-hover:text-petrol-400 transition">
              Fundamentos y Programación Python
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Intérprete vs compilador, léxico, literales (0o, 0x, binarios), operadores aritméticos, precedencia, asociatividad y E/S de consola con print(sep, end).
            </p>
          </div>

          <div
            onClick={onStart}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 dark:backdrop-blur-md border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm hover:border-petrol-400 dark:hover:border-petrol-500 dark:hover:bg-slate-900/95 hover:shadow-md transition cursor-pointer group"
          >
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono font-bold text-petrol-600 dark:text-petrol-400 group-hover:underline">Sección 2</span>
              <span className="font-semibold text-slate-400">29% del Examen</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-petrol-600 dark:group-hover:text-petrol-400 transition">
              Flujo de Control
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Condicionales anidados, cortocircuito booleano (and, or), bucles while y for, función range(), sentencias break, continue y la cláusula else en bucles.
            </p>
          </div>

          <div
            onClick={onStart}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 dark:backdrop-blur-md border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm hover:border-petrol-400 dark:hover:border-petrol-500 dark:hover:bg-slate-900/95 hover:shadow-md transition cursor-pointer group"
          >
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono font-bold text-petrol-600 dark:text-petrol-400 group-hover:underline">Sección 3</span>
              <span className="font-semibold text-slate-400">25% del Examen</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-petrol-600 dark:group-hover:text-petrol-400 transition">
              Colecciones de Datos
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Listas (indexing, slicing, clonado vs referencia), inmutabilidad de tuplas, diccionarios (keys, values, items) y manipulación de cadenas de caracteres.
            </p>
          </div>

          <div
            onClick={onStart}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 dark:backdrop-blur-md border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm hover:border-petrol-400 dark:hover:border-petrol-500 dark:hover:bg-slate-900/95 hover:shadow-md transition cursor-pointer group"
          >
            <div className="flex justify-between items-center text-xs">
              <span className="font-mono font-bold text-petrol-600 dark:text-petrol-400 group-hover:underline">Sección 4</span>
              <span className="font-semibold text-slate-400">28% del Examen</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-petrol-600 dark:group-hover:text-petrol-400 transition">
              Funciones y Excepciones
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Definición con def, return y None, argumentos posicionales y keyword, scopes y global, jerarquía de Built-in Exceptions y bloques try-except.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
