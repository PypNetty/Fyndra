import { useState, useEffect } from "react";
import { technologyBasedData, TechnologyData } from "./data/technologies";

// Hook pour gérer l'état du questionnaire
export const useQuestionnaire = (technologyKey?: string) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    if (technologyKey) {
      // Rechercher la technologie dans toutes les catégories
      let foundQuestions: any[] = [];

      Object.values(technologyBasedData).forEach((category) => {
        if (category.technologies[technologyKey]) {
          foundQuestions =
            category.technologies[technologyKey].questionnaire || [];
        }
      });

      setQuestions(foundQuestions);
      setCurrentQuestionIndex(0);
      setAnswers({});
      setIsCompleted(false);
      setScore(0);
    }
  }, [technologyKey]);

  const submitAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    // Calculer le score
    const currentQuestion = questions[currentQuestionIndex];
    let newScore = score;

    if (currentQuestion && currentQuestion.correctAnswer === answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    // Passer à la question suivante ou terminer
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuestionnaire = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsCompleted(false);
    setScore(0);
  };

  const getScorePercentage = () => {
    return questions.length > 0
      ? Math.round((score / questions.length) * 100)
      : 0;
  };

  return {
    currentQuestionIndex,
    answers,
    isCompleted,
    score,
    questions,
    currentQuestion: questions[currentQuestionIndex],
    submitAnswer,
    resetQuestionnaire,
    getScorePercentage,
    totalQuestions: questions.length,
  };
};

// Hook pour récupérer les données d'une technologie spécifique
export const useTechnology = (
  categoryName?: string,
  technologyKey?: string
) => {
  const [technologyData, setTechnologyData] = useState<TechnologyData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (categoryName && technologyKey) {
      setIsLoading(true);

      // Rechercher dans les données
      const category = technologyBasedData[categoryName];
      if (category && category.technologies[technologyKey]) {
        setTechnologyData(category.technologies[technologyKey]);
      } else {
        setTechnologyData(null);
      }

      setIsLoading(false);
    }
  }, [categoryName, technologyKey]);

  return {
    technologyData,
    isLoading,
  };
};

// Hook pour gérer les statistiques utilisateur
export const useUserStats = () => {
  const [completedTests, setCompletedTests] = useState<Record<string, number>>(
    {}
  );
  const [totalScore, setTotalScore] = useState(0);

  const addTestResult = (technologyKey: string, score: number) => {
    const newCompletedTests = { ...completedTests, [technologyKey]: score };
    setCompletedTests(newCompletedTests);

    // Calculer le score total
    const total = Object.values(newCompletedTests).reduce(
      (sum, score) => sum + score,
      0
    );
    setTotalScore(total);

    // Sauvegarder dans le localStorage (optionnel)
    localStorage.setItem(
      "fyndra_user_stats",
      JSON.stringify({
        completedTests: newCompletedTests,
        totalScore: total,
      })
    );
  };

  const loadStats = () => {
    try {
      const saved = localStorage.getItem("fyndra_user_stats");
      if (saved) {
        const { completedTests: saved_tests, totalScore: saved_total } =
          JSON.parse(saved);
        setCompletedTests(saved_tests || {});
        setTotalScore(saved_total || 0);
      }
    } catch (error) {
      console.warn("Erreur lors du chargement des statistiques:", error);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return {
    completedTests,
    totalScore,
    addTestResult,
    totalTestsCompleted: Object.keys(completedTests).length,
  };
};

// Hook pour la navigation et l'état des cartes
export const useCardNavigation = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
    null
  );

  const selectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setSelectedTechnology(null);
  };

  const selectTechnology = (technologyKey: string) => {
    setSelectedTechnology(technologyKey);
  };

  const resetSelection = () => {
    setSelectedCategory(null);
    setSelectedTechnology(null);
  };

  return {
    selectedCategory,
    selectedTechnology,
    selectCategory,
    selectTechnology,
    resetSelection,
  };
};

// Hook pour gérer l'état des modales et overlays
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const openModal = (type?: string) => {
    setModalType(type || null);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
  };

  return {
    isOpen,
    modalType,
    openModal,
    closeModal,
  };
};
