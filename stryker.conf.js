module.exports = {
  testRunner: "jest",
  coverageAnalysis: "off",
  mutate: ["src/**/*.ts", "!src/**/*.test.ts", "!src/**/*.test.tsx"],
  timeoutMS: 60000,
  jest: { enableFindRelatedTests: false },
};
