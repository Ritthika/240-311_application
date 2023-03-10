const app = require('./app');


const cors = require('cors');
app.use(cors());


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://6310110625:1234@311-webapp.crrlhxw.mongodb.net/?retryWrites=true&w=majority')
        .then(() => console.log('Connection DataBase success'))
        .catch((err) => console.error(err));


const http = require('http');
const server = http.createServer(app);
const port = process.env.port || 6969;
server.listen(port, () => {
    console.log(`server is runing on port ${port}`);
});


const compression = require('compression');
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


const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
