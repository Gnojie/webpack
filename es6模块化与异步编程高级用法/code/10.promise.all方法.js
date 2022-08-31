import tf from 'then-fs'

const promisearr = [
    tf.readFile('./files/1.txt','utf-8'),
    tf.readFile('./files/2.txt','utf-8'),
    tf.readFile('./files/3.txt','utf-8'),
]

Promise.race(promisearr).then(result=>{ //只要有一个一步操作执行完成 就立即执行回调函数 赛跑机制
    console.log(result)
})