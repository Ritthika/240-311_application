const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://6310110625:1234@311-webapp.crrlhxw.mongodb.net/?retryWrites=true&w=majority')
                .than(() => console.log('Connection DB success'))
                .catch((err) => console.error(err))

module.exports = connectDB;