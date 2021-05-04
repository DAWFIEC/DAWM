var mongoose = require('mongoose');
var Researcher = require('./researcher')

DATABASE_URL = "mongodb://localhost:27017/conectados"

mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connnection successful!'))
    .catch(err => {
        console.error.bind(console, 'MongoDB connection error:')
    });