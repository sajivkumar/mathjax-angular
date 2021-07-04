module.exports = {
  preset: "jest-preset-angular",
  testMatch: ["**/+(*.)+(spec).+(ts)"],
  setupFilesAfterEnv: ["<rootDir>/../../jest.base.setup.ts"],
  coverageReporters: ["html"],
  reporters: ["default", "bamboo-jest-reporter"],
  moduleNameMapper: {
    "^@promap/(.*)$": "<rootDir>/../../projects/test-mathjax/src/$1",
  },
};
