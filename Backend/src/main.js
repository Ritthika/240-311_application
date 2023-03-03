const express = require('express');
const compression = require('compression');


const app = express();
const port = process.env.port || 6969;

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://6310110625:1234@311-webapp.crrlhxw.mongodb.net/?retryWrites=true&w=majority')
        .then(() => console.log('Connection DB success'))
        .catch((err) => console.error(err));


app.listen(port, ()=> {
    console.log(`server is runing on port ${port}`);
});

const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
        return false;
    }
    return compression.filter(req, res);
};
app.use(compression({
    filter: shouldCompress,
    threshold: 0
}));

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('tester');
})


