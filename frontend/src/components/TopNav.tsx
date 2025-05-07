import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const TopNav: React.FC<{ userName?: string }> = ({ userName }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-blue-100">
      <h1 className="text-2xl font-bold text-blue-700">Dashboard</h1>
      <div className="flex items-center gap-2">
        <UserCircleIcon className="h-7 w-7 text-blue-500" />
        <span className="font-medium text-gray-700">{userName || "Utilisateur"}</span>
      </div>
    </header>
  );
};

export default TopNav;
