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
const book_id=3283294;
const book_name='this is another book';
const book_author='this is the book author';
pool.query(
  `insert into books values(${book_id},'${book_name}','${book_author}');`,
  (err, res) => {
    console.log(err, res);
    pool.end();
  }
);

//`insert into books values(${book_id},${book_name},${book_author});`
