import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Server,
  Container,
  Shield,
  Wifi,
  HelpCircle,
  ArrowRight,
  X,
  Sparkles,
} from "lucide-react";
import { UserPath } from "../types";

interface PathSelectorProps {
  onPathSelect: (pathId: string | null) => void;
  onClose: () => void;
  currentPath?: string;
}

const AVAILABLE_PATHS: UserPath[] = [
  {
    id: "frontend",
    name: "Développement Frontend",
    icon: "👨‍💻",
    description: "Interfaces utilisateur, UX/UI, frameworks modernes",
    categories: ["Front"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "backend",
    name: "Backend / API",
    icon: "⚙️",
    description: "Serveurs, bases de données, APIs REST et GraphQL",
    categories: ["Back", "Cloud"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "devops",
    name: "DevOps / Infrastructure",
    icon: "🛠️",
    description: "CI/CD, conteneurs, orchestration, cloud",
    categories: ["Infrastructure", "Cloud"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: "security",
    name: "Sécurité / Cybersécurité",
    icon: "🔐",
    description: "Sécurité des applications, pentesting, conformité",
    categories: ["Cybersécurité"],
    color: "from-red-500 to-pink-500",
  },
  {
    id: "network",
    name: "Réseau / Systèmes",
    icon: "🌐",
    description: "Administration réseau, systèmes Linux, monitoring",
    categories: ["Réseaux", "Système"],
    color: "from-teal-500 to-blue-500",
  },
  {
    id: "explore",
    name: "Je ne sais pas encore",
    icon: "❓",
    description: "Explorer tous les domaines pour découvrir mes préférences",
    categories: [
      "Front",
      "Back",
      "Cloud",
      "Infrastructure",
      "Cybersécurité",
      "Système",
      "Réseaux",
    ],
    color: "from-purple-500 to-violet-500",
  },
];

const PathSelector: React.FC<PathSelectorProps> = ({
  onPathSelect,
  onClose,
  currentPath,
}) => {
  const [selectedPath, setSelectedPath] = useState<string | null>(
    currentPath || null
  );

  const handlePathSelect = (pathId: string) => {
    setSelectedPath(pathId);
  };

  const handleConfirm = () => {
    onPathSelect(selectedPath);
    onClose();
  };

  const getIcon = (pathId: string) => {
    switch (pathId) {
      case "frontend":
        return <Monitor className="w-8 h-8" />;
      case "backend":
        return <Server className="w-8 h-8" />;
      case "devops":
        return <Container className="w-8 h-8" />;
      case "security":
        return <Shield className="w-8 h-8" />;
      case "network":
        return <Wifi className="w-8 h-8" />;
      case "explore":
        return <HelpCircle className="w-8 h-8" />;
      default:
        return <Sparkles className="w-8 h-8" />;
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#0a0a1a] border border-white/20 rounded-lg p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Quel est ton domaine de prédilection ?
            </h2>
            <p className="text-gray-300">
              Choisis ton parcours pour une expérience personnalisée
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {AVAILABLE_PATHS.map((path) => (
            <motion.div
              key={path.id}
              className={`relative cursor-pointer rounded-xl border-2 transition-all duration-300 ${
                selectedPath === path.id
                  ? "border-white/40 bg-white/10"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
              }`}
              onClick={() => handlePathSelect(path.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-10 rounded-xl`}
              />

              {/* Content */}
              <div className="relative p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${path.color} text-white`}
                  >
                    {getIcon(path.id)}
                  </div>
                  <div className="text-2xl">{path.icon}</div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {path.name}
                </h3>

                <p className="text-gray-300 text-sm mb-4">{path.description}</p>

                <div className="flex flex-wrap gap-1">
                  {path.categories.map((category) => (
                    <span
                      key={category}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {selectedPath === path.id && (
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {selectedPath && (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.button
              onClick={handleConfirm}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium text-white hover:from-blue-600 hover:to-purple-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commencer mon parcours
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export { PathSelector, AVAILABLE_PATHS };
export type { UserPath };
