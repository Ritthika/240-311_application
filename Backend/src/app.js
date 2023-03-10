const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('teser');
})

module.exports = app;

