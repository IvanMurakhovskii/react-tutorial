const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: './src/index.tsx',
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};