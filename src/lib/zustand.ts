// Zustand store for global state
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user: User) => set({ user, isAuthenticated: true }),
      logout: () => {
        // Clear the state
        set({ user: null, isAuthenticated: false });
        // Also clear localStorage manually to ensure complete cleanup
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage", // nom dans localStorage
    }
  )
);

interface UserProgress {
  selectedPath?: string;
  showAllDomains: boolean;
  completedQuizzes: Record<string, number>; // technology -> score
  badges: string[];
}

interface ProgressState {
  progress: UserProgress;
  setSelectedPath: (pathId: string | null) => void;
  toggleShowAllDomains: () => void;
  addCompletedQuiz: (technology: string, score: number) => void;
  addBadge: (badge: string) => void;
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: {
        selectedPath: undefined,
        showAllDomains: false,
        completedQuizzes: {},
        badges: [],
      },
      setSelectedPath: (pathId: string | null) =>
        set((state) => ({
          progress: {
            ...state.progress,
            selectedPath: pathId || undefined,
          },
        })),
      toggleShowAllDomains: () =>
        set((state) => ({
          progress: {
            ...state.progress,
            showAllDomains: !state.progress.showAllDomains,
          },
        })),
      addCompletedQuiz: (technology: string, score: number) =>
        set((state) => ({
          progress: {
            ...state.progress,
            completedQuizzes: {
              ...state.progress.completedQuizzes,
              [technology]: score,
            },
          },
        })),
      addBadge: (badge: string) =>
        set((state) => ({
          progress: {
            ...state.progress,
            badges: [...state.progress.badges, badge],
          },
        })),
      resetProgress: () =>
        set({
          progress: {
            selectedPath: undefined,
            showAllDomains: false,
            completedQuizzes: {},
            badges: [],
          },
        }),
    }),
    {
      name: "progress-storage",
    }
  )
);
