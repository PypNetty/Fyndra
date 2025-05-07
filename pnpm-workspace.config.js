module.exports = {
  packages: [
    'backend',
    'frontend',
    'extension',
    'shared',
  ],
  extends: '@pnpm/config',
  publicHoistPattern: [
    'typescript',
    'ts-node',
    'tsx',
    'vite',
    'tailwindcss',
    '@heroicons/react',
  ],
  hooks: {
    'prepare': 'pnpm install --frozen-lockfile',
    'preinstall': 'pnpm store path',
    'postinstall': 'pnpm store verify-integrity',
  },
  store: {
    integrityCheck: true,
    keepContent: true,
  },
  workspace: {
    syncVersions: true,
    syncPeerDependencies: true,
  },
}
