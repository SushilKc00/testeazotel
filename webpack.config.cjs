const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const copy = require("copy-webpack-plugin");

const resolve = {
  extensions: [".js", ".jsx"],
};

const serverConfig = {
  target: "node",
  mode: "development",
  entry: "./src/server/server.jsx",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "server.cjs",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(s*)css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      PORT: 3001,
    }),
  ],
  resolve,
};

const clientConfig = {
  target: "web",
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    publicPath: "/static",
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BROWSER": JSON.stringify(true),
    }),
    new htmlWebpackPlugin({
      template: `${__dirname}/src/client/index.html`,
    }),
    new copy({
      patterns: [{ from: `${__dirname}/src/client/static`, to: "static" }],
    }),
  ],
  resolve,
};

module.exports = [serverConfig, clientConfig];
