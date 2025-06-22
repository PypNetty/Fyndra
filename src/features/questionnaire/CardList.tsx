import React from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code,
  Cloud,
  Server,
  Package,
  Layers,
  ArrowRight,
  Clock,
  BookOpen,
} from "lucide-react";
import { technologyBasedData } from "./data/technologies";

const CardList: React.FC = () => {
  const navigate = useNavigate();

  const handleTechnologyClick = (categoryName: string, techKey: string) => {
    // Navigation vers une page de questionnaire spécifique
    navigate(
      `/questionnaire/${categoryName.toLowerCase()}/${techKey.toLowerCase()}`
    );
  };

  const getTechnologyIcon = (categoryName: string) => {
    const iconMap = {
      Front: Code,
      Back: Server,
      Cloud: Cloud,
      Infrastructure: Package,
    };

    const IconComponent =
      iconMap[categoryName as keyof typeof iconMap] || Layers;
    return IconComponent;
  };

  const getTechnologyColor = (categoryName: string) => {
    const colorMap = {
      Front: "from-blue-500 to-cyan-500",
      Back: "from-green-500 to-emerald-500",
      Cloud: "from-orange-500 to-yellow-500",
      Infrastructure: "from-purple-500 to-pink-500",
    };

    return (
      colorMap[categoryName as keyof typeof colorMap] ||
      "from-gray-500 to-gray-600"
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-8">
      {Object.entries(technologyBasedData).map(
        ([categoryName, technologies]) => {
          const IconComponent = getTechnologyIcon(categoryName);
          const gradientColors = getTechnologyColor(categoryName);

          return (
            <motion.div
              key={categoryName}
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 bg-gradient-to-r ${gradientColors} rounded-lg`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {categoryName}
                  </h2>
                  <p className="text-gray-400">
                    {categoryName === "Front"
                      ? "Technologies frontend"
                      : categoryName === "Back"
                      ? "Technologies backend"
                      : categoryName === "Cloud"
                      ? "Plateformes cloud"
                      : "Infrastructure et DevOps"}
                  </p>
                </div>
              </div>

              {/* Technology Cards Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {Object.entries(technologies).map(([techKey, tech]) => (
                  <motion.div
                    key={techKey}
                    variants={item}
                    className="group relative"
                  >
                    <motion.div
                      className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        handleTechnologyClick(categoryName, techKey)
                      }
                    >
                      {/* Technology Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 bg-gradient-to-r ${gradientColors} rounded-md`}
                          >
                            <span className="text-white font-bold text-sm">
                              {tech.icon}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {tech.name}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {tech.category}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>

                      {/* Technology Description */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {tech.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          <span>
                            {tech.questionnaire?.length || 0} questions
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>5-10 min</span>
                        </div>
                      </div>

                      {/* Difficulty Badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            tech.difficulty === "Débutant"
                              ? "bg-green-500/20 text-green-400"
                              : tech.difficulty === "Intermédiaire"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {tech.difficulty}
                        </span>
                      </div>

                      {/* Hover Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${gradientColors} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`}
                      ></div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        }
      )}
    </div>
  );
};
=======

const CardList: React.FC = () => (
  <div>
    {/* List of cards will go here */}
  </div>
);
>>>>>>> a7da3b8f7bf63ffdfde2337e37b1c39bccb76220

export default CardList;
