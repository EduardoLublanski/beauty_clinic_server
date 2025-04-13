import mysql2 from "mysql2/promise"

const connection = await mysql2.createConnection({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DBNAME
})
export default connection;