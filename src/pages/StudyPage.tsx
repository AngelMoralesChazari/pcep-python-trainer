import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, CheckCircle, AlertTriangle, ArrowRight, Code, ChevronDown, Check, Sparkles } from 'lucide-react';
import { PCEP_SYLLABUS } from '../data/syllabusData';
import { THEORY_MODULES } from '../data/theoryContent';
import { PCEPObjectiveCode } from '../types/pcep';
import { TheoryMarkdownRenderer, PythonCodeBlock } from '../components/theory/TheoryMarkdownRenderer';

interface StudyPageProps {
  onPracticeConcept: (objective: PCEPObjectiveCode) => void;
}

// Secuencia ordenada de todos los 17 objetivos del syllabus PCEP-30-02
const ALL_OBJECTIVES: PCEPObjectiveCode[] = [
  '1.1', '1.2', '1.3', '1.4', '1.5',
  '2.1', '2.2',
  '3.1', '3.2', '3.3', '3.4',
  '4.1', '4.2', '4.3', '4.4'
];

export const StudyPage: React.FC<StudyPageProps> = ({ onPracticeConcept }) => {
  const [selectedObjectiveCode, setSelectedObjectiveCode] = useState<PCEPObjectiveCode>('1.1');
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({ 1: true });
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Progreso de objetivos teóricos completados guardado en localStorage
  const [completedObjectives, setCompletedObjectives] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pcep_theory_completed_objectives');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return ['1.1'];
  });

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

    // Marcar como completado el objetivo que el usuario está estudiando
    if (!completedObjectives.includes(code)) {
      const updated = [...completedObjectives, code];
      setCompletedObjectives(updated);
      try {
        localStorage.setItem('pcep_theory_completed_objectives', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
    }

    // Restablecer el scroll del material de lectura arriba al cambiar de tema
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Cálculo del objetivo siguiente y si estamos en el último de la sección
  const currentIndex = ALL_OBJECTIVES.indexOf(selectedObjectiveCode);
  const isLastOverall = currentIndex === ALL_OBJECTIVES.length - 1;
  const nextCode = !isLastOverall ? ALL_OBJECTIVES[currentIndex + 1] : null;
  const nextTheory = nextCode ? THEORY_MODULES[nextCode] : null;
  const isLastOfCurrentSection = nextTheory ? nextTheory.sectionId !== currentTheory.sectionId : true;

  // Siguiente sección info
  const nextSection = nextTheory
    ? PCEP_SYLLABUS.find((s) => s.id === nextTheory.sectionId)
    : null;
  const nextSectionTitle = nextSection
    ? nextSection.title.split('—')[1]?.trim() || nextSection.title
    : '';

  // Acción del botón Siguiente / Next
  const handleNext = () => {
    let updated = [...completedObjectives];
    if (!updated.includes(selectedObjectiveCode)) {
      updated.push(selectedObjectiveCode);
    }

    if (!isLastOverall && nextCode) {
      // Si llegamos al último punto de la sección y avanzamos a otra sección,
      // marcamos TODOS los objetivos de la sección actual como completados para que la barra llegue al 100%
      if (isLastOfCurrentSection) {
        const curSec = PCEP_SYLLABUS.find((s) => s.id === currentTheory.sectionId);
        if (curSec) {
          curSec.objectives.forEach((obj) => {
            if (!updated.includes(obj.code)) {
              updated.push(obj.code);
            }
          });
        }
      }

      // Marcar también el nuevo objetivo como visitado
      if (!updated.includes(nextCode)) {
        updated.push(nextCode);
      }

      setCompletedObjectives(updated);
      try {
        localStorage.setItem('pcep_theory_completed_objectives', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }

      setSelectedObjectiveCode(nextCode);
      if (nextTheory?.sectionId) {
        setExpandedSections((prev) => ({
          ...prev,
          [nextTheory.sectionId]: true,
        }));
      }

      if (mainContentRef.current) {
        mainContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Último objetivo del curso completado
      setCompletedObjectives(updated);
      try {
        localStorage.setItem('pcep_theory_completed_objectives', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      onPracticeConcept(selectedObjectiveCode);
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
            Estudia los conceptos oficiales con coloreado de sintaxis, analiza errores frecuentes y avanza paso a paso.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            onClick={() => onPracticeConcept(selectedObjectiveCode)}
            className="flex items-center gap-1.5 px-3.5 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl text-xs sm:text-sm font-medium transition cursor-pointer"
            title="Practicar ejercicios de este objetivo"
          >
            <Code className="w-4 h-4 text-petrol-600 dark:text-petrol-400" />
            <span>Ejercicios</span>
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-4 py-2 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition shadow-sm cursor-pointer"
          >
            <span>
              {isLastOverall
                ? 'Completar'
                : isLastOfCurrentSection
                  ? `Siguiente Sección`
                  : `Siguiente (${nextCode})`}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
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
              4 Módulos &bull; 17 Objetivos
            </span>
          </div>

          {/* Lista de Secciones en Acordeón con scroll independiente */}
          <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-4 space-y-3">
            {PCEP_SYLLABUS.map((sec) => {
              const isExpanded = Boolean(expandedSections[sec.id]);
              const isCurrentSection = currentTheory.sectionId === sec.id;

              // Cálculo del progreso de la sección basado en objetivos completados
              const completedInSec = sec.objectives.filter((obj) =>
                completedObjectives.includes(obj.code)
              ).length;
              const totalInSec = sec.objectives.length;
              const isFullyCompleted = completedInSec === totalInSec;
              const sectionProgressPercent = Math.round((completedInSec / totalInSec) * 100);

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
                          className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition ${isFullyCompleted
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : isCurrentSection
                                ? 'bg-petrol-600 text-white shadow-xs'
                                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                        >
                          {isFullyCompleted ? '✓' : sec.id}
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                          {sec.title.split('—')[1]?.trim() || sec.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isFullyCompleted ? (
                          <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-800/60 flex items-center gap-1 shadow-2xs">
                            100%
                            <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          </span>
                        ) : sectionProgressPercent > 0 ? (
                          <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-md bg-petrol-100 dark:bg-petrol-950 text-petrol-700 dark:text-petrol-300 border border-petrol-300/60 dark:border-petrol-800/60 shadow-2xs">
                            {sectionProgressPercent}%
                          </span>
                        ) : (
                          <span className="font-mono text-[11px] font-medium px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
                            {sec.weightPercentage}%
                          </span>
                        )}

                        <div
                          className={`p-1 rounded-md text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-petrol-600 dark:text-petrol-400' : ''
                            }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Barra de progreso de la sección que avanza al terminar objetivos */}
                    <div className="w-full bg-slate-200/80 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${isFullyCompleted
                            ? 'bg-emerald-500'
                            : sectionProgressPercent > 0
                              ? 'bg-petrol-500'
                              : 'bg-transparent'
                          }`}
                        style={{
                          width: `${sectionProgressPercent}%`,
                        }}
                      />
                    </div>
                  </button>

                  {/* Contenido desplegable: lista compacta de objetivos */}
                  {isExpanded && (
                    <div className="p-2 pt-1 border-t border-slate-200 dark:border-slate-800 space-y-1 bg-white dark:bg-slate-900">
                      {sec.objectives.map((obj) => {
                        const isSelected = selectedObjectiveCode === obj.code;
                        const isCompleted = completedObjectives.includes(obj.code);

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
                                    : isCompleted
                                      ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300'
                                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                                  }`}
                              >
                                {obj.code}
                              </span>
                              <span className="truncate">{obj.title}</span>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0 ml-2">
                              {isCompleted && (
                                <span
                                  className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px] font-bold"
                                  title="Objetivo completado"
                                >
                                  ✓
                                </span>
                              )}
                              {isSelected && (
                                <span className="w-1.5 h-1.5 rounded-full bg-petrol-600 dark:bg-petrol-400 shrink-0" />
                              )}
                            </div>
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
              {completedObjectives.includes(currentTheory.objectiveCode) && (
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/60">
                  <Check className="w-3 h-3" />
                  <span>Completado</span>
                </span>
              )}
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

          {/* Ejemplos de Código con resaltado de sintaxis Python */}
          <div className="space-y-4 pt-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Code className="w-4 h-4 text-petrol-600" />
              <span>Ejemplos en Código Python</span>
            </h3>

            {currentTheory.codeExamples.map((ex, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
              >
                <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex justify-between items-center">
                  <span>{ex.title}</span>
                  <span className="text-petrol-600 dark:text-petrol-400 font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-petrol-50 dark:bg-petrol-950/80 border border-petrol-200 dark:border-petrol-800/60">
                    Python 3
                  </span>
                </div>
                <div className="p-4 bg-slate-950 overflow-x-auto">
                  <PythonCodeBlock code={ex.code} />
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
                  {ex.description}
                </div>
              </div>
            ))}
          </div>

          {/* Errores Comunes (Pitfalls) con coloreado de sintaxis */}
          <div className="space-y-4 pt-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Errores Comunes en el Examen PCEP</span>
            </h3>

            {currentTheory.commonPitfalls.map((pitfall, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/20 p-4 sm:p-5 space-y-3"
              >
                <h4 className="text-xs font-bold text-rose-900 dark:text-rose-200">
                  {pitfall.title}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {pitfall.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-rose-900/50 shadow-inner">
                    <div className="text-[11px] text-rose-400 mb-2 font-sans font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block" />
                      <span>Código Incorrecto</span>
                    </div>
                    <PythonCodeBlock code={pitfall.badCode} />
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-900/50 shadow-inner">
                    <div className="text-[11px] text-emerald-400 mb-2 font-sans font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      <span>Código Correcto</span>
                    </div>
                    <PythonCodeBlock code={pitfall.goodCode} />
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
                  <span className="text-petrol-600 dark:text-petrol-400 font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Barra inferior de navegación: Practicar y Siguiente / Next Section */}
          <div className="pt-6 pb-2 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => onPracticeConcept(selectedObjectiveCode)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm transition cursor-pointer"
            >
              <Code className="w-4 h-4 text-petrol-600 dark:text-petrol-400" />
              <span>Practicar Ejercicios ({selectedObjectiveCode})</span>
            </button>

            <button
              onClick={handleNext}
              className={`w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-xl text-sm font-semibold transition shadow-md cursor-pointer ${isLastOfCurrentSection
                  ? 'bg-gradient-to-r from-petrol-600 to-teal-600 hover:from-petrol-700 hover:to-teal-700 text-white'
                  : 'bg-petrol-600 hover:bg-petrol-700 text-white'
                }`}
            >
              <span>
                {isLastOverall
                  ? '¡Completar Temario! (Ir a Práctica)'
                  : isLastOfCurrentSection
                    ? `Siguiente Sección: ${nextSectionTitle}`
                    : `Siguiente: ${nextCode}`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
