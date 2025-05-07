import '@testing-library/jest-dom';
import axios from 'axios';

// Mock des modules externes
declare global {
  const axios: typeof import('axios');
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidUrl(): R;
    }
  }
  const beforeAll: (fn: () => void) => void;
  const afterEach: (fn: () => void) => void;
  const jest: {
    mock: (moduleName: string, factory?: any) => void;
    fn: () => jest.Mock<any, any>;
    clearAllMocks: () => void;
  };
  const expect: {
    extend: (matchers: Record<string, (received: any) => {
      message: () => string;
      pass: boolean;
    }>) => void;
  };
}

// Configuration globale
beforeAll(() => {
  jest.mock('axios', () => ({
    create: jest.fn(() => ({
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    })),
  }));
});

// Nettoyage après chaque test
afterEach(() => {
  jest.clearAllMocks();
});

// Extension des matchers Jest
expect.extend({
  toBeValidUrl(received: string) {
    try {
      new URL(received);
      return {
        message: () => `expected ${received} to be a valid URL`,
        pass: true,
      };
    } catch (e) {
      return {
        message: () => `expected ${received} to be a valid URL`,
        pass: false,
      };
    }
  },
});
