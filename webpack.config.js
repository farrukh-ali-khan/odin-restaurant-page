const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Main entry point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Use our custom template
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // Handle CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Handle image files
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: "./dist",
  },
};
