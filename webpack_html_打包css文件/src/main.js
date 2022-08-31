import $ from 'jquery'
$('.myul>li:odd').css('color','red')

$('.myul>li:even').css('color','blue')

// 引入css文件  报错因为webpack默认只能处理js文件
import "./css/index.css"
// css-loader  将css文件能像就是文件一样进行 import导入
// style-loader 将css插入到dom中