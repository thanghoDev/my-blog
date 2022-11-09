/** @type {import('jest').Config} */
module.exports = {
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
    '!src/pages/api/*',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  moduleNameMapper: {
    '.+\\.(css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '^@/pages(.*)$': '<rootDir>src/pages/$1',
    '^@/components(.*)$': '<rootDir>src/components/$1',
    '^@/constants(.*)$': '<rootDir>src/constants/$1',
    '^@/helpers/(.*)$': '<rootDir>src/helpers//$1',
    '^@/assets(.*)$': '<rootDir>src/assets/$1',
    '\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};
