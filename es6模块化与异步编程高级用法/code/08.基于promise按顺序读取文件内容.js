// es6导入包  import方法
import tf from 'then-fs'

tf.readFile('./files/11.txt', 'utf-8').catch(err => {
    console.log(err.message);
})
    .then(r1 => {
        console.log(r1)
        return tf.readFile('./files/2.txt', 'utf-8')
    }).then(r2 => {
        console.log(r2)
        return tf.readFile('./files/3.txt', 'utf-8')
    }).then(r3 => {
        console.log(r3)
    })
// 若发生了 错误  .then便不会执行  而是直接进入.catch捕获错误

// 将 .catch可以不影响后续的 .then