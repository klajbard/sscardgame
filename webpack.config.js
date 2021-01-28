const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ['./src/index.js'],
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: "dashesOnly",
                localIdentName: "[local][hash:3]",
              },
            }
          },
          'less-loader',
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ],
  output: {
    publicPath: "/",
    chunkFilename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3000
  }
}