// 按需导出的名称元旭导入的名称保持一致
// 按需导入时  可以使用as关键字 进行重命名
// 按需导入可以和默认导入一起使用
import info,{n,say as says} from './03.按需导出.js'
console.log(n);
says()
console.log(info);