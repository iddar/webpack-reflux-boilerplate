module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./public/app.bundle.js"
  },
  externals: {
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
