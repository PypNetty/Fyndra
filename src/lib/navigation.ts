import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

interface NavigationHistory {
  previous: string | null;
  current: string;
}

// Hook pour une navigation intelligente qui retourne à la page précédente
export const useSmartNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const historyRef = useRef<NavigationHistory>({
    previous: null,
    current: location.pathname,
  });

  useEffect(() => {
    // Mettre à jour l'historique seulement si on change vraiment de page
    if (location.pathname !== historyRef.current.current) {
      historyRef.current.previous = historyRef.current.current;
      historyRef.current.current = location.pathname;
    }
  }, [location.pathname]);

  const goBack = (fallbackPath: string = "/") => {
    // Si on a une page précédente dans notre historique et que ce n'est pas la même page
    if (
      historyRef.current.previous &&
      historyRef.current.previous !== location.pathname &&
      historyRef.current.previous !== "/login" &&
      historyRef.current.previous !== "/register"
    ) {
      // Utiliser l'historique du navigateur pour revenir en arrière
      navigate(-1);
    } else {
      // Sinon, aller vers la page de fallback
      navigate(fallbackPath);
    }
  };

  const goToPage = (path: string) => {
    navigate(path);
  };

  return {
    goBack,
    goToPage,
    currentPath: location.pathname,
    previousPath: historyRef.current.previous,
  };
};

// Hook pour détecter si l'utilisateur peut revenir en arrière
export const useCanGoBack = () => {
  const location = useLocation();

  // On peut revenir en arrière si on n'est pas sur la landing page
  // et qu'on n'arrive pas directement d'une authentification
  return (
    location.pathname !== "/" &&
    !location.pathname.includes("/login") &&
    !location.pathname.includes("/register")
  );
};
