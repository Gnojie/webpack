import fs from 'fs'
// 封装的具体步骤  函数的返回值是一个promise对象
// 为了创建具体的异步请求  需要给promise()对象传递一个function  将具体异步操作定义在function中
function getfile(path){
    // resolve表示成功时的回调函数  reject表示失败时的回调函数
    return new Promise(function(resolve,reject){
        fs.readFile(path,'utf-8',(err,datastr)=>{
            if(err) return reject(err)
            resolve(datastr)
        })
    })
}


getfile('./files/12.txt').then(r=>{console.log(r)},(err)=>{console.log(err.message)})
