import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../lib/zustand";
import UserMenu from "../../components/UserMenu";

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
    desc: "Terminez un test et recevez votre certification de compétences immédiatement.",
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
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              Tests pratiques en situation réelle • Évaluation objective • Matching emploi garanti
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="#features"
                className="bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-4 rounded-full font-medium text-white text-center shadow-lg shadow-blue-900/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 transform-gpu"
              >
                Prouver mes compétences
              </a>
              <Link
                to="/questionnaire"
                className="px-8 py-4 rounded-full font-medium text-white/90 text-center border border-white/20 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 transform-gpu"
              >
                Voir un test gratuit
              </Link>
            </div>
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
              Fini les CV bidons. Place aux preuves concrètes de vos compétences.
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
              Une plateforme qui relie formation, pratique et emploi, sans bullshit. 
              Elle montre ce que tu sais faire — pas juste ce que tu dis savoir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pour les apprenants */}
            <div className="relative bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 group hover:bg-blue-500/20 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                🟦
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Pour les apprenants / candidats</h3>
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
                  <span>Rapport clair : score, points forts, axes à travailler</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">📌</span>
                  <span>Historique personnel des parcours et progrès</span>
                </li>
              </ul>
            </div>

            {/* Pour les formateurs */}
            <div className="relative bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-3xl p-8 group hover:bg-yellow-500/20 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                🟨
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Pour les formateurs / écoles</h3>
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
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                🟩
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Pour les recruteurs / entreprises</h3>
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
                Fyndra, c'est la plateforme qui relie formation, pratique et emploi, sans bullshit. 
                Elle montre ce que tu sais faire — pas juste ce que tu dis savoir.
              </p>
              <div className="mt-6">
                <Link
                  to="/questionnaire"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-3 rounded-full font-medium text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <span>🚀</span>
                  Commencer maintenant
                </Link>
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
                        <span className="text-white/80">Vitesse de démarrage</span>
                        <span className="text-blue-400">90%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[90%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/80">Réactivité système</span>
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
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24">
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
                  <a
                    href="mailto:contact@fyndra.com"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    contact@fyndra.com
                  </a>
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
              <a href="#features" className="text-white/60 hover:text-blue-400 transition-colors">
                Fonctionnalités
              </a>
              <a href="#avantages" className="text-white/60 hover:text-blue-400 transition-colors">
                Avantages
              </a>
              <a href="#contact" className="text-white/60 hover:text-blue-400 transition-colors">
                Contact
              </a>
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                Mentions légales
              </a>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 mb-4 md:mb-0">
              © {new Date().getFullYear()} Fyndra. Tous droits réservés.
            </p>

            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
