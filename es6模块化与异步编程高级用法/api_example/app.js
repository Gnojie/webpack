import express from 'express'
import router from './router/user_router.js'
// 创建express服务器
const app =new express()

app.use('/api',router)

// 启动express服务器
app.listen(8080,()=>{
    console.log('running at http://127.0.0.1:8080') 
})