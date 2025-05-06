export interface Skill {
  id?: number;
  name: string;
  category?: string;
}

export interface Experience {
  id?: number;
  title: string;
  company: string;
  startDate: Date | string;
  endDate?: Date | string;
  current: boolean;
  description?: string;
  skills?: string[]; // Liste des compétences associées à cette expérience
}

export interface Education {
  id?: number;
  degree: string;
  institution: string;
  startDate: Date | string;
  endDate?: Date | string;
  current: boolean;
  description?: string;
}

export interface UserProfile {
  id?: number;
  name: string;
  title?: string;
  userId: number;
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  certifications?: string[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface JobMatch {
  id?: number;
  jobOfferId: number;
  userProfileId: number;
  matchPercentage: number;
  matchingSkills: string[]; // Compétences qui correspondent
  missingSkills: string[]; // Compétences manquantes
  createdAt?: Date | string;
}
