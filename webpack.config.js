const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

module.exports = {
  entry: "./src/index.js", // Your entry point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // Your loaders (e.g., for JavaScript, CSS, etc.)
    ],
  },
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
