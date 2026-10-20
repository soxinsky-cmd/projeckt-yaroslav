const path = require('path');
//
module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main_Yaroslav.js',
  },
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
    ],
  },
};
