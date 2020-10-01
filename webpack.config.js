const path = require('path');
require('babel-polyfill');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    app: ['babel-polyfill', './src/']
  },
  externals: {
    paths: "./src/index.tsx"
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|ts)x?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.css'],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};