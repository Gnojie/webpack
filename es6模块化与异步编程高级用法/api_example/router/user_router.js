import express from 'express'
import db from '../db/index.js'

const router = new express.Router()

router.get('/user', async (req, res) => {
    const rows = await db.query('select * from ev_user')
    res.send({
        status: 0,
        message: '请求成功',
        date: rows[0]
    })
})

router.post('/user', async (req, res) => {
    try {
        const rows = await db.query('')
        res.send({
            status: 0,
            message: '请求成功',
            date: rows[0]
        })
    } catch (e) {
        res.send({
            status: 1,
            message: '请求失败'
        })
    }
})

export default router