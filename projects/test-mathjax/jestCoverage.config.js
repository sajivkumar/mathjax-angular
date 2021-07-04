const baseConfig = require("./jest.config");
module.exports = {
  ...baseConfig,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "**/*.ts",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/app-setup.ts",
  ],
};
