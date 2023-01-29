const mysql = require('mysql2/promise');

async function main() {
    const conn = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "countries"
    });

    const [rows] = await conn.execute('select * from tablej');
    console.log(rows);
    conn.end();
}