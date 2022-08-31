import tf from 'then-fs'

// promise 实例的顺序就是拿到结果的顺序

// promise.all方法等所有的异步操作都结束后才会去执行下一步的.then方法
const promisearr = [
    tf.readFile('./files/1.txt','utf-8'),
    tf.readFile('./files/2.txt','utf-8'),
    tf.readFile('./files/3.txt','utf-8'),
]
Promise.all(promisearr).then(result=>{
    console.log(result);
})