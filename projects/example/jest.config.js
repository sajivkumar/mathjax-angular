const baseConfig = require("../../jest.base.config");
module.exports = {
  ...baseConfig,
  modulePaths: ["<rootDir>/../../dist"],
  testEnvironment: 'jest-environment-jsdom',
};
