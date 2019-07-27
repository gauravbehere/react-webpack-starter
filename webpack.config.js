const path = require('path');
const deployPath = path.resolve(__dirname, './dist');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './getting-started/index.js',
  output: {
    path: deployPath,
    filename: 'src-bundle.js'
  },
  devtool: false,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin(),
    new CopyWebpackPlugin([
      { from: "getting-started/index.html", to: 'gettingStarted.html', flatten: false }
    ]),
  ]
}
