import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BriefcaseIcon, UserCircleIcon, Cog6ToothIcon, HomeIcon } from "@heroicons/react/24/solid";

const navItems = [
  { name: "Dashboard", to: "/dashboard", icon: <HomeIcon className="h-5 w-5" /> },
  { name: "Profil", to: "/profile", icon: <UserCircleIcon className="h-5 w-5" /> },
  { name: "Paramètres", to: "/settings", icon: <Cog6ToothIcon className="h-5 w-5" /> },
];

const SidebarNav: React.FC = () => {
  const location = useLocation();
  return (
    <aside className="bg-white shadow-lg h-full w-56 flex flex-col py-6 px-3 border-r border-blue-100">
      <div className="mb-8 flex items-center gap-2 px-2">
        <BriefcaseIcon className="h-7 w-7 text-blue-600" />
        <span className="text-xl font-bold text-blue-700">Fyndra</span>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-colors ${location.pathname === item.to ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-blue-50"}`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-auto text-xs text-gray-400 px-2 pt-8">© 2025 Fyndra</div>
    </aside>
  );
};

export default SidebarNav;
