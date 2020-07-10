module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "node",
    transform: {
      "^.+\\.(js|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
  };