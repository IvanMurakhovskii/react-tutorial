module.exports = {
  presets: ["next/babel"],
  plugins: [
    "@babel/plugin-proposal-class-properties", "@babel/transform-runtime"
  
],
  env: {
    production: {
      plugins: ["emotion"],
    },
    development: {
      plugins: [["emotion", { sourceMap: true }]],
    }
  }
};