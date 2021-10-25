module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)?"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  moduleNameMapper: {
    "@axe-helper(.*)$": "<rootDir>/axe-helper",
    "@components(.*)$": "<rootDir>/src/components/$1",
  },
};
