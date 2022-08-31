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
  )],
  module: { //加载器
    rules: [  //规则
      {  //一个具体的规则
        test: /\.css$/, 
        use: [ 'style-loader', 'css-loader' ]  //让webpack使用这俩个loader处理css文件
        //从左到右的执行顺序  不可以颠倒位置
      },
      {
        test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
      }
    ]
  }
};