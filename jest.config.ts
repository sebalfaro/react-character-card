import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/__test__/**/*.test.ts?(x)"],
  moduleNameMapper: {
    '^.+\\.module\\.(css|scss|sass)$': 'identity-obj-proxy',
    '^.+\\.(css|scss|sass)$': '<rootDir>/__mocks__/styleMock.ts',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
