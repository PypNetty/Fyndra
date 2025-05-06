import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Ajoute un utilisateur de test si non existant
  const email = "test@jobscan.com";
  const password = "test123"; // En production, il faut hasher le mot de passe !
  const name = "Testeur";

  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    await prisma.user.create({
      data: { email, password, name },
    });
    console.log("Utilisateur de test créé:", email);
  } else {
    console.log("Utilisateur déjà existant:", email);
  }
}

main().finally(() => prisma.$disconnect());
