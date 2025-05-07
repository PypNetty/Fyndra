import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserCircleIcon,
  DocumentArrowUpIcon,
  WrenchScrewdriverIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import { HandRaisedIcon } from "@heroicons/react/24/outline";
import toast, { Toaster } from "react-hot-toast";
import SidebarNav from '../components/SidebarNav';
import TopNav from '../components/TopNav';

const SUGGESTIONS_BY_TITLE: Record<string, string[]> = {
  front: ["JavaScript", "TypeScript", "React", "Angular", "VueJs", "HTML", "CSS"],
  back: ["Node.js", "Python", "Java", "SQL", "Docker"],
  fullstack: ["JavaScript", "TypeScript", "React", "Node.js", "SQL"],
  data: ["Python", "SQL", "NoSQL", "AWS"],
  devops: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "GitHub Actions", "GitLab CI", "ArgoCD", "FluxCD"],
  mobile: ["React Native", "Java", "Kotlin", "Swift"],
  php: ["PHP", "SQL"],
  java: ["Java", "Spring", "SQL"],
  python: ["Python", "Django", "Flask"]
};

const ALL_TECHS = [
  "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
  "C#", "PHP", "Ruby", "Go", "AWS", "Azure", "Docker", "Kubernetes", "SQL", "NoSQL"
];

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [technos, setTechnos] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");
  const [allTechOptions, setAllTechOptions] = useState<string[]>(ALL_TECHS);
  const [cv, setCv] = useState<File | null>(null);
  const [lm, setLm] = useState<File | null>(null);
  const [cvName, setCvName] = useState("");
  const [lmName, setLmName] = useState("");
  const [cvUrl, setCvUrl] = useState("");
  const [lmUrl, setLmUrl] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("profile");
    if (stored) {
      const parsed = JSON.parse(stored);
      setName(parsed.name || "");
      setEmail(parsed.email || "");
      setTechnos(parsed.technos || []);
      setCvName(parsed.cvName || "");
      setLmName(parsed.lmName || "");
    }
  }, []);

  useEffect(() => {
    if (!name || technos.length > 0) return;
    const lower = name.toLowerCase();
    let autoTechs: string[] = [];
    Object.entries(SUGGESTIONS_BY_TITLE).forEach(([key, techs]) => {
      if (lower.includes(key)) autoTechs = [...autoTechs, ...techs];
    });
    if (autoTechs.length > 0) setTechnos(Array.from(new Set(autoTechs)));
  }, [name]);

  useEffect(() => {
    if (!jobTitle || technos.length > 0) return;
    const lower = jobTitle.toLowerCase();
    let autoTechs: string[] = [];
    Object.entries(SUGGESTIONS_BY_TITLE).forEach(([key, techs]) => {
      if (lower.includes(key)) autoTechs = [...autoTechs, ...techs];
    });
    if (autoTechs.length > 0) setTechnos(Array.from(new Set(autoTechs)));
  }, [jobTitle]);

  const handleTechInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && techInput.trim()) {
      e.preventDefault();
      const val = techInput.trim();
      if (!technos.includes(val)) {
        setTechnos([...technos, val]);
        if (!allTechOptions.includes(val)) setAllTechOptions([...allTechOptions, val]);
      }
      setTechInput("");
    }
  };

  const handleRemoveTech = (tech: string) => {
    setTechnos(technos.filter(t => t !== tech));
  };

  const uploadCvAndExtractSkills = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("http://localhost:3000/profile/upload-cv", {
      method: "POST",
      body: formData
    });
    if (!res.ok) {
      toast.error("Erreur lors de l'extraction du CV");
      return;
    }
    const data = await res.json();
    console.log("[Fyndra] Réponse backend upload-cv:", data);
    if (data.skills?.length > 0) {
      setTechnos(data.skills);
      toast.success(`${data.skills.length} compétences détectées depuis le CV`);
      // Sauvegarde automatique du profil après extraction des compétences du CV
      localStorage.setItem("profile", JSON.stringify({
        name,
        email,
        technos: data.skills,
        cvName,
        lmName
      }));
    } else {
      toast(`Aucune compétence détectée dans le CV\nRéponse brute: ${JSON.stringify(data)}`, { icon: "😬" });
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>, type: "cv" | "lm") => {
    const file = e.target.files?.[0] || null;
    if (type === "cv") {
      setCv(file);
      setCvName(file ? file.name : "");
      if (cvUrl) URL.revokeObjectURL(cvUrl);
      setCvUrl(file ? URL.createObjectURL(file) : "");
      if (file) await uploadCvAndExtractSkills(file);
    } else {
      setLm(file);
      setLmName(file ? file.name : "");
      if (lmUrl) URL.revokeObjectURL(lmUrl);
      setLmUrl(file ? URL.createObjectURL(file) : "");
    }
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify({ name, email, technos, cvName, lmName }));
    toast.success("Profil enregistré !");
    setTimeout(() => {
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex">
      <SidebarNav  />
      <div className="flex-1 flex flex-col">
        <TopNav  />
        <div className="flex-1 flex items-center justify-center">
          <Toaster position="top-center" />
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg flex flex-col gap-6 border-t-8 border-blue-400">
            <div className="flex items-center gap-3 mb-2">
              <UserCircleIcon className="h-8 w-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-blue-700">Mon profil</h1>
            </div>

            <div>
              <label className="block font-medium mb-1">Nom</label>
              <input className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-200" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-200" value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div>
              <label className="block font-medium mb-1">Métier visé</label>
              <input className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-200" value={jobTitle} onChange={e => setJobTitle(e.target.value)} placeholder="Ex: dev front, data analyst..." />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <WrenchScrewdriverIcon className="h-5 w-5 text-blue-400" />
                <label className="font-medium">Compétences / Technos connues</label>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {technos.map((tech) => (
                  <span key={tech} className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                    <button type="button" className="ml-1 text-blue-400 hover:text-blue-700" onClick={() => handleRemoveTech(tech)}>
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                  </span>
                ))}
              </div>
              <input className="border rounded px-3 py-2 w-full mt-2 focus:ring-2 focus:ring-blue-200" placeholder="Ajoutez une compétence et appuyez sur Entrée" value={techInput} onChange={e => setTechInput(e.target.value)} onKeyDown={handleTechInputKeyDown} />
            </div>

            {/* CV Upload */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <DocumentArrowUpIcon className="h-5 w-5 text-blue-400" />
                <label className="font-medium">CV (PDF)</label>
              </div>
              <input id="cv-upload" type="file" accept="application/pdf" className="hidden" onChange={e => handleFileChange(e, "cv")} />
              <label htmlFor="cv-upload" className="inline-block mt-1 px-4 py-2 bg-blue-100 text-blue-700 rounded cursor-pointer hover:bg-blue-200 text-sm font-medium">
                Sélectionner un fichier
              </label>
              {cvName && (
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                  <span>Fichier sélectionné : {cvName}</span>
                  <a href={cvUrl} download={cvName} className="ml-2 text-blue-500 hover:text-blue-700 hover:underline flex items-center gap-1">
                    <HandRaisedIcon className="h-4 w-4 text-blue-400" />
                    Télécharger
                  </a>
                  <button type="button" className="ml-2 text-red-500 hover:text-red-700 hover:underline" onClick={() => {
                    setCv(null);
                    setCvName("");
                    if (cvUrl) URL.revokeObjectURL(cvUrl);
                    setCvUrl("");
                  }}>
                    Retirer
                  </button>
                </div>
              )}
            </div>

            {/* LM Upload */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <DocumentArrowUpIcon className="h-5 w-5 text-blue-400" />
                <label className="font-medium">Lettre de motivation (PDF)</label>
              </div>
              <input id="lm-upload" type="file" accept="application/pdf" className="hidden" onChange={e => handleFileChange(e, "lm")} />
              <label htmlFor="lm-upload" className="inline-block mt-1 px-4 py-2 bg-blue-100 text-blue-700 rounded cursor-pointer hover:bg-blue-200 text-sm font-medium">
                Sélectionner un fichier
              </label>
              {lmName && (
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                  <span>Fichier sélectionné : {lmName}</span>
                  <a href={lmUrl} download={lmName} className="ml-2 text-blue-500 hover:text-blue-700 hover:underline flex items-center gap-1">
                    <HandRaisedIcon className="h-4 w-4 text-blue-400" />
                    Télécharger
                  </a>
                  <button type="button" className="ml-2 text-red-500 hover:text-red-700 hover:underline" onClick={() => {
                    setLm(null);
                    setLmName("");
                    if (lmUrl) URL.revokeObjectURL(lmUrl);
                    setLmUrl("");
                  }}>
                    Retirer
                  </button>
                </div>
              )}
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold shadow mt-2 transition" onClick={handleSave}>
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
