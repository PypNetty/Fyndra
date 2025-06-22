import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    default: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900",
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-200",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
    outline:
      "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-50 focus:ring-gray-200",
    ghost: "bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-200",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
