import React, { useState } from 'react';
import { BookOpen, CheckCircle, AlertTriangle, ArrowRight, Code, Sparkles } from 'lucide-react';
import { PCEP_SYLLABUS } from '../data/syllabusData';
import { THEORY_MODULES } from '../data/theoryContent';
import { PCEPObjectiveCode } from '../types/pcep';

interface StudyPageProps {
  onPracticeConcept: (objective: PCEPObjectiveCode) => void;
}

export const StudyPage: React.FC<StudyPageProps> = ({ onPracticeConcept }) => {
  const [selectedObjectiveCode, setSelectedObjectiveCode] = useState<PCEPObjectiveCode>('1.1');

  const currentTheory = THEORY_MODULES[selectedObjectiveCode] || THEORY_MODULES['1.1'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-mono font-semibold text-petrol-600 dark:text-petrol-400 uppercase tracking-wider">
            Temario Oficial PCEP-30-02
          </span>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Biblioteca Teórica y Conceptos Clave</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Estudia los conceptos oficiales, analiza errores frecuentes y salta directamente a la práctica de cada habilidad.
          </p>
        </div>

        <button
          onClick={() => onPracticeConcept(selectedObjectiveCode)}
          className="flex items-center gap-2 px-5 py-2.5 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl text-sm font-medium transition shadow-sm shrink-0"
        >
          <span>Practicar este concepto</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Menú Lateral: Temario y Objetivos */}
        <aside className="lg:col-span-4 space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-2">
              Secciones del Examen
            </h2>

            <div className="space-y-4">
              {PCEP_SYLLABUS.map((sec) => (
                <div key={sec.id} className="space-y-1.5">
                  <div className="flex items-center justify-between px-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <span className="truncate">{sec.title.split('—')[1] || sec.title}</span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {sec.weightPercentage}%
                    </span>
                  </div>

                  <div className="space-y-1">
                    {sec.objectives.map((obj) => {
                      const isSelected = selectedObjectiveCode === obj.code;
                      return (
                        <button
                          key={obj.code}
                          onClick={() => setSelectedObjectiveCode(obj.code)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center justify-between ${
                            isSelected
                              ? 'bg-petrol-50 dark:bg-petrol-950/60 text-petrol-700 dark:text-petrol-300 font-semibold border-l-2 border-petrol-600'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                          }`}
                        >
                          <span className="truncate pr-2">{obj.code} &bull; {obj.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Panel Central: Contenido de Teoría Detallado */}
        <main className="lg:col-span-8 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
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

            {/* Explicación en Markdown estructurado */}
            <div className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed space-y-4 whitespace-pre-line font-normal">
              {currentTheory.explanationMarkdown}
            </div>

            {/* Ejemplos de Código */}
            <div className="space-y-4 pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Code className="w-4 h-4 text-petrol-600" />
                <span>Ejemplos en Código Python</span>
              </h3>

              {currentTheory.codeExamples.map((ex, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
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
                <div key={idx} className="rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/20 p-4 space-y-3">
                  <h4 className="text-xs font-bold text-rose-900 dark:text-rose-200">{pitfall.title}</h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300">{pitfall.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-slate-900 text-rose-400 border border-rose-900/40">
                      <div className="text-[10px] text-rose-300/80 mb-1 font-sans">❌ Código Incorrecto:</div>
                      <pre className="whitespace-pre-wrap">{pitfall.badCode}</pre>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 text-emerald-400 border border-emerald-900/40">
                      <div className="text-[10px] text-emerald-300/80 mb-1 font-sans">✓ Código Correcto:</div>
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
                className="flex items-center gap-2 px-6 py-2.5 bg-petrol-600 hover:bg-petrol-700 text-white rounded-xl text-sm font-medium transition shadow-sm"
              >
                <span>Practicar Ejercicios de este Objetivo ({selectedObjectiveCode})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
