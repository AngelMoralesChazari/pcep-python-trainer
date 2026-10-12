import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, CheckCircle, AlertTriangle, ArrowRight, Code, ChevronDown } from 'lucide-react';
import { PCEP_SYLLABUS } from '../data/syllabusData';
import { THEORY_MODULES } from '../data/theoryContent';
import { PCEPObjectiveCode } from '../types/pcep';
import { TheoryMarkdownRenderer } from '../components/theory/TheoryMarkdownRenderer';
import { useProgress } from '../context/ProgressContext';

interface StudyPageProps {
  onPracticeConcept: (objective: PCEPObjectiveCode) => void;
}

export const StudyPage: React.FC<StudyPageProps> = ({ onPracticeConcept }) => {
  const { progress } = useProgress();
  const [selectedObjectiveCode, setSelectedObjectiveCode] = useState<PCEPObjectiveCode>('1.1');
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({ 1: true });
  const mainContentRef = useRef<HTMLDivElement>(null);

  const currentTheory = THEORY_MODULES[selectedObjectiveCode] || THEORY_MODULES['1.1'];

  // Asegurar que la sección actual esté abierta si cambia el objetivo activo
  useEffect(() => {
    if (currentTheory?.sectionId) {
      setExpandedSections((prev) => ({
        ...prev,
        [currentTheory.sectionId]: true,
      }));
    }
  }, [currentTheory?.sectionId]);

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleSelectObjective = (code: PCEPObjectiveCode, sectionId: number) => {
    setSelectedObjectiveCode(code);
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: true,
    }));
    // Restablecer el scroll del material de lectura arriba al cambiar de tema
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-[95%] max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6 h-full flex flex-col pt-3 sm:pt-4 pb-3 sm:pb-4 gap-3 sm:gap-4 overflow-hidden">
      {/* Header fijo superior de la biblioteca de teoría */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div>
          <span className="text-xs font-mono font-semibold text-petrol-600 dark:text-petrol-400 uppercase tracking-wider">
            Temario Oficial PCEP-30-02
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            Conceptos Clave
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Estudia los conceptos oficiales, analiza errores frecuentes y salta directamente a la práctica de cada habilidad.
          </p>
        </div>

        <button
          onClick={() => onPracticeConcept(selectedObjectiveCode)}
          className="flex items-center gap-2 px-4 py-2 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition shadow-sm shrink-0 self-start sm:self-auto cursor-pointer"
        >
          <span>Practicar este concepto ({selectedObjectiveCode})</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Contenedor principal de dos paneles con scroll independiente */}
      <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-4 lg:gap-6 overflow-hidden">
        {/* Panel Lateral Izquierdo: Secciones del Examen (Acordeón con scroll propio) */}
        <aside className="w-full lg:w-[380px] xl:w-[420px] shrink-0 flex flex-col min-h-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
          {/* Cabecera del panel lateral */}
          <div className="p-3.5 sm:p-4 pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/50 dark:bg-slate-950/40">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-petrol-600 dark:text-petrol-400" />
              <span>Secciones del Examen</span>
            </h2>
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              4 Módulos
            </span>
          </div>

          {/* Lista de Secciones en Acordeón con scroll independiente */}
          <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-4 space-y-3">
            {PCEP_SYLLABUS.map((sec) => {
              const isExpanded = Boolean(expandedSections[sec.id]);
              const isCurrentSection = currentTheory.sectionId === sec.id;
              const sectionScore = progress?.sectionScores?.[sec.id] || 0;

              return (
                <div
                  key={sec.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${isCurrentSection
                      ? 'border-petrol-300 dark:border-petrol-800 bg-slate-50/80 dark:bg-slate-900/80 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40'
                    }`}
                >
                  {/* Encabezado del módulo acordeón (clic para desplegar/contraer) */}
                  <button
                    type="button"
                    onClick={() => toggleSection(sec.id)}
                    className={`w-full p-3.5 flex flex-col gap-2.5 text-left transition cursor-pointer select-none ${isExpanded
                        ? 'bg-slate-100/70 dark:bg-slate-800/50'
                        : 'hover:bg-slate-100/50 dark:hover:bg-slate-800/30'
                      }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition ${isCurrentSection
                              ? 'bg-petrol-600 text-white shadow-xs'
                              : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                        >
                          {sec.id}
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                          {sec.title.split('—')[1]?.trim() || sec.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                          {sec.weightPercentage}%
                        </span>
                        <div
                          className={`p-1 rounded-md text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-petrol-600 dark:text-petrol-400' : ''
                            }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Mini barra de progreso / peso del examen (inspirada en Cisco NetAcad) */}
                    <div className="w-full bg-slate-200/70 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${sectionScore >= 80
                            ? 'bg-emerald-500'
                            : sectionScore > 0
                              ? 'bg-amber-500'
                              : 'bg-petrol-500'
                          }`}
                        style={{
                          width: `${sectionScore > 0 ? sectionScore : sec.weightPercentage}%`,
                        }}
                      />
                    </div>
                  </button>

                  {/* Contenido desplegable: lista compacta de objetivos */}
                  {isExpanded && (
                    <div className="p-2 pt-1 border-t border-slate-200 dark:border-slate-800 space-y-1 bg-white dark:bg-slate-900">
                      {sec.objectives.map((obj) => {
                        const isSelected = selectedObjectiveCode === obj.code;
                        return (
                          <button
                            key={obj.code}
                            type="button"
                            onClick={() => handleSelectObjective(obj.code, sec.id)}
                            className={`w-full text-left px-3 py-2.5 rounded-lg text-xs sm:text-[13px] transition flex items-center justify-between cursor-pointer ${isSelected
                                ? 'bg-petrol-50 dark:bg-petrol-950/70 text-petrol-800 dark:text-petrol-200 font-semibold border-l-3 border-petrol-600 shadow-xs'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-100'
                              }`}
                          >
                            <div className="flex items-center gap-2.5 truncate">
                              <span
                                className={`font-mono text-xs px-1.5 py-0.5 rounded font-bold ${isSelected
                                    ? 'bg-petrol-200/70 dark:bg-petrol-900 text-petrol-900 dark:text-petrol-200'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                                  }`}
                              >
                                {obj.code}
                              </span>
                              <span className="truncate">{obj.title}</span>
                            </div>
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-petrol-600 dark:bg-petrol-400 shrink-0 ml-1.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* Panel Central: Contenido de Teoría con scroll independiente */}
        <main
          ref={mainContentRef}
          className="flex-1 min-h-0 overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6"
        >
          {/* Header del tema */}
          <div className="space-y-2 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-petrol-100 dark:bg-petrol-900 text-petrol-800 dark:text-petrol-200">
                Objetivo PCEP {currentTheory.objectiveCode}
              </span>
              <span className="text-xs text-slate-400">Sección {currentTheory.sectionId}</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {currentTheory.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {currentTheory.summary}
            </p>
          </div>

          {/* Explicación en Markdown estructurado con coloreado sintáctico */}
          <TheoryMarkdownRenderer content={currentTheory.explanationMarkdown} />

          {/* Ejemplos de Código */}
          <div className="space-y-4 pt-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Code className="w-4 h-4 text-petrol-600" />
              <span>Ejemplos en Código Python</span>
            </h3>

            {currentTheory.codeExamples.map((ex, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
                  <span>{ex.title}</span>
                  <span className="text-slate-400 font-mono text-[11px]">Python 3</span>
                </div>
                <pre className="p-4 bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed">
                  {ex.code}
                </pre>
                <div className="p-3 bg-white dark:bg-slate-900 text-xs text-slate-500 border-t border-slate-200 dark:border-slate-800">
                  {ex.description}
                </div>
              </div>
            ))}
          </div>

          {/* Errores Comunes (Pitfalls) */}
          <div className="space-y-4 pt-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Errores Comunes en el Examen PCEP</span>
            </h3>

            {currentTheory.commonPitfalls.map((pitfall, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/20 p-4 space-y-3"
              >
                <h4 className="text-xs font-bold text-rose-900 dark:text-rose-200">
                  {pitfall.title}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300">{pitfall.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-slate-900 text-rose-400 border border-rose-900/40">
                    <div className="text-[10px] text-rose-300/80 mb-1 font-sans">
                      ❌ Código Incorrecto:
                    </div>
                    <pre className="whitespace-pre-wrap">{pitfall.badCode}</pre>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 text-emerald-400 border border-emerald-900/40">
                    <div className="text-[10px] text-emerald-300/80 mb-1 font-sans">
                      ✓ Código Correcto:
                    </div>
                    <pre className="whitespace-pre-wrap">{pitfall.goodCode}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Puntos clave para recordar (Key Takeaways) */}
          <div className="p-4 rounded-xl bg-petrol-50/70 dark:bg-petrol-950/30 border border-petrol-200 dark:border-petrol-800/60 space-y-2">
            <h4 className="text-xs font-bold text-petrol-900 dark:text-petrol-200 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-petrol-600" />
              <span>Puntos Clave para Recordar:</span>
            </h4>
            <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
              {currentTheory.keyTakeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-petrol-600 dark:text-petrol-400">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón inferior de práctica */}
          <div className="pt-4 flex justify-end">
            <button
              onClick={() => onPracticeConcept(selectedObjectiveCode)}
              className="flex items-center gap-2 px-6 py-2.5 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl text-sm font-medium transition shadow-sm cursor-pointer"
            >
              <span>Practicar Ejercicios de este Objetivo ({selectedObjectiveCode})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
