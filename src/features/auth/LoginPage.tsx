import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../lib/zustand";
import { useToastStore } from "../../lib/toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuthStore();
  const addToast = useToastStore((state) => state.addToast);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Here you would add your actual authentication logic
      // For now, we'll just simulate a login delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate successful login with user data
      // Note: In a real app, you would get this data from your authentication API
      // For demo purposes, we extract a display name from the email
      const emailParts = email.split("@")[0];

      // Essayer de détecter nom.prénom ou prénom.nom dans l'email
      let firstName = "";
      let lastName = "";

      if (emailParts.includes(".")) {
        const parts = emailParts.split(".");
        firstName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
        if (parts[1]) {
          lastName = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
        }
      } else {
        // Si pas de point, utiliser l'email comme prénom
        firstName = emailParts.charAt(0).toUpperCase() + emailParts.slice(1);
        lastName = "";
      }

      const userData = {
        id: "1",
        email: email,
        firstName: firstName,
        lastName: lastName,
      };

      // Store user in global state
      login(userData);

      // Show success notification
      addToast({
        type: "success",
        title: "Connexion réussie !",
        message: `Bienvenue ${userData.firstName} !`,
      });

      console.log("Login successful");
      console.log({ email, password });

      // Redirect to home page after successful login
      navigate("/");
    } catch (err) {
      setError("Échec de la connexion. Veuillez vérifier vos identifiants.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#010116] text-white flex flex-col">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#010116]">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-600/20 filter blur-[100px]"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blue-500/20 filter blur-[100px]"></div>
          <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-cyan-400/20 filter blur-[100px]"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-extrabold text-lg tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Fyndra
            </span>
          </Link>
        </div>
      </header>

      {/* Login form */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Card with glow effect */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur-lg opacity-30"></div>

            {/* Card content */}
            <div className="relative bg-[#0a0a2e]/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Connexion
                </h2>
                <p className="text-white/60 mt-2">
                  Accédez à votre environnement de développement
                </p>
              </div>

              {error && (
                <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-white/80"
                    >
                      Mot de passe
                    </label>
                    <a
                      href="#"
                      className="text-xs text-blue-400 hover:text-blue-300"
                    >
                      Mot de passe oublié?
                    </a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 bg-white/5 border-white/10 rounded text-blue-500 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-white/70"
                  >
                    Se souvenir de moi
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 ${
                    isLoading
                      ? "bg-blue-700/50 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-900/30"
                  }`}
                >
                  {isLoading ? "Connexion en cours..." : "Se connecter"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-white/60 text-sm">
                  Vous n'avez pas de compte?{" "}
                  <Link
                    to="/register"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Créer un compte
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Security note */}
          <p className="text-white/40 text-xs text-center mt-8">
            🔒 Connexion sécurisée via TLS. Nous ne stockons jamais vos mots de
            passe en clair.
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
