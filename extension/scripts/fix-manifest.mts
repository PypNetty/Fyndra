import { promises as fs } from "fs";
import path from "path";

const dist = path.resolve("dist");
const manifestSrc = path.resolve("src/manifest.json");
const manifestDest = path.join(dist, "manifest.json");

async function run() {
  const manifest = JSON.parse(await fs.readFile(manifestSrc, "utf-8"));

  // Cherche le bon fichier content script dans assets/
  const files = await fs.readdir(path.join(dist, "assets"));
  const contentScript = files.find(
    (f) => f.startsWith("content") && f.endsWith(".js")
  );

  if (!contentScript) {
    throw new Error("🛑 Aucun fichier content script trouvé dans dist/assets/");
  }

  // Remplace le chemin du JS dans le manifest
  manifest.content_scripts.forEach((entry) => {
    entry.js = [`assets/${contentScript}`];
  });

  // Écris le manifest final dans dist/
  await fs.writeFile(manifestDest, JSON.stringify(manifest, null, 2));
  console.log(`✅ manifest.json mis à jour avec ${contentScript}`);
}

run().catch((e) => {
  console.error("❌ Erreur dans fix-manifest:", e);
  process.exit(1);
});
