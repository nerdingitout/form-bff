const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function insertBook(body) {
  // generating random id for book, we should check if the id exists in the table, if it doesnt exist we can add it
  let book_id = Math.floor(Math.random() * 3000);
  //console.log(book_id);

  //getting values from frontend, for now they are static
  let book_name=body.book_name;
  let book_author=body.author;
  db.query(
    `insert into books values(${book_id},'${book_name}','${book_author}');`,
    (err, res) => {
      console.log(err, res);
    } 
  );
}

module.exports = {
  insertBook
}