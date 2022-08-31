const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({  //plugin插件
    template : './public/index.html' // 告诉webpack使用插件时  以我们自己的html文件作为模板生成dist文件html文件
  }
  )]
};