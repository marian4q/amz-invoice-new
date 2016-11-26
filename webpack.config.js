//webpack config

var webpack = require('webpack');
var path = require('path');
var debug = process.env.NODE_ENV !== "production";

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

// var config = {
//     entry: SRC_DIR+"/app/index.js",
//     output: {
//         path: DIST_DIR+"/app",
//         filename: "bundle.js",
//         publicPath: "/app/"
//     },
//     module: {
//         loaders:[
//             {
//                 test: /\.js$/,
//                 include: SRC_DIR,
//                 loader: "babel-loader",
//                 query: {
//                     presets: ["react", "es2015", "stage-2"]
//                 }
//             }
//         ],
//     }
// };

var config = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: __dirname + "/src/app/index.js",

  output: {
    filename: "index-min.js",
    path: __dirname + "/dist/app/",
    publicPath: '/dist/app/'
  },
  module: {
  loaders:[
      {
          test: /\.js$/,
          include: SRC_DIR,
          loader: "babel-loader",
          query: {
              presets: ["react", "es2015", "stage-2"]
          }
      }
    ],
  },
  watch: true,
  plugins: debug ? [] : [
    new webpack.optimize.DebupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
  ]
}

module.exports = config;
