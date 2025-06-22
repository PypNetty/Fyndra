import { useEffect, useRef, useState } from "react";

interface WebTerminalProps {
  wsUrl?: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: Error) => void;
}

export const WebTerminal: React.FC<WebTerminalProps> = ({
  wsUrl,
  onConnect,
  onDisconnect,
  onError,
}) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    if (!wsUrl) return;

    // En production, ici on utiliserait xterm.js + WebSocket
    // Pour la démo, on simule juste la connexion
    console.log("Connecting to WebSocket:", wsUrl);

    // Simulation de connexion
    setTimeout(() => {
      setIsConnected(true);
      setHistory(["Connected to VM terminal", "user@fyndra-vm:~$ "]);
      onConnect?.();
    }, 1000);

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      setIsConnected(false);
      onDisconnect?.();
    };
  }, [wsUrl, onConnect, onDisconnect]);

  if (!wsUrl) {
    return (
      <div className="h-full bg-black rounded-lg p-4 flex items-center justify-center">
        <div className="text-white/60 text-center">
          <div className="text-2xl mb-2">🔌</div>
          <p>Terminal non connecté</p>
          <p className="text-sm">Connexion WebSocket requise</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-black rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              isConnected ? "bg-green-400" : "bg-red-400"
            }`}
          />
          <span className="text-white/60 text-sm">
            {isConnected ? "Connecté" : "Déconnecté"}
          </span>
        </div>
        {wsUrl && (
          <span className="text-white/40 text-xs font-mono">
            {wsUrl.replace(/^ws:\/\//, "").split("/")[0]}
          </span>
        )}
      </div>

      <div
        ref={terminalRef}
        className="h-full bg-black font-mono text-sm text-green-400 overflow-y-auto"
      >
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
        {isConnected && <div className="animate-pulse">█</div>}
      </div>
    </div>
  );
};

export default WebTerminal;
