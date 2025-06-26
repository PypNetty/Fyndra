import React, { useState, useEffect, useRef } from 'react';
import { VMSimulator, VMSession } from '../lib/vmSimulator';
import { QuestionnaireResults } from '../lib/vmGenerator';

interface SimulatedVMProps {
  questionnaireResults: QuestionnaireResults;
  onComplete?: (score: number) => void;
}

export const SimulatedVM: React.FC<SimulatedVMProps> = ({ 
  questionnaireResults, 
  onComplete 
}) => {
  const [session, setSession] = useState<VMSession | null>(null);
  const [command, setCommand] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const simulatorRef = useRef(new VMSimulator());

  useEffect(() => {
    // Créer une nouvelle session VM
    const newSession = simulatorRef.current.createSession(questionnaireResults);
    setSession(newSession);
    setIsLoading(false);

    // Focus sur l'input terminal
    setTimeout(() => {
      inputRef.current?.focus();
      console.log('VM Terminal input focused');
    }, 500);
  }, [questionnaireResults]);

  useEffect(() => {
    // Auto-scroll du terminal
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [session?.terminal.history]);

  useEffect(() => {
    // Vérifier si la session est complétée
    if (session?.status === 'completed' && onComplete) {
      onComplete(session.progress.score);
    }
  }, [session?.status, onComplete]);

  const executeCommand = (cmd: string) => {
    if (!session || !cmd.trim()) return;

    const result = simulatorRef.current.executeCommand(session.id, cmd.trim());
    
    // Mettre à jour la session
    const updatedSession = simulatorRef.current.getSession(session.id);
    if (updatedSession) {
      setSession({ ...updatedSession });
    }

    setCommand('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(command);
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const getProgressColor = (percent: number) => {
    if (percent < 30) return 'bg-red-500';
    if (percent < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  if (isLoading || !session) {
    return (
      <div className="bg-gray-900 rounded-lg p-8 text-center">
        <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-white">🚀 Démarrage de votre environnement personnalisé...</p>
      </div>
    );
  }

  const progress = simulatorRef.current.getSessionProgress(session.id);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
      {/* Header avec informations de session */}
      <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-lg">{session.config.title}</h3>
            <p className="text-gray-400 text-sm">{session.config.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className={`w-3 h-3 rounded-full ${
              session.status === 'running' ? 'bg-green-500' : 
              session.status === 'completed' ? 'bg-blue-500' : 'bg-yellow-500'
            }`}></div>
            <span className="text-white text-sm font-medium">
              {session.status === 'running' ? '🟢 En cours' : 
               session.status === 'completed' ? '✅ Terminé' : '🟡 Démarrage'}
            </span>
          </div>
        </div>

        {/* Barre de progression */}
        {progress && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300 text-sm">
                Progression: {progress.completedTasks}/{progress.totalTasks} tâches
              </span>
              <span className="text-blue-400 font-bold">
                {progress.score} points
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(progress.progressPercent)}`}
                style={{ width: `${progress.progressPercent}%` }}
              ></div>
            </div>
            {progress.currentTaskDescription && (
              <p className="text-gray-400 text-sm mt-2">
                🎯 Tâche actuelle: {progress.currentTaskDescription}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Terminal */}
      <div className="relative">
        <div 
          ref={terminalRef}
          className="bg-black text-green-400 font-mono text-sm p-4 h-96 overflow-y-auto cursor-text"
          onClick={handleTerminalClick}
        >
          {session.terminal.history.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
          
          {/* Input line */}
          <div className="flex items-center">
            <span className="text-blue-400 select-none">user@fyndra-vm:{session.terminal.currentDirectory}$</span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent border-none outline-none text-green-400 ml-2 flex-1 font-mono"
              placeholder={session.status === 'running' ? "Tapez votre commande..." : "Session terminée"}
              disabled={session.status !== 'running'}
              autoFocus
              style={{ caretColor: 'rgb(74 222 128)' }}
            />
            {session.status === 'running' && (
              <span className="text-green-400 animate-pulse ml-1">_</span>
            )}
          </div>
        </div>

        {/* Overlay pour les sessions terminées */}
        {session.status === 'completed' && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-gray-800 rounded-lg p-6 text-center max-w-md">
              <div className="text-4xl mb-4">🎉</div>
              <h4 className="text-white text-xl font-bold mb-2">
                Session terminée !
              </h4>
              <p className="text-gray-300 mb-4">
                Score final: <span className="text-blue-400 font-bold">{session.progress.score}</span> points
              </p>
              <p className="text-gray-400 text-sm">
                {session.config.scenario.expectedOutcome}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar avec informations et hints */}
      <div className="bg-gray-800 px-6 py-4 border-t border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Objectif */}
          <div>
            <h4 className="text-white font-semibold mb-2">🎯 Objectif</h4>
            <p className="text-gray-300 text-sm">{session.config.scenario.objective}</p>
          </div>

          {/* Outils disponibles */}
          <div>
            <h4 className="text-white font-semibold mb-2">🛠️ Outils</h4>
            <div className="flex flex-wrap gap-1">
              {session.config.environment.preInstalledTools.map((tool, index) => (
                <span 
                  key={index}
                  className="bg-blue-600 text-white text-xs px-2 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Conseils */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-2">💡 Conseils</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              {session.config.scenario.hints.map((hint, index) => (
                <li key={index}>{hint}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Quick commands */}
      <div className="bg-gray-700 px-6 py-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-gray-400 text-sm">Commandes rapides:</span>
          {['help', 'ls', 'pnpm install', 'pnpm dev', 'git status'].map((quickCmd) => (
            <button
              key={quickCmd}
              onClick={() => executeCommand(quickCmd)}
              disabled={session.status !== 'running'}
              className="bg-gray-600 hover:bg-gray-500 text-white text-xs px-2 py-1 rounded transition-colors disabled:opacity-50"
            >
              {quickCmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
