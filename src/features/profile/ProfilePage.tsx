import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../lib/zustand";
import { useToastStore } from "../../lib/toast";
import AvatarUpload from "../../components/AvatarUpload";

const ProfilePage = () => {
  const { user, isAuthenticated, login } = useAuthStore();
  const addToast = useToastStore((state) => state.addToast);
  const navigate = useNavigate();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Update form data when user changes
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }));
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (file: File) => {
    // TODO: Implement avatar upload to server
    console.log('Avatar file:', file);
    // For now, we'll just show a success message
    // In a real app, you'd upload to your server and update the user's avatar URL
  };

  const handleSubmitProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update user in store
      if (user) {
        const updatedUser = {
          ...user,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email
        };
        login(updatedUser);
      }

      addToast({
        type: "success",
        title: "Profil mis à jour",
        message: "Vos informations ont été sauvegardées avec succès."
      });

      setIsEditing(false);
    } catch (err) {
      setError("Erreur lors de la mise à jour du profil.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }

    if (formData.newPassword.length < 8) {
      setError("Le nouveau mot de passe doit contenir au moins 8 caractères.");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      addToast({
        type: "success",
        title: "Mot de passe mis à jour",
        message: "Votre mot de passe a été modifié avec succès."
      });

      // Reset password fields
      setFormData(prev => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      }));
    } catch (err) {
      setError("Erreur lors de la modification du mot de passe.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#010116] text-white">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#010116]">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-600/20 filter blur-[100px]"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blue-500/20 filter blur-[100px]"></div>
          <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-cyan-400/20 filter blur-[100px]"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Retour
            </Link>
            <span className="font-extrabold text-lg tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Fyndra
            </span>
          </div>
          <h1 className="text-xl font-semibold">Mon Profil</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Sidebar - User Info */}
            <div className="lg:col-span-1">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur-lg opacity-30"></div>
                
                {/* Card content */}
                <div className="relative bg-[#0a0a2e]/80 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="text-center">
                    {/* Avatar */}
                    <AvatarUpload 
                      userName={`${user.firstName} ${user.lastName}`}
                      onAvatarChange={handleAvatarChange}
                    />
                    
                    <h2 className="text-xl font-semibold text-white mb-2 mt-4">
                      {user.firstName} {user.lastName}
                    </h2>
                    <p className="text-white/60 mb-4">{user.email}</p>
                    
                    <div className="space-y-2 text-sm text-white/70">
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-8 4v10a1 1 0 001 1h6a1 1 0 001-1V11M8 7h8" />
                        </svg>
                        Membre depuis mai 2025
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Compte vérifié
                      </div>
                    </div>
                    
                    {/* Statistiques */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h4 className="text-sm font-medium text-white/80 mb-4 text-center">Activité</h4>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-semibold text-blue-400">5</div>
                          <div className="text-xs text-white/60">Sessions</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-violet-400">12h</div>
                          <div className="text-xs text-white/60">Temps total</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-cyan-400">3</div>
                          <div className="text-xs text-white/60">Projets</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-green-400">8</div>
                          <div className="text-xs text-white/60">Commits</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Information Form */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur-lg opacity-30"></div>
                
                <div className="relative bg-[#0a0a2e]/80 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Informations personnelles</h3>
                    {!isEditing && (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                      >
                        Modifier
                      </button>
                    )}
                  </div>

                  {error && (
                    <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmitProfile} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                          Prénom
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                          Nom
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>

                    {isEditing && (
                      <div className="flex gap-3 pt-4">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white rounded-lg font-medium transition-all duration-300"
                        >
                          {isLoading ? "Sauvegarde..." : "Sauvegarder"}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsEditing(false);
                            setError("");
                            // Reset form
                            setFormData(prev => ({
                              ...prev,
                              firstName: user.firstName,
                              lastName: user.lastName,
                              email: user.email
                            }));
                          }}
                          className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white rounded-lg font-medium transition-colors"
                        >
                          Annuler
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Password Change Form */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur-lg opacity-30"></div>
                
                <div className="relative bg-[#0a0a2e]/80 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-6">Changer le mot de passe</h3>

                  <form onSubmit={handleSubmitPassword} className="space-y-4">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-white/80 mb-2">
                        Mot de passe actuel
                      </label>
                      <input
                        id="currentPassword"
                        name="currentPassword"
                        type="password"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40"
                        placeholder="••••••••"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-white/80 mb-2">
                          Nouveau mot de passe
                        </label>
                        <input
                          id="newPassword"
                          name="newPassword"
                          type="password"
                          value={formData.newPassword}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40"
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-2">
                          Confirmer le mot de passe
                        </label>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/40"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || !formData.currentPassword || !formData.newPassword || !formData.confirmPassword}
                      className="w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-300"
                    >
                      {isLoading ? "Modification..." : "Changer le mot de passe"}
                    </button>
                  </form>
                </div>
              </div>

              {/* Account Settings */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur-lg opacity-30"></div>
                
                <div className="relative bg-[#0a0a2e]/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-400">Zone de danger</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <h4 className="font-medium text-red-300 mb-2">Supprimer le compte</h4>
                      <p className="text-red-200/70 text-sm mb-4">
                        Cette action est irréversible. Toutes vos données seront définitivement supprimées.
                      </p>
                      <button 
                        onClick={() => {
                          // TODO: Implement account deletion
                          addToast({
                            type: "warning",
                            title: "Fonctionnalité à venir",
                            message: "La suppression de compte sera bientôt disponible."
                          });
                        }}
                        className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        Supprimer mon compte
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
