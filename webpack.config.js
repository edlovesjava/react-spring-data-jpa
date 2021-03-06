var path = require('path');

module.exports = {
    entry: './src/main/js/index.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
      path: __dirname,
      filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
      rules: [

        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          resolve: {
            extensions: [".js", ".jsx"]
          },
          use: [{
              loader: 'babel-loader',
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],  
              },


          }]
        },
        {
          test: /\.css$/,
          loader: 'style-loader'
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },

      ]
    },

};
