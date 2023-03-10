const express = require('express');
const app = express();

const products = require('../routes/products.js');
const indexRouter = require('../routes/index');


app.use('/', indexRouter);
app.use('/products', products);


module.exports = app;

