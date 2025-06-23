import React from "react";
import { ArrowLeft } from "lucide-react";
import { useSmartNavigation } from "../lib/navigation";

interface BackButtonProps {
  fallbackPath?: string;
  label?: string;
  className?: string;
  showIcon?: boolean;
}

export const BackButton: React.FC<BackButtonProps> = ({
  fallbackPath = "/",
  label = "Retour",
  className = "",
  showIcon = true,
}) => {
  const { goBack } = useSmartNavigation();

  return (
    <button
      onClick={() => goBack(fallbackPath)}
      className={`flex items-center gap-2 text-white/80 hover:text-white transition-colors ${className}`}
    >
      {showIcon && <ArrowLeft className="w-5 h-5" />}
      {label}
    </button>
  );
};

export default BackButton;
