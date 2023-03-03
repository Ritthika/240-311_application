const express = require('express');
const compression = require('compression');

const app = express();
const port = process.env.port || 6969;

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
    res.send('about');
})


