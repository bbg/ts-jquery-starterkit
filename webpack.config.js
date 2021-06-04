//
// Webpack Configration
//

const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  mode: "development",
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
};

//
// END
//
