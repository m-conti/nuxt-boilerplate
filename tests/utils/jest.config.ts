import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  'transformIgnorePatterns': [
    '!node_modules/',
  ],
  'moduleNameMapper': {
    '^startup(.*)$': '<rootDir>/src/startup$1',
    '^tests(.*)$': '<rootDir>/src/constants$1',
    '^lodash-es$': 'lodash',
  },
  'transform': {
    '^.+\\.[t|j]sx?$': 'ts-jest',
  },
};

export default config;
