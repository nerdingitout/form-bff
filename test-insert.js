const { Pool, Client } = require("pg");
require('dotenv').config();

const pool = new Pool({
/* do not put password or any sensitive info here, done only for demo */
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }    
});
pool.query(
  "INSERT INTO books VALUES(13213,'pls work', 'TT_TT')",
  (err, res) => {
    console.log(err, res);
    pool.end();
  }
);

//`insert into books values(${book_id},${book_name},${book_author});`