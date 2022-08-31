const path = require('path')

module.exports = {
  entry: './src/main.js', //入口文件
  output: {//出口
    path: path.resolve(__dirname, 'dist'), //出口文件夹
    filename: 'bundle.js' //出口文件
  }
}