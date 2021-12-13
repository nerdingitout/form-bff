const { Pool, Client } = require("pg");
//require('dotenv').config();

const pool = new Pool({
/* do not put password or any sensitive info here, done only for demo */
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
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
