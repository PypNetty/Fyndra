import { Alert } from './alert';

export interface JobOffer {
  id?: string;
  url: string;
  platform: string;
  title?: string;
  company?: string;
  location?: string;
  salary?: string;
  description: string;
  extractedAt: Date;
  analyzedAt?: Date;
  alerts?: Alert[];
}
