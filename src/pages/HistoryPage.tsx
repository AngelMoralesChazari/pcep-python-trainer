import React, { useState } from 'react';
import { History, CheckCircle2, XCircle, Clock, Calendar, Code, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';

interface HistoryPageProps {
  onNavigate?: (tab: string) => void;
}

export const HistoryPage: React.FC<HistoryPageProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const { submissions, exercises } = useProgress();
  const [selectedSubmissionId, setSelectedSubmissionId] = useState<string | null>(null);

  const selectedSub = submissions.find(s => s.id === selectedSubmissionId) || null;
  const selectedEx = selectedSub ? exercises.find(e => e.id === selectedSub.exerciseId) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-mono font-semibold text-petrol-600 dark:text-petrol-400 uppercase tracking-wider">
            Registro de Actividad
          </span>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Historial de Intentos</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Consulta el historial detallado de todas tus soluciones enviadas, veredictos obtenidos y marcas temporales.
          </p>
        </div>
        <span className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
          {submissions.length} envíos registrados
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Lista de Envíos */}
        <div className="lg:col-span-7 space-y-3">
          {submissions.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3">
              <p className="text-sm text-slate-500">
                {user
                  ? 'Aún no has registrado intentos de ejercicios.'
                  : 'Modo invitado: Aún no has registrado soluciones en esta sesión.'}
              </p>
              {!user && onNavigate && (
                <button
                  onClick={() => onNavigate('login')}
                  className="px-4 py-2 bg-petrol-600 hover:bg-petrol-700 text-white rounded-lg text-xs font-semibold transition"
                >
                  Iniciar Sesión para Guardar Historial
                </button>
              )}
            </div>
          ) : (
            submissions.map((sub) => {
              const ex = exercises.find(e => e.id === sub.exerciseId);
              const isSelected = selectedSubmissionId === sub.id;
              const dateStr = new Date(sub.timestamp).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit'
              });

              return (
                <div
                  key={sub.id}
                  onClick={() => setSelectedSubmissionId(sub.id)}
                  className={`p-4 rounded-xl border transition cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'border-petrol-600 bg-petrol-50/50 dark:bg-petrol-950/40 ring-1 ring-petrol-500'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {sub.isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                      )}
                      <span className={`text-xs font-bold uppercase tracking-wider ${
                        sub.isCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'
                      }`}>
                        {sub.verdict.replace('_', ' ')}
                      </span>
                      <span className="text-[11px] text-slate-400">&bull; {dateStr}</span>
                    </div>

                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {ex?.title || `Ejercicio (${sub.exerciseId})`}
                    </h4>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                </div>
              );
            })
          )}
        </div>

        {/* Panel Detalle de Envío Seleccionado */}
        <div className="lg:col-span-5">
          {selectedSub && selectedEx ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4 sticky top-24">
              <div className="space-y-1 pb-3 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono font-semibold text-slate-500">Detalles del Intento</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{selectedEx.title}</h3>
                <p className="text-xs text-slate-500">{selectedEx.sectionTitle}</p>
              </div>

              {selectedSub.userAnswer && (
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-500 uppercase">Respuesta enviada:</span>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-200">
                    {selectedSub.userAnswer}
                  </div>
                </div>
              )}

              {selectedSub.userCode && (
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-500 uppercase">Código ejecutado:</span>
                  <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-slate-100 overflow-x-auto">
                    {selectedSub.userCode}
                  </pre>
                </div>
              )}

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <div className="font-semibold text-slate-800 dark:text-slate-200">Explicación oficial:</div>
                <p>{selectedEx.explanation}</p>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-400 text-xs">
              Selecciona un intento de la lista para ver el código enviado y los detalles.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
