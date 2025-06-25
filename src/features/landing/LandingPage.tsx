import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useAuthStore, useProgressStore } from "../../lib/zustand";
import UserMenu from "../../components/UserMenu";
import { PathSelector } from "../questionnaire/PathSelector";
import { emailjsConfig, isEarlyAccessConfigured } from "../../config/emailjs";

const features = [
  {
    icon: "🎯",
    title: "Tests en situation réelle",
    desc: "Prouvez vos compétences dans des environnements de production authentiques, pas des exercices théoriques.",
  },
  {
    icon: "🏆",
    title: "Évaluation objective",
    desc: "Obtenez un score précis et un rapport détaillé de vos compétences techniques validé par nos experts.",
  },
  {
    icon: "🤝",
    title: "Matching emploi garanti",
    desc: "Accédez directement aux offres d'emploi correspondant à votre niveau de compétences prouvé.",
  },
  {
    icon: "⚡",
    title: "Validation instantanée",
    desc: "Terminez un test et recevez votre bilan de compétences détaillé et recommandations de certifications officielles",
  },
];

const advantages = [
  {
    icon: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
    ),
    text: "Tests pratiques validés par les entreprises partenaires pour un matching emploi fiable",
  },
  {
    icon: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        ></path>
      </svg>
    ),
    text: "Validation de compétences en ligne, accessible 24h/24 depuis n'importe où",
  },
  {
    icon: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        ></path>
      </svg>
    ),
    text: "Idéal pour prouver vos compétences lors de reconversions ou candidatures",
  },
  {
    icon: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 17v-2a4 4 0 00-4-4H3m6 6v2a4 4 0 004 4h4a4 4 0 004-4v-2a4 4 0 00-4-4h-1a1 1 0 010-2h1a6 6 0 016 6v2a6 6 0 01-6 6h-4a6 6 0 01-6-6z"
        ></path>
      </svg>
    ),
    text: "Test gratuit instantané sans inscription pour découvrir votre niveau",
  },
  {
    icon: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3"
        ></path>
      </svg>
    ),
    text: "Compte complet pour historique des tests et accès aux offres d'emploi partenaires",
  },
];

const testimonials = [
  {
    name: "Julie",
    role: "conseillère emploi",
    text: "Grâce à Fyndra, mes bénéficiaires savent enfin à quoi s'attendre avant de se lancer dans une formation.",
  },
  {
    name: "Kamel",
    role: "reconverti DevOps",
    text: "J'ai pu prouver mes compétences avec une mission sur mesure liée à une offre, ça a fait la différence.",
  },
];

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showEarlyAccessForm, setShowEarlyAccessForm] = useState(false);
  const [showCandidateForm, setShowCandidateForm] = useState(false);
  const [showRecruiterForm, setShowRecruiterForm] = useState(false);
  const [showPathSelector, setShowPathSelector] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [earlyAccessData, setEarlyAccessData] = useState({
    name: "",
    email: "",
    objective: "apprendre",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [candidateData, setCandidateData] = useState({
    name: "",
    email: "",
    profile: "frontend",
    experience: "junior",
  });
  const [candidateFormSubmitted, setCandidateFormSubmitted] = useState(false);
  const [isCandidateSubmitting, setIsCandidateSubmitting] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [recruiterData, setRecruiterData] = useState({
    name: "",
    email: "",
    company: "",
    need: "recrutement",
  });
  const [recruiterFormSubmitted, setRecruiterFormSubmitted] = useState(false);
  const [isRecruiterSubmitting, setIsRecruiterSubmitting] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const { progress, setSelectedPath } = useProgressStore();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le scroll de la page derrière les modales
  useEffect(() => {
    const hasOpenModal =
      showEarlyAccessForm ||
      showCandidateForm ||
      showRecruiterForm ||
      showContactForm ||
      showPathSelector;
    if (hasOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [
    showEarlyAccessForm,
    showCandidateForm,
    showRecruiterForm,
    showContactForm,
    showPathSelector,
  ]);

  // Auto-show path selector for authenticated users without a path (only once per session)
  useEffect(() => {
    if (
      isAuthenticated &&
      !progress.selectedPath &&
      !sessionStorage.getItem("pathSelectorShown")
    ) {
      const timer = setTimeout(() => {
        setShowPathSelector(true);
        sessionStorage.setItem("pathSelectorShown", "true");
      }, 2000); // Show after 2 seconds on landing
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, progress.selectedPath]);

  const handlePathSelect = (pathId: string | null) => {
    setSelectedPath(pathId);
    if (pathId) {
      // Navigate to questionnaire page with the selected path
      navigate("/questionnaire");
    }
  };

  const handleStartTest = () => {
    if (isAuthenticated) {
      if (progress.selectedPath) {
        // Si l'utilisateur a déjà un parcours, aller directement aux tests
        navigate("/questionnaire");
      } else {
        // Sinon, montrer le sélecteur de parcours
        setShowPathSelector(true);
      }
    } else {
      // Pour les utilisateurs non connectés, suggérer de s'inscrire d'abord
      setShowCandidateForm(true);
    }
  };

  const handleEarlyAccessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 🔒 PROTECTION ANTI-SPAM
      const lastSubmission = localStorage.getItem("fyndra_last_submission");
      const now = Date.now();

      if (lastSubmission) {
        const timeDiff = now - parseInt(lastSubmission);
        const COOLDOWN_MS = 60000; // 1 minute de cooldown

        if (timeDiff < COOLDOWN_MS) {
          const remainingSeconds = Math.ceil((COOLDOWN_MS - timeDiff) / 1000);
          throw new Error(
            `Veuillez attendre ${remainingSeconds} secondes avant d'envoyer un autre message.`
          );
        }
      }

      // Vérifier que EmailJS est configuré
      if (!isEarlyAccessConfigured()) {
        throw new Error(
          "EmailJS n'est pas encore configuré. Consultez le fichier /src/config/emailjs.ts"
        );
      }

      // Configuration EmailJS
      const templateParams = {
        from_name: earlyAccessData.name,
        from_email: earlyAccessData.email,
        to_email: emailjsConfig.toEmail,
        objective: earlyAccessData.objective,
        timestamp: new Date().toLocaleString("fr-FR"),
        message: `Nouvelle demande Early Access !

👤 Nom : ${earlyAccessData.name}
📧 Email : ${earlyAccessData.email}
🎯 Objectif : ${earlyAccessData.objective}
📅 Date : ${new Date().toLocaleString("fr-FR")}

Cette personne souhaite rejoindre le programme Early Access de Fyndra.`,
      };

      // Envoyer l'email via EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      console.log("✅ Email envoyé avec succès:", result);

      // 🔒 MARQUER LE TIMESTAMP POUR ANTI-SPAM
      localStorage.setItem("fyndra_last_submission", now.toString());

      // Sauvegarder aussi localement (backup)
      const submissionData = {
        type: "early_access",
        timestamp: new Date().toISOString(),
        data: earlyAccessData,
        emailSent: true,
        emailjsResult: result,
      };

      const existingSubmissions = JSON.parse(
        localStorage.getItem("fyndra_submissions") || "[]"
      );
      existingSubmissions.push(submissionData);
      localStorage.setItem(
        "fyndra_submissions",
        JSON.stringify(existingSubmissions)
      );

      // Marquer comme soumis avec succès
      setFormSubmitted(true);

      // Réinitialiser le formulaire après 5 secondes
      setTimeout(() => {
        setShowEarlyAccessForm(false);
        setFormSubmitted(false);
        setEarlyAccessData({ name: "", email: "", objective: "apprendre" });
      }, 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi via EmailJS:", error);

      // Sauvegarder localement même en cas d'erreur
      const submissionData = {
        type: "early_access",
        timestamp: new Date().toISOString(),
        data: earlyAccessData,
        emailSent: false,
        error: error.message || "Erreur inconnue",
      };

      const existingSubmissions = JSON.parse(
        localStorage.getItem("fyndra_submissions") || "[]"
      );
      existingSubmissions.push(submissionData);
      localStorage.setItem(
        "fyndra_submissions",
        JSON.stringify(existingSubmissions)
      );

      // Montrer un message d'erreur informatif
      alert(
        `❌ Erreur technique: ${error.message}\n\n⏳ Redirection vers votre client email pour alternative...`
      );

      // Fallback vers mailto après 2 secondes
      setTimeout(() => {
        const subject = "Demande Early Access - Fyndra";
        const body = `Bonjour,

Je souhaite rejoindre le programme early access de Fyndra.

Informations :
- Nom : ${earlyAccessData.name}
- Email : ${earlyAccessData.email}
- Objectif : ${earlyAccessData.objective}

Merci !

Cordialement,
${earlyAccessData.name}`;

        window.location.href = `mailto:${
          emailjsConfig.toEmail
        }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          body
        )}`;
      }, 2000);

      setShowEarlyAccessForm(false);
      setEarlyAccessData({ name: "", email: "", objective: "apprendre" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCandidateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCandidateSubmitting(true);

    try {
      // Simulation d'un envoi (remplacer par un vrai service plus tard)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Marquer comme soumis avec succès
      setCandidateFormSubmitted(true);

      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setShowCandidateForm(false);
        setCandidateFormSubmitted(false);
        setCandidateData({
          name: "",
          email: "",
          profile: "frontend",
          experience: "junior",
        });
      }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      // En cas d'erreur, fallback vers mailto
      const subject = "Demande de test plateforme - Fyndra";
      const body = `Bonjour,

Je souhaite tester la plateforme Fyndra.

Informations :
- Nom : ${candidateData.name}
- Email : ${candidateData.email}
- Profil : ${candidateData.profile}
- Expérience : ${candidateData.experience}

Merci de me recontacter.

Cordialement,
${candidateData.name}`;

      window.location.href = `mailto:contact@fyndra.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setShowCandidateForm(false);
      setCandidateData({
        name: "",
        email: "",
        profile: "frontend",
        experience: "junior",
      });
    } finally {
      setIsCandidateSubmitting(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitting(true);

    try {
      // Anti-spam: vérifier que ce n'est pas un bot
      if (contactData.message.length < 10 || contactData.name.length < 2) {
        throw new Error("Message trop court ou invalide");
      }

      // Préparer les paramètres pour EmailJS
      const templateParams = {
        from_name: contactData.name,
        from_email: contactData.email,
        subject: contactData.subject || "Contact - Fyndra",
        message: contactData.message,
        to_email: "contact@fyndra.io",
      };

      // Backup local immédiat
      const contactBackup = {
        ...contactData,
        timestamp: new Date().toISOString(),
        type: "contact",
      };

      try {
        const existingBackup = localStorage.getItem("fyndra_contact_backup");
        const backup = existingBackup ? JSON.parse(existingBackup) : [];
        backup.push(contactBackup);
        localStorage.setItem("fyndra_contact_backup", JSON.stringify(backup));
      } catch (storageError) {
        console.warn("Impossible de sauvegarder en local:", storageError);
      }

      // Envoyer via EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.contactTemplateId,
        templateParams,
        emailjsConfig.publicKey
      );

      if (result.status === 200) {
        // Marquer comme soumis avec succès
        setContactFormSubmitted(true);

        // Réinitialiser le formulaire après 3 secondes
        setTimeout(() => {
          setShowContactForm(false);
          setContactFormSubmitted(false);
          setContactData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
      } else {
        throw new Error(`EmailJS error: ${result.status}`);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);

      // En cas d'erreur, fallback vers mailto
      const subject = contactData.subject || "Contact - Fyndra";
      const body = `Bonjour,

${contactData.message}

Informations :
- Nom : ${contactData.name}
- Email : ${contactData.email}

Cordialement,
${contactData.name}`;

      window.location.href = `mailto:contact@fyndra.io?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setShowContactForm(false);
      setContactData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsContactSubmitting(false);
    }
  };

  const handleRecruiterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRecruiterSubmitting(true);

    try {
      // Simulation d'un envoi (remplacer par un vrai service plus tard)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Marquer comme soumis avec succès
      setRecruiterFormSubmitted(true);

      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setShowRecruiterForm(false);
        setRecruiterFormSubmitted(false);
        setRecruiterData({
          name: "",
          email: "",
          company: "",
          need: "recrutement",
        });
      }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      // En cas d'erreur, fallback vers mailto
      const subject = "Demande de démo entreprise - Fyndra";
      const body = `Bonjour,

Je souhaite découvrir Fyndra pour mon entreprise et obtenir une démonstration.

Informations :
- Nom : ${recruiterData.name}
- Email : ${recruiterData.email}
- Entreprise : ${recruiterData.company}
- Besoin : ${recruiterData.need}

Merci de me recontacter pour organiser un rendez-vous.

Cordialement,
${recruiterData.name}`;

      window.location.href = `mailto:contact@fyndra.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setShowRecruiterForm(false);
      setRecruiterData({
        name: "",
        email: "",
        company: "",
        need: "recrutement",
      });
    } finally {
      setIsRecruiterSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#010116] text-white font-sans">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#010116]">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-600/20 filter blur-[100px]"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blue-500/20 filter blur-[100px]"></div>
          <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-cyan-400/20 filter blur-[100px]"></div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(1,1,22,0.8)] backdrop-blur-md py-3 shadow-lg shadow-blue-900/10"
            : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-lg tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Fyndra
            </span>
          </div>

          <div className="hidden md:flex gap-8">
            <a
              href="#features"
              className="text-white/80 font-medium hover:text-white hover:text-blue-300 transition-colors relative pb-1 group"
            >
              Fonctionnalités
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#avantages"
              className="text-white/80 font-medium hover:text-white hover:text-blue-300 transition-colors relative pb-1 group"
            >
              Avantages
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="text-white/80 font-medium hover:text-white hover:text-blue-300 transition-colors relative pb-1 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-full font-medium text-sm text-white/90 border border-white/20 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Créer un compte
                </Link>
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 rounded-full font-medium text-sm text-white shadow-lg shadow-blue-900/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Connexion
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-40 pb-24 overflow-hidden flex flex-col items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                Prouvez vos compétences IT,
              </span>
              <span> trouvez votre mission</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-center text-white/70 max-w-3xl">
              Tests pratiques en situation réelle • Évaluation objective •
              Matching emploi garanti
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-4 rounded-full font-medium text-white text-center shadow-lg shadow-blue-900/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 transform-gpu"
              >
                {isAuthenticated && progress.selectedPath
                  ? "🚀 Continuer mes tests"
                  : "🎯 Je veux tester la plateforme"}
              </button>
              <button
                onClick={() => setShowRecruiterForm(true)}
                className="px-8 py-4 rounded-full font-medium text-white/90 text-center border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 transform-gpu"
              >
                👀 Découvrir pour mon entreprise
              </button>
            </div>

            {/* Current Path Badge */}
            {progress.selectedPath && (
              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-3">
                  <span className="text-white/80 text-sm">
                    Parcours actuel:
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent font-medium">
                    {progress.selectedPath === "frontend" &&
                      "Développement Frontend"}
                    {progress.selectedPath === "backend" && "Backend / API"}
                    {progress.selectedPath === "devops" &&
                      "DevOps / Infrastructure"}
                    {progress.selectedPath === "security" &&
                      "Sécurité / Cybersécurité"}
                    {progress.selectedPath === "network" && "Réseau / Systèmes"}
                    {progress.selectedPath === "explore" && "Exploration libre"}
                  </span>
                  <button
                    onClick={() => setShowPathSelector(true)}
                    className="text-blue-400 hover:text-blue-300 text-sm underline transition-colors"
                  >
                    Changer
                  </button>
                </div>

                {/* Progress Stats */}
                {Object.keys(progress.completedQuizzes).length > 0 && (
                  <div className="flex items-center gap-6 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>
                        {Object.keys(progress.completedQuizzes).length} quiz
                        {Object.keys(progress.completedQuizzes).length > 1
                          ? "s"
                          : ""}{" "}
                        complété
                        {Object.keys(progress.completedQuizzes).length > 1
                          ? "s"
                          : ""}
                      </span>
                    </div>
                    {progress.badges.length > 0 && (
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400">🏆</span>
                        <span>
                          {progress.badges.length} badge
                          {progress.badges.length > 1 ? "s" : ""}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Hero image */}
          <div className="mt-20 flex justify-center">
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-900/40 to-blue-900/40 transform -rotate-6 translate-x-4 translate-y-4 shadow-xl"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-900/40 to-violet-900/40 transform rotate-3 -translate-x-2 translate-y-2 shadow-xl"></div>

              <div className="relative bg-[#010116] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="aspect-square flex items-center justify-center p-2">
                  <img
                    src="/fyndra_image.jpg"
                    alt="Fyndra"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <p className="text-blue-300/90 text-center font-medium tracking-wide">
              VALIDATION DE COMPÉTENCES EN TEMPS RÉEL
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Découvrez comment Fyndra révolutionne le recrutement tech
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Fini les CV bidons. Place aux preuves concrètes de vos
              compétences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/10 transform-gpu hover:-translate-y-1"
              >
                <div className="absolute -bottom-px left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                L'écosystème Fyndra
              </span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto text-lg">
              Une plateforme qui relie formation, pratique et emploi, sans
              bullshit. Elle montre ce que tu sais faire, pas juste ce que tu
              dis savoir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pour les apprenants */}
            <div className="relative bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 group hover:bg-blue-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6">
                Pour les apprenants / candidats
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-lg">🎮</span>
                  <span>Système de cartes de compétence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">🧠</span>
                  <span>Questionnaires techniques intelligents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">💻</span>
                  <span>Accès à des VM éphémères scénarisées</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">📄</span>
                  <span>
                    Rapport clair : score, points forts, axes à travailler
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">📌</span>
                  <span>Historique personnel des parcours et progrès</span>
                </li>
              </ul>
            </div>

            {/* Pour les formateurs */}
            <div className="relative bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-3xl p-8 group hover:bg-yellow-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6">
                Pour les formateurs / écoles
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-lg">🧰</span>
                  <span>Bibliothèque de scénarios pratiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">🧑‍🏫</span>
                  <span>Suivi individuel de chaque apprenant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">📁</span>
                  <span>Génération automatique de preuves pédagogiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">🔐</span>
                  <span>Environnements isolés et sécurisés</span>
                </li>
              </ul>
            </div>

            {/* Pour les recruteurs */}
            <div className="relative bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8 group hover:bg-green-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6">
                Pour les recruteurs / entreprises
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <span>Accès à des profils testés en condition réelle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">🧪</span>
                  <span>Création de scénarios sur mesure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">📬</span>
                  <span>Candidatures enrichies avec rapport technique</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">🎯</span>
                  <span>Matching automatique compétences/offres</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-white mb-4">En résumé</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Fyndra, c'est la plateforme qui relie formation, pratique et
                emploi, sans bullshit. Elle montre ce que tu sais faire, pas
                juste ce que tu dis savoir.
              </p>
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setShowCandidateForm(true)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 rounded-full font-medium text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <span>🎯</span>
                    Tester maintenant
                  </button>
                  <button
                    onClick={() => setShowEarlyAccessForm(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white/90 border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <span>✨</span>
                    Early access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="avantages" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Fini les CV bidons. Place aux preuves.
                </span>
              </h2>
              <ul className="space-y-6">
                {advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:shadow-blue-500/30 transform-gpu group-hover:scale-110 transition-all duration-300">
                      {adv.icon}
                    </span>
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300 text-lg">
                      {adv.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl transform-gpu hover:translate-y-[-5px] transition-all duration-300">
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Performances exceptionnelles
                  </h3>
                  <p className="text-white/70 mb-6">
                    Nos environnements virtuels sont optimisés pour offrir une
                    expérience fluide et réactive.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/80">
                          Vitesse de démarrage
                        </span>
                        <span className="text-blue-400">90%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[90%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/80">
                          Réactivité système
                        </span>
                        <span className="text-blue-400">85%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[85%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/80">Stabilité</span>
                        <span className="text-blue-400">95%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[95%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Ils utilisent Fyndra
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Découvrez ce que nos utilisateurs disent de leur expérience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden transform-gpu hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-violet-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>

                  <p className="text-white/80 mb-6 text-lg italic leading-relaxed">
                    "
                    <span className="group-hover:text-white transition-colors duration-300">
                      {testimonial.text}
                    </span>
                    "
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-xl font-bold text-white shadow-md">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-white/60 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-3xl blur-xl"></div>

            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-500/20 rounded-full blur-2xl"></div>

              <div className="relative">
                <div className="text-4xl mb-6">🚀</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    Envie de tester Fyndra avant tout le monde ?
                  </span>
                </h2>
                <p className="text-white/80 mb-8 text-lg">
                  Rejoignez notre programme early access et soyez parmi les
                  premiers à découvrir la révolution du recrutement tech.
                </p>

                <button
                  onClick={() => setShowEarlyAccessForm(true)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <span>✨</span>
                  Je veux tester en avant-première
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 py-24 bg-gradient-to-b from-transparent to-white/5"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-3xl blur-xl"></div>

            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                      Contactez-nous
                    </span>
                  </h2>
                  <p className="text-white/80">
                    Une question, une démo, ou envie de rejoindre l'aventure ?
                  </p>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Nous contacter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#06061a] pt-16 pb-8">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-full py-2 px-4">
                <span className="font-extrabold text-lg tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Fyndra
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
              <a
                href="#features"
                className="text-white/60 hover:text-blue-400 transition-colors"
              >
                Fonctionnalités
              </a>
              <a
                href="#avantages"
                className="text-white/60 hover:text-blue-400 transition-colors"
              >
                Avantages
              </a>
              <a
                href="#contact"
                className="text-white/60 hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
              <Link
                to="/legal"
                className="text-white/60 hover:text-blue-400 transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                to="/privacy"
                className="text-white/60 hover:text-blue-400 transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 mb-4 md:mb-0">
              © {new Date().getFullYear()} Fyndra. Tous droits réservés.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/40 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Early Access Form Modal */}
      {showEarlyAccessForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div
            className="bg-[#0a0a1a] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full my-8 mx-auto"
            style={{ maxHeight: "calc(100vh - 2rem)" }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {formSubmitted ? "✅ Demande envoyée !" : "🚀 Early Access"}
              </h3>
              <button
                onClick={() => {
                  setShowEarlyAccessForm(false);
                  setFormSubmitted(false);
                  setEarlyAccessData({
                    name: "",
                    email: "",
                    objective: "apprendre",
                  });
                }}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {formSubmitted ? (
              // Message de confirmation
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Parfait ! Votre demande a été envoyée !
                </h4>
                <p className="text-white/80 mb-4">
                  Votre demande d'early access a été transmise avec succès à{" "}
                  <span className="text-green-400 font-semibold">
                    contact@fyndra.me
                  </span>
                  . Nous vous recontacterons très bientôt à l'adresse{" "}
                  <span className="text-blue-400 font-semibold">
                    {earlyAccessData.email}
                  </span>
                  .
                </p>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <svg
                      className="w-5 h-5 text-green-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-green-300 font-semibold">
                      Email envoyé via EmailJS
                    </span>
                  </div>
                  <p className="text-green-200 text-sm">
                    ✅ Votre demande a été transmise automatiquement
                    <br />
                    💾 Une copie de sauvegarde a été créée localement
                  </p>
                </div>
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-300 text-sm">
                    💡 En attendant, n'hésitez pas à explorer notre plateforme
                    et à tester nos questionnaires !
                  </p>
                </div>
              </div>
            ) : (
              // Formulaire
              <form onSubmit={handleEarlyAccessSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={earlyAccessData.name}
                    onChange={(e) =>
                      setEarlyAccessData({
                        ...earlyAccessData,
                        name: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Email *</label>
                  <input
                    type="email"
                    value={earlyAccessData.email}
                    onChange={(e) =>
                      setEarlyAccessData({
                        ...earlyAccessData,
                        email: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">
                    Objectif principal
                  </label>
                  <select
                    value={earlyAccessData.objective}
                    onChange={(e) =>
                      setEarlyAccessData({
                        ...earlyAccessData,
                        objective: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="apprendre">Apprendre et me former</option>
                    <option value="emploi">Chercher un emploi</option>
                    <option value="reconversion">
                      Reconversion professionnelle
                    </option>
                    <option value="validation">Valider mes compétences</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-medium text-white shadow-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-violet-500 hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Envoi en cours...
                    </div>
                  ) : (
                    "📧 Envoyer ma demande"
                  )}
                </button>

                <p className="text-white/60 text-sm text-center">
                  Nous vous recontacterons rapidement pour vous donner accès à
                  la plateforme
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Candidate Form Modal */}
      {showCandidateForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div
            className="bg-[#0a0a1a] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full my-8 mx-auto"
            style={{ maxHeight: "calc(100vh - 2rem)" }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {candidateFormSubmitted
                  ? "✅ Demande envoyée !"
                  : "🎯 Tester la plateforme"}
              </h3>
              <button
                onClick={() => {
                  setShowCandidateForm(false);
                  setCandidateFormSubmitted(false);
                  setCandidateData({
                    name: "",
                    email: "",
                    profile: "frontend",
                    experience: "junior",
                  });
                }}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {candidateFormSubmitted ? (
              // Message de confirmation
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Parfait ! Votre demande a été enregistrée
                </h4>
                <p className="text-white/80 mb-6">
                  Nous vous recontacterons à l'adresse{" "}
                  <span className="text-blue-400">{candidateData.email}</span>{" "}
                  pour vous donner accès aux tests personnalisés.
                </p>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-4">
                  <p className="text-green-300 text-sm">
                    🎯 En attendant, vous pouvez déjà explorer nos
                    questionnaires en libre accès !
                  </p>
                </div>
                <button
                  onClick={() => {
                    navigate("/questionnaire");
                    setShowCandidateForm(false);
                    setCandidateFormSubmitted(false);
                  }}
                  className="bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 rounded-lg font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🎮 Explorer les tests maintenant
                </button>
              </div>
            ) : (
              // Formulaire
              <form onSubmit={handleCandidateSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={candidateData.name}
                    onChange={(e) =>
                      setCandidateData({
                        ...candidateData,
                        name: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Email *</label>
                  <input
                    type="email"
                    value={candidateData.email}
                    onChange={(e) =>
                      setCandidateData({
                        ...candidateData,
                        email: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">
                    Profil technique
                  </label>
                  <select
                    value={candidateData.profile}
                    onChange={(e) =>
                      setCandidateData({
                        ...candidateData,
                        profile: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="frontend">Développeur Frontend</option>
                    <option value="backend">Développeur Backend</option>
                    <option value="fullstack">Développeur Fullstack</option>
                    <option value="devops">DevOps / SRE</option>
                    <option value="mobile">Développeur Mobile</option>
                    <option value="data">Data Engineer / Scientist</option>
                    <option value="sysadmin">Administrateur Système</option>
                    <option value="security">
                      Expert Sécurité / Cybersécurité
                    </option>
                    <option value="network">Administrateur Réseau</option>
                    <option value="techinfo">Spécialiste Tech Info</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Expérience</label>
                  <select
                    value={candidateData.experience}
                    onChange={(e) =>
                      setCandidateData({
                        ...candidateData,
                        experience: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="junior">Junior (0-2 ans)</option>
                    <option value="intermediate">
                      Intermédiaire (2-5 ans)
                    </option>
                    <option value="senior">Senior (5+ ans)</option>
                    <option value="reconversion">En reconversion</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => {
                      navigate("/questionnaire");
                      setShowCandidateForm(false);
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 rounded-lg font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    🎯 Commencer les tests maintenant
                  </button>
                  <button
                    type="submit"
                    disabled={isCandidateSubmitting}
                    className={`w-full border border-white/20 px-6 py-3 rounded-lg font-medium text-white shadow-lg transition-all duration-300 ${
                      isCandidateSubmitting
                        ? "bg-gray-600 cursor-not-allowed border-gray-600"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {isCandidateSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      "📧 Recevoir une démo personnalisée"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Recruiter Form Modal */}
      {showRecruiterForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div
            className="bg-[#0a0a1a] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full my-8 mx-auto"
            style={{ maxHeight: "calc(100vh - 2rem)" }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                👀 Démo Entreprise
              </h3>
              <button
                onClick={() => setShowRecruiterForm(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {recruiterFormSubmitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-green-400 mb-2">
                  Demande envoyée !
                </h4>
                <p className="text-white/80">
                  Merci pour votre intérêt. Notre équipe vous contactera dans
                  les 24h pour organiser votre démo personnalisée.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRecruiterSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={recruiterData.name}
                    onChange={(e) =>
                      setRecruiterData({
                        ...recruiterData,
                        name: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    value={recruiterData.email}
                    onChange={(e) =>
                      setRecruiterData({
                        ...recruiterData,
                        email: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    placeholder="votre@entreprise.com"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">
                    Entreprise / Organisation *
                  </label>
                  <input
                    type="text"
                    value={recruiterData.company}
                    onChange={(e) =>
                      setRecruiterData({
                        ...recruiterData,
                        company: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">
                    Besoin principal
                  </label>
                  <select
                    value={recruiterData.need}
                    onChange={(e) =>
                      setRecruiterData({
                        ...recruiterData,
                        need: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="recrutement">
                      Améliorer le recrutement tech
                    </option>
                    <option value="evaluation">
                      Évaluer les compétences internes
                    </option>
                    <option value="formation">
                      Suivre les progrès en formation
                    </option>
                    <option value="partenariat">
                      Partenariat / Intégration
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isRecruiterSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 rounded-lg font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isRecruiterSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Envoi en cours...
                    </div>
                  ) : (
                    "📧 Demander une démo"
                  )}
                </button>

                <p className="text-white/60 text-sm text-center">
                  Notre équipe vous contactera dans les 24h
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div
            className="bg-[#0a0a1a] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-md w-full my-8 mx-auto"
            style={{ maxHeight: "calc(100vh - 2rem)" }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                📧 Nous contacter
              </h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {contactFormSubmitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-green-400 mb-2">
                  Message envoyé !
                </h4>
                <p className="text-white/80">
                  Merci pour votre message. Nous vous répondrons dans les plus
                  brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={contactData.name}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        name: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Email *</label>
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        email: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Sujet *</label>
                  <input
                    type="text"
                    value={contactData.subject}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        subject: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2">Message *</label>
                  <textarea
                    value={contactData.message}
                    onChange={(e) =>
                      setContactData({
                        ...contactData,
                        message: e.target.value,
                      })
                    }
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isContactSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 rounded-lg font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isContactSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Envoi en cours...
                    </div>
                  ) : (
                    "📧 Envoyer le message"
                  )}
                </button>

                <p className="text-white/60 text-sm text-center">
                  Nous vous répondrons dans les 24h
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Path Selector Modal */}
      <AnimatePresence>
        {showPathSelector && (
          <PathSelector
            onPathSelect={handlePathSelect}
            onClose={() => setShowPathSelector(false)}
            currentPath={progress.selectedPath}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
