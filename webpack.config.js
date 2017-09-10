var webpack = require("webpack");

var path = require('path');




module.exports = {
  // body...

  entry:[
      "./src/index.js"
  ],


  output:{
    path:path.join(__dirname, 'dist'),
    filename:'bundle.js',
      publicPath: "/static/"
  },

  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        include:path.join(__dirname, 'src'),
        loader:['react-hot-loader', 'babel-loader']
      }
    ]
  },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devtool:'eval-source.map'
};
