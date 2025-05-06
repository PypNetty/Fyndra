export const SUPPORTED_PLATFORMS = {
  LINKEDIN: "linkedin",
  INDEED: "indeed",
  WELCOME: "welcometothejungle",
  POLE_EMPLOI: "pole-emploi",
} as const;

export type Platform =
  (typeof SUPPORTED_PLATFORMS)[keyof typeof SUPPORTED_PLATFORMS];

export const PLATFORM_PATTERNS = {
  [SUPPORTED_PLATFORMS.LINKEDIN]: {
    urlPattern: /linkedin\.com\/jobs\//,
    selectors: {
      title: ".job-details-jobs-unified-top-card__job-title",
      company: ".job-details-jobs-unified-top-card__company-name",
      description: ".jobs-description-content__text",
    },
  },
  [SUPPORTED_PLATFORMS.INDEED]: {
    urlPattern: /indeed\.com\/viewjob/,
    selectors: {
      title: ".jobsearch-JobInfoHeader-title",
      company: ".jobsearch-InlineCompanyRating-companyName",
      description: "#jobDescriptionText",
    },
  },
  [SUPPORTED_PLATFORMS.WELCOME]: {
    urlPattern: /welcometothejungle\.com\/.*\/jobs\//,
    selectors: {
      title: '[data-testid="job-header-title"]',
      company: '[data-testid="company-info"] h3',
      description: '[data-testid="job-section-description"]',
    },
  },
};
