var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var quotesRouter = require('./routes/quotes');
var booksRouter = require('./routes/books');
var addBookRouter=require('./routes/addBook');
var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/quotes', quotesRouter);
app.use('/books', booksRouter);
app.use('/addBook', addBookRouter);

module.exports = app;