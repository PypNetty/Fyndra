import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DemoPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedMission, setSelectedMission] = useState<string | null>(null);
  const navigate = useNavigate();

  const demoSteps = [
    {
      title: "Choisissez votre mission",
      description:
        "Sélectionnez le type de mission que vous souhaitez explorer",
    },
    {
      title: "Formation théorique",
      description:
        "Apprenez les concepts fondamentaux à travers des cartes interactives",
    },
    {
      title: "Évaluation pratique",
      description: "Testez vos connaissances avec un questionnaire adapté",
    },
    {
      title: "Environnement VM prêt",
      description: "Mettez en pratique dans votre environnement sécurisé",
    },
  ];

  const missions = [
    {
      id: "dev-frontend",
      title: "Développement Frontend",
      description: "Créez une application React moderne avec TypeScript",
      icon: "⚛️",
      duration: "30 min",
      level: "Intermédiaire",
      tech: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "dev-backend",
      title: "API Backend",
      description: "Développez une API REST avec Node.js et Express",
      icon: "🚀",
      duration: "45 min",
      level: "Avancé",
      tech: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: "infra-docker",
      title: "Infrastructure Docker",
      description: "Containerisez une application complète",
      icon: "🐳",
      duration: "25 min",
      level: "Débutant",
      tech: ["Docker", "Docker Compose", "Nginx"],
    },
    {
      id: "cloud-aws",
      title: "Déploiement Cloud",
      description: "Déployez sur AWS avec Terraform",
      icon: "☁️",
      duration: "60 min",
      level: "Expert",
      tech: ["AWS", "Terraform", "CI/CD"],
    },
  ];

  const handleMissionSelect = (missionId: string) => {
    setSelectedMission(missionId);
    // Navigation directe vers le cours au lieu de simuler la création d'environnement
    navigate(`/course?mission=${missionId}&from=demo`);
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setSelectedMission(null);
  };

  return (
    <div className="min-h-screen bg-[#010116] text-white font-sans">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#010116]">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-600/20 filter blur-[100px]"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blue-500/20 filter blur-[100px]"></div>
          <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-cyan-400/20 filter blur-[100px]"></div>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 px-6 pt-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Retour à l'accueil
            </Link>

            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Fyndra
              </span>
              <span className="text-white/60">• Démo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            {demoSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index < demoSteps.length - 1 ? "flex-1" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    index === 0
                      ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white"
                      : "bg-white/10 text-white/50"
                  }`}
                >
                  {index + 1}
                </div>
                {index < demoSteps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 transition-all duration-300 bg-white/10`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Choisissez votre mission
            </h1>
            <p className="text-white/70">
              Sélectionnez le type de mission que vous souhaitez explorer. Vous
              suivrez ensuite : Formation → Quiz → Environnement VM
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((mission) => (
              <div
                key={mission.id}
                onClick={() => handleMissionSelect(mission.id)}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:-translate-y-1 transform-gpu"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 to-violet-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{mission.icon}</div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                        {mission.level}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-300">
                        {mission.duration}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                    {mission.title}
                  </h3>

                  <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">
                    {mission.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {mission.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer demo info */}
      <div className="relative z-10 mt-20 px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-center">
            <p className="text-white/60 text-sm">
              🎭 <strong>Ceci est une démonstration</strong> - Les
              environnements ne sont pas réellement créés. Créez un compte pour
              accéder aux vraies fonctionnalités de Fyndra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
