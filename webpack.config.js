const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
      index: 'frontend/src/index.tsx', 
  },
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.scss$/,
          use: [
              MiniCssExtractPlugin.loader,
              {
                  loader: "css-loader",
                  options: {
                      modules: false,
                      sourceMap: true,
                  }
              },
              "sass-loader"
          ]
      }
    ]
  }
};
