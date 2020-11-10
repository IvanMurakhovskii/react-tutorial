module.exports = {
  testRunner: "jest",
  coverageAnalysis: "off",
  mutate: ["src/**/*.ts", "src/**/*.tsx", "!src/calc", "!src/homework_3", "!src/homework_8", "!src/**/*.test.ts"],
  timeoutMS: 60000,
  jest: { enableFindRelatedTests: false },
};
