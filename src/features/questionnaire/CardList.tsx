import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Code,
  Database,
  Cloud,
  Server,
  Monitor,
  Zap,
  Trophy,
  Clock,
  Users,
  Shield,
  Terminal,
  Wifi,
  Eye,
  EyeOff,
  Settings,
  Star,
  Award,
} from "lucide-react";
import { technologyBasedData } from "./data/technologies";
import { useProgressStore } from "../../lib/zustand";
import { PathSelector, AVAILABLE_PATHS } from "./PathSelector";

const CardList: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showPathSelector, setShowPathSelector] = useState(false);
  const technologiesRef = useRef<HTMLDivElement>(null);

  const { progress, setSelectedPath, toggleShowAllDomains, addCompletedQuiz } =
    useProgressStore();

  // Afficher le sélecteur de parcours au premier chargement si aucun parcours n'est sélectionné
  useEffect(() => {
    if (!progress.selectedPath) {
      setShowPathSelector(true);
    }
  }, [progress.selectedPath]);

  // Scroll automatique vers les technologies quand une catégorie est sélectionnée
  useEffect(() => {
    if (selectedCategory && technologiesRef.current) {
      setTimeout(() => {
        technologiesRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300); // Petit délai pour laisser l'animation se terminer
    }
  }, [selectedCategory]);

  // Obtenir les catégories autorisées selon le parcours sélectionné
  const getAllowedCategories = () => {
    if (progress.showAllDomains) {
      return Object.keys(technologyBasedData);
    }

    if (!progress.selectedPath) {
      return Object.keys(technologyBasedData);
    }

    const selectedPathData = AVAILABLE_PATHS.find(
      (p) => p.id === progress.selectedPath
    );
    return selectedPathData?.categories || Object.keys(technologyBasedData);
  };

  const allowedCategories = getAllowedCategories();
  const filteredCategories = Object.entries(technologyBasedData).filter(
    ([categoryName]) => allowedCategories.includes(categoryName)
  );

  // Obtenir le nom du parcours actuel
  const getCurrentPathName = () => {
    const currentPath = AVAILABLE_PATHS.find(
      (p) => p.id === progress.selectedPath
    );
    return currentPath?.name || "Tous les domaines";
  };

  // Mapping des icônes pour chaque catégorie
  const categoryIcons: Record<string, React.ComponentType<any>> = {
    Front: Monitor,
    Back: Server,
    Cloud: Cloud,
    Infrastructure: Database,
    Cybersécurité: Shield,
    Système: Terminal,
    Réseaux: Wifi,
  };

  // Couleurs pour chaque catégorie
  const categoryColors: Record<string, string> = {
    Front: "from-blue-500 to-cyan-500",
    Back: "from-green-500 to-emerald-500",
    Cloud: "from-purple-500 to-violet-500",
    Infrastructure: "from-orange-500 to-red-500",
    Cybersécurité: "from-red-500 to-pink-500",
    Système: "from-gray-500 to-slate-500",
    Réseaux: "from-teal-500 to-blue-500",
  };

  const handleCategorySelect = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
  };

  const handleTechnologySelect = (
    categoryName: string,
    technologyKey: string
  ) => {
    navigate(`/questionnaire/${categoryName}/${technologyKey}`);
  };

  return (
    <div className="space-y-8">
      {/* Path Header */}
      {progress.selectedPath && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="text-lg font-semibold text-white">
                  Parcours: {getCurrentPathName()}
                </span>
              </div>
              <div className="text-sm text-gray-400">
                {Object.keys(progress.completedQuizzes).length} quiz complétés
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={toggleShowAllDomains}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  progress.showAllDomains
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {progress.showAllDomains ? (
                  <>
                    <EyeOff className="w-4 h-4" />
                    Masquer les autres domaines
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    Afficher tous les domaines
                  </>
                )}
              </motion.button>

              <motion.button
                onClick={() => setShowPathSelector(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Settings className="w-4 h-4" />
                Changer de parcours
              </motion.button>
            </div>
          </div>
        </div>
      )}

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCategories.map(([categoryName, categoryData]) => {
          const IconComponent = categoryIcons[categoryName] || Code;
          const isSelected = selectedCategory === categoryName;
          const colorGradient =
            categoryColors[categoryName] || "from-gray-500 to-gray-600";

          return (
            <motion.div
              key={categoryName}
              className={`relative overflow-hidden rounded-xl border cursor-pointer transition-all duration-300 ${
                isSelected
                  ? "border-white/30 bg-white/10"
                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
              }`}
              onHoverStart={() => setHoveredCard(categoryName)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => handleCategorySelect(categoryName)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              layout
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${colorGradient} opacity-10`}
              />

              {/* Card Content */}
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${colorGradient}`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: isSelected ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {categoryData.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {categoryData.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    {Object.keys(categoryData.technologies).length} missions
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    ~15 min
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <AnimatePresence>
                {hoveredCard === categoryName && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Category - Technologies */}
      <AnimatePresence mode="wait">
        {selectedCategory && (
          <motion.div
            ref={technologiesRef}
            key={selectedCategory}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${categoryColors[selectedCategory]}`}
                >
                  {React.createElement(
                    categoryIcons[selectedCategory] || Code,
                    {
                      className: "w-6 h-6 text-white",
                    }
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {technologyBasedData[selectedCategory]?.name}
                  </h3>
                  <p className="text-gray-300">
                    Choisissez une technologie pour commencer votre mission
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(
                  technologyBasedData[selectedCategory]?.technologies || {}
                ).map(([technologyKey, technologyData]) => (
                  <motion.div
                    key={technologyKey}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer"
                    onClick={() =>
                      handleTechnologySelect(selectedCategory, technologyKey)
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {technologyData.name}
                      </h4>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </div>

                    <p className="text-gray-300 text-sm mb-4">
                      {technologyData.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {technologyData.difficulty}
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {technologyData.questionnaire?.length || 0} questions
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Path Selector Modal */}
      <AnimatePresence>
        {showPathSelector && (
          <PathSelector
            currentPath={progress.selectedPath}
            onPathSelect={(pathId) => {
              setSelectedPath(pathId);
              if (pathId === "explore") {
                // Pour le parcours "exploration", montrer tous les domaines
                if (!progress.showAllDomains) {
                  toggleShowAllDomains();
                }
              }
            }}
            onClose={() => setShowPathSelector(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardList;
