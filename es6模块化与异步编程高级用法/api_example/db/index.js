import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'db1',
    user: 'root',
    password: 'root'
})

export default pool.promise()
