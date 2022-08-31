// es6导入包  import方法
import tf from 'then-fs'

// then-fs中的readfile返回值是一个promise对象
tf.readFile('./files/1.txt','utf-8').then(r1 =>{
    console.log(r1)
})
tf.readFile('./files/2.txt','utf-8').then(r2 =>{
    console.log(r2)
})
tf.readFile('./files/3.txt','utf-8').then(r3 =>{
    console.log(r3)
})
// 该种写法无法保证读取的顺序
// 如果上一个 then方法返回了一个新的promise对象 则可以通过下一个then方法继续处理  通过.then方法的链式调用  用来解决回调地域的问题