// main.js是webpack的入口文件


import $ from 'jquery'
$('.myul>li:odd').css('color','red')

$('.myul>li:even').css('color','blue')

// 引入css文件  报错因为webpack默认只能处理js文件
import "./css/index.css"
// css-loader  将css文件能像就是文件一样进行 import导入
// style-loader 将css插入到dom中
// 安装命令  yarn add css-loader style-loader -D

// 引入less文件  报错因为webpack默认只能处理js文件
import "./less/index.less"
// less-loader 识别less代码 
// less        将less编译为css
// 安装命令:   yarn add less less-loader -D

// 手动引入一个图片文件
// webpack眼里万物皆模块
import imgobj from "./assets/1.gif"
let img = document.createElement('img')
img.src = imgobj
document.body.appendChild(img)