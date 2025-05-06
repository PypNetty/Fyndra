import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const TopNav: React.FC = () => {
  const [userName, setUserName] = useState<string>('Utilisateur');

  useEffect(() => {
    setUserName(localStorage.getItem('userName') || 'Utilisateur');
  }, []);

  return (
    <header className="flex items-center justify-between p-8 bg-white/80 shadow-sm border-b border-blue-100">
      <h1 className="text-3xl font-bold text-blue-700 tracking-tight">JobScan</h1>
      <div className="flex items-center gap-4">
        <span className="hidden md:inline text-blue-900 font-medium">Bienvenue, {userName} !</span>
        <UserCircleIcon className="h-8 w-8 text-blue-500 md:hidden" />
      </div>
    </header>
  );
};

export default TopNav;
