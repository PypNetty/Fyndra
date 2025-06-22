<<<<<<< HEAD
import { useState, useEffect } from "react";
import { technologyBasedData, TechnologyData } from "./data/technologies";

// Hook pour gérer l'état du questionnaire
export const useQuestionnaire = (technologyKey?: string) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [technologyData, setTechnologyData] = useState<TechnologyData | null>(
    null
  );

  useEffect(() => {
    if (technologyKey && technologyBasedData[technologyKey]) {
      setTechnologyData(technologyBasedData[technologyKey]);
    }
  }, [technologyKey]);

  const currentQuestion = technologyData?.questionnaire?.[currentQuestionIndex];
  const totalQuestions = technologyData?.questionnaire?.length || 0;
  const progress =
    totalQuestions > 0
      ? ((currentQuestionIndex + 1) / totalQuestions) * 100
      : 0;

  const answerQuestion = (questionId: string, selectedAnswer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedAnswer,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      completeQuestionnaire();
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const completeQuestionnaire = () => {
    if (!technologyData?.questionnaire) return;

    let correctAnswers = 0;
    technologyData.questionnaire.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const finalScore = Math.round((correctAnswers / totalQuestions) * 100);
    setScore(finalScore);
    setIsCompleted(true);
  };

  const resetQuestionnaire = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsCompleted(false);
    setScore(0);
  };

  return {
    // État
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    answers,
    isCompleted,
    score,
    technologyData,

    // Actions
    answerQuestion,
    nextQuestion,
    previousQuestion,
    completeQuestionnaire,
    resetQuestionnaire,
  };
};

// Hook pour gérer la sélection de technologies
export const useTechnologySelection = () => {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const selectTechnology = (technologyKey: string, categoryKey: string) => {
    setSelectedTechnology(technologyKey);
    setSelectedCategory(categoryKey);
  };

  const clearSelection = () => {
    setSelectedTechnology(null);
    setSelectedCategory(null);
  };

  return {
    selectedTechnology,
    selectedCategory,
    selectTechnology,
    clearSelection,
  };
};

// Hook pour gérer l'état des modales
export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};

// Hook pour gérer les statistiques utilisateur
export const useUserStats = () => {
  const [completedQuestionnaires, setCompletedQuestionnaires] = useState<
    Record<string, number>
  >({});
  const [totalScore, setTotalScore] = useState(0);
  const [averageScore, setAverageScore] = useState(0);

  const addQuestionnaireResult = (technologyKey: string, score: number) => {
    setCompletedQuestionnaires((prev) => ({
      ...prev,
      [technologyKey]: score,
    }));

    // Recalculer les statistiques
    const scores = Object.values({
      ...completedQuestionnaires,
      [technologyKey]: score,
    });
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = scores.length > 0 ? total / scores.length : 0;

    setTotalScore(total);
    setAverageScore(Math.round(average));
  };

  const getCompletedCount = () => Object.keys(completedQuestionnaires).length;

  const getTechnologyScore = (technologyKey: string) =>
    completedQuestionnaires[technologyKey];

  const getBestTechnology = () => {
    const entries = Object.entries(completedQuestionnaires);
    if (entries.length === 0) return null;

    return entries.reduce((best, current) =>
      current[1] > best[1] ? current : best
    );
  };

  return {
    completedQuestionnaires,
    totalScore,
    averageScore,
    addQuestionnaireResult,
    getCompletedCount,
    getTechnologyScore,
    getBestTechnology,
  };
};
=======
// Custom hooks for questionnaire/cards system
>>>>>>> a7da3b8f7bf63ffdfde2337e37b1c39bccb76220
