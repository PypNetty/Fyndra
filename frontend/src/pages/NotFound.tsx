import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">404 - Page non trouvée</h1>
        <p className="mb-6 text-gray-600">La page que vous recherchez n'existe pas.</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
