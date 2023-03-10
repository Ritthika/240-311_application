const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, '../Log/access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('teser');
})

module.exports = app;

