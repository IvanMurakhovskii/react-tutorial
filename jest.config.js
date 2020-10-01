module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/internals/jestSettings.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: { "\\.(css)$": "<rootDir>/__mocks__/styleMock.js" },
  snapshotSerializers: ['enzyme-to-json/serializer']
};