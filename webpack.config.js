const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
module.exports = {
  entry: {
      index: './frontend/src/index.tsx', 
      listen: './frontend/src/listen/index.tsx'
  },
  output: {
      path: path.resolve(__dirname, 'frontend/static/frontend'),
      filename:'[name].js'   
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
