const express = require('express');
const app = express();

const body = require('body-parser');
app.use(body());

const products = require('../routes/api/products');
const indexRouter = require('../routes/api/index');

app.use('/', indexRouter);
app.use('/products', products);

app.use(express.json);
module.exports = app;

