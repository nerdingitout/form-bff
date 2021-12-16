const express = require('express');
const router = express.Router();
const books = require('../services/addBook');

/* GET books listing. */
router.post('/', async function(req, res, next) {
  try {
    res.json(await books.insertBook(req.body));
  } catch (err) {
    console.error(`Error while getting books `, err.message);
    next(err);
  }
});

module.exports = router;