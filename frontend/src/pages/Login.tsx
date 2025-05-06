// src/pages/Login.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      // Remplace l'URL par celle de ton backend
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error("Identifiants invalides");
      const data = await response.json();
      // On suppose que l'API renvoie { name: string, token: string }
      localStorage.setItem("userName", data.name);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("token", data.token);
      // Check if running in a Chrome extension context and save to chrome.storage.local
      const chromeExtensionAPI = (window as any).chrome;
      if (chromeExtensionAPI && chromeExtensionAPI.storage && chromeExtensionAPI.storage.local) {
        chromeExtensionAPI.storage.local.set({ userEmail: email, token: data.token });
      }
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Erreur lors de la connexion");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Connexion à <span className="text-blue-600 font-bold">JobScan</span>
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Votre email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            Se connecter
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Pas encore de compte ?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
