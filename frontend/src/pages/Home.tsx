import React from "react";
import { Link } from "react-router-dom";
import { UserCircleIcon, BriefcaseIcon, ShieldCheckIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const features = [
  {
    icon: <MagnifyingGlassIcon className="h-8 w-8 text-blue-600" />,
    title: "Analyse instantanée",
    desc: "Détectez les pièges et points clés d'une offre d'emploi en un clic."
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-green-600" />,
    title: "Protégez vos droits",
    desc: "Soyez alerté sur les clauses abusives et obligations légales oubliées."
  },
  {
    icon: <BriefcaseIcon className="h-8 w-8 text-black" />,
    title: "Optimisez vos candidatures",
    desc: "Comparez vos compétences avec celles requises et maximisez vos chances."
  }
];

const Home: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    {/* Header */}
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <UserCircleIcon className="h-6 w-6 text-blue-600" />
        <span className="text-lg font-bold text-blue-700">Fyndra</span>
      </div>
      <nav className="flex gap-4 text-sm text-blue-700 font-medium">
        <Link to="/login" className="hover:underline">Se connecter</Link>
        <Link to="/register" className="hover:underline">Créer un compte</Link>
      </nav>
    </header>

    {/* Hero Section */}
    <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-16 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 leading-tight mb-4">
          Analysez vos offres d'emploi<br />et protégez vos droits
        </h1>
        <p className="text-gray-700 mb-8 text-lg">
          Fyndra vous aide à décoder les offres, détecter les pièges et booster vos candidatures grâce à l'IA.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm mx-auto">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full"
          >
            Commencer gratuitement
          </Link>
          <Link
            to="/login"
            className="border border-blue-600 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition w-full"
          >
            Déjà inscrit ?
          </Link>
        </div>
        <div className="mt-10 flex justify-center">
          <img
            src="https://www.svgrepo.com/show/512264/job.svg"
            alt="Illustration analyse d'offre"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-16 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Pourquoi choisir Fyndra ?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-gray-50 shadow rounded-xl p-6 text-center">
              {f.icon}
              <h3 className="text-xl font-semibold text-blue-700 mt-4 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-6 text-sm text-center text-gray-500 bg-gray-100 mt-auto">
      © 2025 Fyndra — Analyse intelligente d'offres d'emploi. Tous droits réservés.
    </footer>
  </div>
);

export default Home;
