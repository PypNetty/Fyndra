import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  X,
  Info,
  FileText,
  Zap,
  Trophy,
  Target,
  ArrowLeft,
  Home,
  User,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle,
} from "lucide-react";
import CardList from "./CardList";
import { technologyBasedData } from "./data/technologies";
import { useAuthStore } from "../../lib/zustand";

const QuestionnairePage: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [showMissionInfo, setShowMissionInfo] = useState(false);
  const [showSampleReport, setShowSampleReport] = useState(false);

  // État du questionnaire
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [showResults, setShowResults] = useState(false);

  // Extraction des paramètres de route
  const { category, technology } = params;

  // Si nous avons des paramètres, afficher le questionnaire spécifique
  if (category && technology) {
    // Récupérer les questions pour cette technologie
    const categoryData =
      technologyBasedData[category as keyof typeof technologyBasedData];
    const techData = categoryData?.technologies[technology];
    const questions = techData?.questionnaire || [];

    if (questions.length === 0) {
      return (
        <div className="min-h-screen bg-[#010116] text-white flex items-center justify-center">
          <div className="text-center">
            <Target className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Questionnaire non trouvé
            </h2>
            <p className="text-gray-300 mb-6">
              Aucun questionnaire disponible pour {technology} dans la catégorie{" "}
              {category}.
            </p>
            <motion.button
              onClick={() => navigate("/questionnaire")}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Retour aux missions
            </motion.button>
          </div>
        </div>
      );
    }

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const handleAnswerSelect = (answerIndex: number) => {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: answerIndex,
      });
    };

    const handleNext = () => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResults(true);
      }
    };

    const handlePrevious = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }
    };

    const calculateScore = () => {
      let correct = 0;
      questions.forEach((question, index) => {
        if (selectedAnswers[index] === question.correctAnswer) {
          correct++;
        }
      });
      return {
        correct,
        total: questions.length,
        percentage: Math.round((correct / questions.length) * 100),
      };
    };

    if (showResults) {
      const score = calculateScore();
      return (
        <div className="min-h-screen bg-[#010116] text-white">
          <nav className="border-b border-white/10 bg-[#010116]/80 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 px-3 py-2 text-white/80 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Home className="w-5 h-5" />
                    Accueil
                  </motion.button>
                  <span className="text-white/40">•</span>
                  <motion.button
                    onClick={() => navigate("/questionnaire")}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Tests gratuits
                  </motion.button>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60">Résultats {technology}</span>
                </div>
              </div>
            </div>
          </nav>

          <div className="container mx-auto px-6 py-12">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8"
              >
                <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
                <h1 className="text-4xl font-bold text-white mb-4">
                  Test terminé !
                </h1>
                <p className="text-gray-300 text-lg">
                  Questionnaire {technology} - Catégorie {category}
                </p>
              </motion.div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 mb-8">
                <div className="text-6xl font-bold text-blue-400 mb-2">
                  {score.percentage}%
                </div>
                <p className="text-gray-300 text-lg mb-4">
                  {score.correct} bonnes réponses sur {score.total}
                </p>

                <div className="flex justify-center gap-8 text-sm text-gray-400">
                  <div>Temps: ~{questions.length * 2} min</div>
                  <div>Niveau: {techData?.difficulty}</div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <motion.button
                  onClick={() => {
                    setCurrentQuestionIndex(0);
                    setSelectedAnswers({});
                    setShowResults(false);
                  }}
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Refaire le test
                </motion.button>
                <motion.button
                  onClick={() => navigate("/questionnaire")}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  Autres missions
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-[#010116] text-white">
        {/* Navigation Bar */}
        <nav className="border-b border-white/10 bg-[#010116]/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2 px-3 py-2 text-white/80 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Home className="w-5 h-5" />
                  Accueil
                </motion.button>
                <span className="text-white/40">•</span>
                <motion.button
                  onClick={() => navigate("/questionnaire")}
                  className="text-white/60 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Tests gratuits
                </motion.button>
                <span className="text-white/40">•</span>
                <span className="text-white/60">Test {technology}</span>
              </div>

              <div className="flex items-center gap-4">
                {isAuthenticated && (
                  <motion.button
                    onClick={() => navigate("/profile")}
                    className="flex items-center gap-2 px-3 py-2 text-white/80 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <User className="w-5 h-5" />
                    Mon profil
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-12">
          {/* Header du questionnaire spécifique */}
          <div className="mb-8">
            <motion.button
              onClick={() => navigate("/questionnaire")}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Retour aux missions
            </motion.button>

            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-white capitalize">
                  Test {technology}
                </h1>
                <p className="text-gray-400 text-lg">Catégorie: {category}</p>
              </div>

              <div className="text-right">
                <p className="text-blue-300 text-sm">
                  Question {currentQuestionIndex + 1} sur {questions.length}
                </p>
                <div className="w-32 h-2 bg-white/10 rounded-full mt-2">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Question actuelle */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {currentQuestion.category}
                    </div>
                    <div className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
                      {currentQuestion.difficulty}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4">
                    {currentQuestion.question}
                  </h2>
                </div>

                <div className="space-y-3 mb-8">
                  {currentQuestion.options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-4 text-left rounded-lg border transition-all ${
                        selectedAnswers[currentQuestionIndex] === index
                          ? "bg-blue-500/20 border-blue-500 text-white"
                          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedAnswers[currentQuestionIndex] === index
                              ? "border-blue-500 bg-blue-500"
                              : "border-gray-400"
                          }`}
                        >
                          {selectedAnswers[currentQuestionIndex] === index && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <span className="text-lg">{option}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <motion.button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      currentQuestionIndex === 0
                        ? "opacity-50 cursor-not-allowed bg-gray-600"
                        : "bg-white/10 border border-white/20 hover:bg-white/20"
                    }`}
                    whileHover={currentQuestionIndex > 0 ? { scale: 1.05 } : {}}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Précédent
                  </motion.button>

                  <motion.button
                    onClick={handleNext}
                    disabled={
                      selectedAnswers[currentQuestionIndex] === undefined
                    }
                    className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all ${
                      selectedAnswers[currentQuestionIndex] === undefined
                        ? "opacity-50 cursor-not-allowed bg-gray-600"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    whileHover={
                      selectedAnswers[currentQuestionIndex] !== undefined
                        ? { scale: 1.05 }
                        : {}
                    }
                  >
                    {currentQuestionIndex === questions.length - 1
                      ? "Terminer"
                      : "Suivant"}
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#010116] text-white relative overflow-hidden">
      {/* Navigation Bar */}
      <nav className="relative z-20 border-b border-white/10 bg-[#010116]/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 px-3 py-2 text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-5 h-5" />
                Accueil
              </motion.button>
              <span className="text-white/40">•</span>
              <span className="text-white/60">Tests gratuits</span>
            </div>

            <div className="flex items-center gap-4">
              {isAuthenticated && (
                <motion.button
                  onClick={() => navigate("/profile")}
                  className="flex items-center gap-2 px-3 py-2 text-white/80 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User className="w-5 h-5" />
                  Mon profil
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Missions Technologiques
            </h1>
          </div>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explorez vos compétences à travers des missions ciblées et découvrez
            votre profil technologique unique
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <motion.button
              onClick={() => setShowMissionInfo(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Info className="w-5 h-5" />
              Comment ça marche ?
            </motion.button>

            <motion.button
              onClick={() => setShowSampleReport(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-5 h-5" />
              Exemple de rapport
            </motion.button>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">
              {Object.keys(technologyBasedData).length}
            </div>
            <div className="text-gray-400">Catégories</div>
          </div>

          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">36+</div>
            <div className="text-gray-400">Questions</div>
          </div>

          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">5-10</div>
            <div className="text-gray-400">Minutes par mission</div>
          </div>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CardList />
        </motion.div>
      </div>

      {/* Mission Info Modal */}
      <AnimatePresence>
        {showMissionInfo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMissionInfo(false)}
          >
            <motion.div
              className="bg-[#0a0a1a] border border-white/20 rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Comment ça marche ?
                </h3>
                <button
                  onClick={() => setShowMissionInfo(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Choisissez votre mission
                    </h4>
                    <p>
                      Sélectionnez une technologie qui vous intéresse parmi nos
                      missions disponibles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Répondez aux questions
                    </h4>
                    <p>
                      Testez vos connaissances avec des questions pratiques et
                      théoriques.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Obtenez votre rapport
                    </h4>
                    <p>
                      Recevez une analyse détaillée de vos compétences et des
                      recommandations personnalisées.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sample Report Modal */}
      <AnimatePresence>
        {showSampleReport && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSampleReport(false)}
          >
            <motion.div
              className="bg-[#0a0a1a] border border-white/20 rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Exemple de rapport
                </h3>
                <button
                  onClick={() => setShowSampleReport(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-white font-semibold mb-2">
                    Score global : 85%
                  </h4>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Points forts :</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Excellent en composants React (95%)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Bonne maîtrise des hooks (88%)
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">
                    Axes d'amélioration :
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      Performance et optimisation (65%)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      Tests unitaires (45%)
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionnairePage;
