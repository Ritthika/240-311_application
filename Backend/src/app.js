const express = require('express');
const app = express();

const products = require('../routes/products.js');
const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', products);


module.exports = app;

