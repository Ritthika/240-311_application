const express = require('express');
const app = express();

const products = require('../routes/products');
const indexRouter = require('../routes/index');

app.use('/', indexRouter);
app.use('/products', products);

app.use(express.json);
module.exports = app;

