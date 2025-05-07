// src/pages/Register.tsx
import React from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erreur lors de l'inscription");
      }
      navigate("/login");
    } catch (err: any) {
      setError(err.message || "Erreur lors de l'inscription");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Créer un compte <span className="text-blue-600 font-bold">Fyndra</span>
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                placeholder="Votre nom"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Votre email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                placeholder="Votre mot de passe"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-200"
            >
              S'inscrire
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Déjà un compte ?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
