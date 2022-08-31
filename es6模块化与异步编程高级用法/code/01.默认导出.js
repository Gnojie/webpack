let n =1
let show = function(){
    console.log('123');
}

// 每个模块中  只允许使用唯一一次的export default
export default {
    n,
    show
}