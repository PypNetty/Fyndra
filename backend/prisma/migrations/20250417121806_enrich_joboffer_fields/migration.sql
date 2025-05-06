/*
  Warnings:

  - Added the required column `source` to the `JobOffer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `JobOffer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobOffer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "company" TEXT,
    "score" INTEGER,
    "alerts" TEXT,
    "status" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "contractType" TEXT,
    "salary" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "JobOffer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_JobOffer" ("alerts", "company", "id", "location", "score", "status", "title", "userId") SELECT "alerts", "company", "id", "location", "score", "status", "title", "userId" FROM "JobOffer";
DROP TABLE "JobOffer";
ALTER TABLE "new_JobOffer" RENAME TO "JobOffer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
