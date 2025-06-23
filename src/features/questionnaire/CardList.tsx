import React, { useState } from "react";
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
} from "lucide-react";
import { technologyBasedData } from "./data/technologies";

const CardList: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Mapping des icônes pour chaque catégorie
  const categoryIcons: Record<string, React.ComponentType<any>> = {
    Front: Monitor,
    Back: Server,
    Cloud: Cloud,
    Infrastructure: Database,
    "Tech Info": Shield,
    Système: Terminal,
    Réseaux: Wifi,
  };

  // Couleurs pour chaque catégorie
  const categoryColors: Record<string, string> = {
    Front: "from-blue-500 to-cyan-500",
    Back: "from-green-500 to-emerald-500",
    Cloud: "from-purple-500 to-violet-500",
    Infrastructure: "from-orange-500 to-red-500",
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

  const categories = Object.entries(technologyBasedData);

  return (
    <div className="space-y-8">
      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(([categoryName, categoryData]) => {
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
    </div>
  );
};

export default CardList;
