const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/public/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "src/dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,

        use: {
          loader: "babel-loader",
          query: {
            presets: ["es2015", "react", "stage-2"]
          }
        }
      },
      {
        test: /\.css$/,
        include: [/src/, /node_modules/],
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.json$/,
        include: "/build/contracts/",
        loader: "json-loader"
      },
      { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html"
    })
  ]
};
