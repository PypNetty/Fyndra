import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Composant pour remonter automatiquement en haut de la page
 * lors des changements de route
 */
const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Nettoyer les styles qui pourraient interférer
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    // Firefox-compatible scroll reset
    const scrollToTop = () => {
      // Méthode 1: window.scrollTo
      window.scrollTo(0, 0);

      // Méthode 2: documentElement pour Firefox
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Méthode 3: scrollIntoView sur le html
      document.documentElement.scrollIntoView({
        behavior: "instant",
        block: "start",
        inline: "start",
      });
    };

    // Exécuter immédiatement
    scrollToTop();

    // Réessayer après les animations possibles
    const timeoutId1 = setTimeout(scrollToTop, 50);
    const timeoutId2 = setTimeout(scrollToTop, 150);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
