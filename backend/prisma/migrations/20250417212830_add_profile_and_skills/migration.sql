-- AlterTable
ALTER TABLE "JobOffer" ADD COLUMN "description" TEXT;

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "userId" INTEGER NOT NULL,
    "certifications" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "current" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "skills" TEXT,
    "profileId" INTEGER NOT NULL,
    CONSTRAINT "Experience_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "UserProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Education" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "degree" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "current" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "profileId" INTEGER NOT NULL,
    CONSTRAINT "Education_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "UserProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JobMatch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jobOfferId" INTEGER NOT NULL,
    "userProfileId" INTEGER NOT NULL,
    "matchPercentage" INTEGER NOT NULL,
    "matchingSkills" TEXT NOT NULL,
    "missingSkills" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "JobMatch_jobOfferId_fkey" FOREIGN KEY ("jobOfferId") REFERENCES "JobOffer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "JobMatch_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_JobOfferToSkill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_JobOfferToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "JobOffer" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_JobOfferToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SkillToUserProfile" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_SkillToUserProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Skill" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SkillToUserProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "UserProfile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "JobMatch_jobOfferId_userProfileId_key" ON "JobMatch"("jobOfferId", "userProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "_JobOfferToSkill_AB_unique" ON "_JobOfferToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_JobOfferToSkill_B_index" ON "_JobOfferToSkill"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SkillToUserProfile_AB_unique" ON "_SkillToUserProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillToUserProfile_B_index" ON "_SkillToUserProfile"("B");
