import { UserCircleIcon, HomeIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SidebarNav: React.FC = () => {
  const location = useLocation();
  const [userName, setUserName] = useState<string>('Utilisateur');

  useEffect(() => {
    setUserName(localStorage.getItem('userName') || 'Utilisateur');
  }, []);

  const navItems = [
    { label: 'Tableau de bord', to: '/dashboard', icon: <HomeIcon className="h-5 w-5 mr-2" /> },
    { label: 'Profil', to: '/profile', icon: <UserCircleIcon className="h-5 w-5 mr-2" /> },
    { label: 'Paramètres', to: '/settings', icon: <Cog6ToothIcon className="h-5 w-5 mr-2" /> },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-slate-100 flex flex-col min-h-screen shadow-xl border-r border-slate-700">
      <div className="p-6 text-center border-b border-slate-700">
        <h1 className="text-2xl font-bold tracking-wide text-white">Fyndra</h1>
        <p className="text-sm mt-2 text-slate-300 font-medium">
          👋 Bienvenue, <span className="text-white font-semibold">{userName}</span>
        </p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center px-4 py-2 rounded transition-colors text-base font-medium ${
              location.pathname === item.to
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-slate-400 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => {
          localStorage.removeItem('userName');
          window.location.href = '/login';
        }}
        className="m-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition font-semibold text-base shadow"
      >
        🚪 Déconnexion
      </button>
    </div>
  );
};

export default SidebarNav;
