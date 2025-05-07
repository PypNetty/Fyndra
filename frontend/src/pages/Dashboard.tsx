import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { UserCircleIcon, BriefcaseIcon, XCircleIcon, ShareIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

// Type d'offre d'emploi
interface JobOffer {
  id: string;
  title: string;
  location: string;
  status: "active" | "rejected" | "shared" | "applied" | "employer_refused";
  company?: string;
  url?: string;
  source?: string;
  contractType?: string;
  salary?: string;
  skills?: string[];
  skillsText?: string;
  skillsDynamicText?: string;
}

const mockOffers: JobOffer[] = [
  { id: "1", title: "Développeur React", location: "CDI · Paris", status: "active" },
  { id: "2", title: "Product Owner", location: "CDD · Lyon", status: "rejected" },
  { id: "3", title: "Data Analyst", location: "Stage · Lille", status: "shared" },
];

// Fonction utilitaire pour comparer les compétences du profil et de l'offre
function compareSkills(profileSkills: string[], offerSkills: string[]) {
  const profileSet = new Set(profileSkills.map(s => s.toLowerCase()));
  const offerSet = new Set(offerSkills.map(s => s.toLowerCase()));
  const matched = offerSkills.filter(s => profileSet.has(s.toLowerCase()));
  const missing = offerSkills.filter(s => !profileSet.has(s.toLowerCase()));
  const score = offerSkills.length > 0 ? Math.round((matched.length / offerSkills.length) * 100) : 0;
  return { score, matched, missing };
}

const Dashboard: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [offers, setOffers] = useState<JobOffer[]>([]);
  const [filter, setFilter] = useState<"all" | "rejected" | "shared" | "applied" | "employer_refused">("all");
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [offerToApply, setOfferToApply] = useState<JobOffer | null>(null);
  const [profile, setProfile] = useState<any>(null);

  // Statistiques
  const total = offers.length;
  const rejected = offers.filter(o => o.status === "rejected").length;
  const shared = offers.filter(o => o.status === "shared").length;
  const applied = offers.filter(o => o.status === "applied").length;
  const employerRefused = offers.filter(o => o.status === "employer_refused").length;

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
    const email = localStorage.getItem("userEmail");
    setUserEmail(email);
    const token = localStorage.getItem("token");
    if (email && token) {
      fetch(`http://localhost:3000/offers?email=${encodeURIComponent(email)}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) setOffers(data);
        });
    }
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) setProfile(JSON.parse(storedProfile));
  }, []);

  // Recharge le profil à chaque focus sur la page (pour que le match soit à jour après modif du profil)
  useEffect(() => {
    const handleFocus = () => {
      const storedProfile = localStorage.getItem("profile");
      if (storedProfile) setProfile(JSON.parse(storedProfile));
    };
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  const handleReject = async (id: string) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:3000/offers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status: "rejected" })
    });
    setOffers(offers => offers.map(o => o.id === id ? { ...o, status: "rejected" } : o));
  };

  const handleShare = async (id: string) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:3000/offers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status: "shared" })
    });
    setOffers(offers => offers.map(o => o.id === id ? { ...o, status: "shared" } : o));
  };

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:3000/offers/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
    setOffers(offers => offers.filter(o => o.id !== id));
  };

  const handleApply = async (id: string) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:3000/offers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status: "applied" })
    });
    setOffers(offers => offers.map(o => o.id === id ? { ...o, status: "applied" } : o));
  };

  const handleEmployerRefuse = async (id: string) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:3000/offers/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status: "employer_refused" })
    });
    setOffers(offers => offers.map(o => o.id === id ? { ...o, status: "employer_refused" } : o));
  };

  const filteredOffers = offers.filter(o => {
    if (filter === "all") return true;
    return o.status === filter;
  });

  // Calcul du matching profil/offre
  const getMatchingScore = (offer: JobOffer) => {
    if (!profile || !profile.technos || profile.technos.length === 0) return 0;
    // On cherche les technos dans le titre, contractType, et company (simple)
    const offerText = `${offer.title} ${offer.contractType || ''} ${offer.company || ''}`.toLowerCase();
    const offerTechs = profile.technos.filter((tech: string) => offerText.includes(tech.toLowerCase()));
    return Math.round((offerTechs.length / profile.technos.length) * 100);
  };

  // Questionnaire contextuel (exemple simple)
  const ApplyModal = ({ offer, onClose }: { offer: JobOffer, onClose: () => void }) => {
    const [salaryAnswer, setSalaryAnswer] = useState("");
    const [missingTechs, setMissingTechs] = useState<string[]>([]);
    const [extraProfileTechs, setExtraProfileTechs] = useState<string[]>([]);
    const [matchedTechs, setMatchedTechs] = useState<string[]>([]);
    const [missingOfferTechs, setMissingOfferTechs] = useState<string[]>([]);
    const [cvName, setCvName] = useState(profile?.cvName || "");
    const [lmName, setLmName] = useState(profile?.lmName || "");
    const [step, setStep] = useState(1);
    // Détection des technos demandées (exemple naïf)
    useEffect(() => {
      if (!offer || !profile) return;
      // Récupération dynamique des compétences de l'offre et du profil
      const profileSkills: string[] = (profile.technos || []).map((s: string) => s.trim()).filter(Boolean);
      // On prend offer.skills si dispo, sinon fallback sur parsing du texte
      let offerSkills: string[] = Array.isArray(offer.skills) && offer.skills.length > 0
        ? offer.skills.map((s: string) => s.trim()).filter(Boolean)
        : [];
      if (offerSkills.length === 0) {
        // Fallback très basique : split sur espaces du titre et contractType
        const offerText = `${offer.title} ${offer.contractType || ''}`.toLowerCase();
        offerSkills = profileSkills.filter(tech => offerText.includes(tech.toLowerCase()));
      }
      // Normalisation pour la comparaison
      const profileSet = new Set(profileSkills.map(s => s.toLowerCase()));
      const offerSet = new Set(offerSkills.map(s => s.toLowerCase()));
      const matched = offerSkills.filter(s => profileSet.has(s.toLowerCase()));
      const missing = offerSkills.filter(s => !profileSet.has(s.toLowerCase()));
      const extra = profileSkills.filter(s => !offerSet.has(s.toLowerCase()));
      setMatchedTechs(matched);
      setMissingTechs(missing);
      setExtraProfileTechs(extra);
      setMissingOfferTechs(missing); // Pour compatibilité affichage existant
    }, [offer, profile]);

    const handleSend = () => {
      // Ici, tu pourrais envoyer la candidature au backend
      alert("Candidature envoyée ! (démo)");
      setStep(2);
      setTimeout(onClose, 1500);
    };

    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
          <button onClick={onClose} className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-xl">×</button>
          {step === 1 ? (
            <>
              <h2 className="text-xl font-bold mb-4">Candidature à "{offer.title}"</h2>
              {!offer.salary && (
                <div className="mb-4">
                  <label className="block font-medium mb-1">Le salaire est-il indiqué ailleurs ?</label>
                  <input className="border rounded px-3 py-2 w-full" value={salaryAnswer} onChange={e => setSalaryAnswer(e.target.value)} placeholder="Indiquez le salaire si connu" />
                </div>
              )}
              <div className="mb-4 p-2 bg-gray-100 rounded text-xs">
                <div><b>Debug compétences profil :</b> {JSON.stringify(profile?.technos)}</div>
                <div><b>Debug compétences offre :</b> {JSON.stringify(offer?.skills)}</div>
              </div>
              {matchedTechs.length > 0 && (
                <div className="mb-4">
                  <label className="block font-medium mb-1 text-green-700">Compétences communes (match) :</label>
                  <ul className="list-disc ml-6 text-sm text-green-700">
                    {matchedTechs.map(t => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              )}
              {missingTechs.length > 0 && (
                <div className="mb-4">
                  <label className="block font-medium mb-1 text-red-600">Compétences requises par l'offre, absentes de votre profil :</label>
                  <ul className="list-disc ml-6 text-sm text-red-600">
                    {missingTechs.map(t => <li key={t}>{t}</li>)}
                  </ul>
                  <div className="text-xs text-gray-500 mt-1">Vous pouvez mettre à jour vos compétences dans votre <Link to="/profile" className="underline">profil</Link>.</div>
                </div>
              )}
              {extraProfileTechs.length > 0 && (
                <div className="mb-4">
                  <label className="block font-medium mb-1 text-blue-700">Compétences de votre profil non demandées par l'offre :</label>
                  <ul className="list-disc ml-6 text-sm text-blue-700">
                    {extraProfileTechs.map(t => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              )}
              <div className="mb-4">
                <label className="block font-medium mb-1">CV</label>
                <span className="text-sm text-gray-700">{cvName || 'Aucun CV sélectionné (voir Profil)'}</span>
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">Lettre de motivation</label>
                <span className="text-sm text-gray-700">{lmName || 'Aucune LM sélectionnée (voir Profil)'}</span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold flex items-center gap-2" onClick={handleSend}>
                <PaperAirplaneIcon className="h-5 w-5" /> Envoyer ma candidature
              </button>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-green-600 text-2xl font-bold mb-2">Candidature envoyée !</div>
              <div className="text-gray-500">Bonne chance 🎉</div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {/* ...Navbar sera affichée globalement via App.tsx */}
      <main className="flex-1 px-4 py-10 max-w-5xl mx-auto w-full">
        {/* Encart statistiques */}
        <section className="mb-10 grid grid-cols-1 sm:grid-cols-5 gap-6">
          <div className="bg-white rounded-xl shadow flex flex-col items-center p-6">
            <BriefcaseIcon className="h-8 w-8 text-blue-500 mb-2" />
            <div className="text-2xl font-bold text-gray-900">{total}</div>
            <div className="text-gray-500">Offres totales</div>
          </div>
          <div className="bg-white rounded-xl shadow flex flex-col items-center p-6">
            <XCircleIcon className="h-8 w-8 text-red-500 mb-2" />
            <div className="text-2xl font-bold text-gray-900">{rejected}</div>
            <div className="text-gray-500">Rejetées</div>
          </div>
          <div className="bg-white rounded-xl shadow flex flex-col items-center p-6">
            <ShareIcon className="h-8 w-8 text-blue-400 mb-2" />
            <div className="text-2xl font-bold text-gray-900">{shared}</div>
            <div className="text-gray-500">À partager</div>
          </div>
          <div className="bg-white rounded-xl shadow flex flex-col items-center p-6">
            <PaperAirplaneIcon className="h-8 w-8 text-green-500 mb-2" />
            <div className="text-2xl font-bold text-gray-900">{applied}</div>
            <div className="text-gray-500">Postulées</div>
          </div>
          <div className="bg-white rounded-xl shadow flex flex-col items-center p-6">
            <XCircleIcon className="h-8 w-8 text-gray-500 mb-2" />
            <div className="text-2xl font-bold text-gray-900">{employerRefused}</div>
            <div className="text-gray-500">Refus employeur</div>
          </div>
        </section>

        {/* Liste dynamique d'offres d'emploi */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Mes offres d'emploi</h2>
            <div className="flex gap-2 flex-wrap">
              <button className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setFilter("all")}>Toutes</button>
              <button className={`px-4 py-2 rounded ${filter === "rejected" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setFilter("rejected")}>Rejetées</button>
              <button className={`px-4 py-2 rounded ${filter === "shared" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setFilter("shared")}>À partager</button>
              <button className={`px-4 py-2 rounded ${filter === "applied" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setFilter("applied")}>Postulées</button>
              <button className={`px-4 py-2 rounded ${filter === "employer_refused" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setFilter("employer_refused")}>Refus employeur</button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredOffers.length === 0 && <div className="col-span-2 text-gray-400">Aucune offre</div>}
            {filteredOffers.map(offer => {
              // Utilise skillsText si présent, sinon skills
              const offerSkills = offer.skillsText
                ? offer.skillsText.split(',').map(s => s.trim()).filter(Boolean)
                : (offer.skills || []);
              const profileSkills = profile?.technos || [];
              const { score, missing } = compareSkills(profileSkills, offerSkills);
              return (
                <div key={offer.id} className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 items-start border-l-4 border-blue-200">
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold text-lg">{offer.title}</span>
                  </div>
                  <div className="text-gray-500 text-sm mb-2">{offer.location}</div>
                  {offer.company && <div className="text-gray-700 text-sm">🏢 {offer.company}</div>}
                  {offer.contractType && <div className="text-gray-700 text-sm">📄 {offer.contractType}</div>}
                  {offer.salary && <div className="text-gray-700 text-sm">💶 {offer.salary}</div>}
                  {offer.source && <div className="text-gray-500 text-xs">Source : {offer.source}</div>}
                  {offer.url && <div className="text-blue-600 text-xs truncate"><a href={offer.url} target="_blank" rel="noopener noreferrer">Voir l'offre originale ↗</a></div>}
                  <div className="w-full flex items-center gap-2 mb-1">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-2 rounded-full ${score >= 70 ? 'bg-green-400' : score >= 40 ? 'bg-yellow-400' : 'bg-red-400'}`} style={{ width: score + '%' }}></div>
                    </div>
                    <span className={`text-xs font-semibold ${score >= 70 ? 'text-green-600' : score >= 40 ? 'text-yellow-600' : 'text-red-600'}`}>{score}%</span>
                  </div>
                  {missing.length > 0 && (
                    <div className="text-xs text-red-600 mb-2">
                      Compétences manquantes : {missing.join(', ')}
                    </div>
                  )}
                  <div className="text-xs mb-2">
                    {score >= 70 ? '👍 Tu peux postuler en confiance !' : score >= 40 ? '⚠️ Quelques compétences manquent.' : '❌ Beaucoup de compétences manquent.'}
                  </div>
                  <div className="flex gap-2 mt-2">
                    {offer.status === "active" && (
                      <>
                        <button className="flex items-center gap-1 text-xs bg-red-100 text-red-600 px-2 py-1 rounded" onClick={() => handleReject(offer.id)}>
                          <XCircleIcon className="h-4 w-4" /> Rejeter
                        </button>
                        <button className="flex items-center gap-1 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded" onClick={() => handleShare(offer.id)}>
                          <ShareIcon className="h-4 w-4" /> Partager
                        </button>
                        <button className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded" onClick={() => handleApply(offer.id)}>
                          <PaperAirplaneIcon className="h-4 w-4" /> Postuler
                        </button>
                      </>
                    )}
                    {offer.status === "applied" && (
                      <>
                        <span className="mt-2 text-xs text-green-600 flex items-center gap-1"><PaperAirplaneIcon className="h-4 w-4" /> Postulée</span>
                        <button className="flex items-center gap-1 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded" onClick={() => handleEmployerRefuse(offer.id)}>
                          <XCircleIcon className="h-4 w-4" /> Simuler refus employeur
                        </button>
                      </>
                    )}
                    {offer.status === "shared" && (
                      <span className="mt-2 text-xs text-blue-500 flex items-center gap-1"><ShareIcon className="h-4 w-4" /> À partager</span>
                    )}
                    {offer.status === "rejected" && (
                      <span className="mt-2 text-xs text-red-500 flex items-center gap-1"><XCircleIcon className="h-4 w-4" /> Rejetée</span>
                    )}
                    {offer.status === "employer_refused" && (
                      <span className="mt-2 text-xs text-gray-500 flex items-center gap-1"><XCircleIcon className="h-4 w-4" /> Refus employeur</span>
                    )}
                    <button className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded" onClick={() => handleDelete(offer.id)}>
                      Supprimer
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <footer className="mt-auto p-6 text-sm text-center text-gray-500 bg-white/80">
        &copy; 2025 Fyndra — Tous droits réservés.
      </footer>
    </div>
  );
};

export default Dashboard;