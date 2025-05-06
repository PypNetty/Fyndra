import React, { useEffect, useState } from "react"; import SidebarNav from "../components/SidebarNav"; import TopNav from "../components/TopNav";

const Settings: React.FC = () => { const [name, setName] = useState(""); const [email, setEmail] = useState(""); const [language, setLanguage] = useState("fr"); const [darkMode, setDarkMode] = useState(false); const [minScore, setMinScore] = useState(50); const [cvName, setCvName] = useState(""); const [lmName, setLmName] = useState("");

useEffect(() => { const stored = localStorage.getItem("profile"); if (stored) { const parsed = JSON.parse(stored); setName(parsed.name || ""); setEmail(parsed.email || ""); setCvName(parsed.cvName || ""); setLmName(parsed.lmName || ""); }

const preferences = localStorage.getItem("preferences");
if (preferences) {
  const parsed = JSON.parse(preferences);
  setLanguage(parsed.language || "fr");
  setDarkMode(parsed.darkMode || false);
  setMinScore(parsed.minScore || 50);
}
}, []);

const handleSave = () => { localStorage.setItem("profile", JSON.stringify({ name, email, cvName, lmName })); localStorage.setItem("preferences", JSON.stringify({ language, darkMode, minScore })); alert("Paramètres sauvegardés !"); };

return ( <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex"> <SidebarNav /> <div className="flex-1 flex flex-col"> <TopNav /> <div className="flex-1 px-6 py-10"> <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-8 space-y-10 border-t-8 border-blue-500"> <h1 className="text-3xl font-bold text-blue-700">Paramètres</h1>
        {/* Section Profil */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Profil utilisateur</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Nom</label>
              <input value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-300" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              <label>Mode sombre</label>
            </div>
          </div>
        </section>

        {/* Section Matching */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Préférences de matching</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Langue</label>
              <select value={language} onChange={e => setLanguage(e.target.value)} className="w-full px-4 py-2 border rounded">
                <option value="fr">Français</option>
                <option value="en">Anglais</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Score minimum pour matcher (%)</label>
              <input type="number" min={0} max={100} value={minScore} onChange={e => setMinScore(Number(e.target.value))} className="w-full px-4 py-2 border rounded" />
            </div>
          </div>
        </section>

        {/* Section Confidentialité */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Confidentialité</h2>
          <p className="text-sm text-gray-600 mb-4">Vous pouvez exporter vos données ou supprimer votre compte.</p>
          <div className="flex gap-4">
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200">Exporter mes données</button>
            <button className="bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200">Supprimer mon compte</button>
          </div>
        </section>

        {/* Section Documents */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">Documents enregistrés</h2>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <span>📄 CV : {cvName || "non enregistré"}</span>
            <span>📄 Lettre de motivation : {lmName || "non enregistrée"}</span>
            <div className="flex gap-4 mt-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Remplacer le CV</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Remplacer la LM</button>
            </div>
          </div>
        </section>

        {/* Save button */}
        <div className="pt-4 text-right">
          <button onClick={handleSave} className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition font-semibold">
            Enregistrer les paramètres
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
); };

export default Settings;