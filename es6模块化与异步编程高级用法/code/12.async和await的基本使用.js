import thenFs from "then-fs";

async function getfile(){
    const r1 = await thenFs.readFile('./files/1.txt')
    const r2 = await thenFs.readFile('./files/2.txt')
    const r3 = await thenFs.readFile('./files/3.txt')
}
// 在默认返回值是promise对象的前面加上await 则该await promise对象的返回值这变为最终值
// await必须和async固定搭配使用

// 在async方法中  不被await修饰的同步执行 被await修饰的异步执行