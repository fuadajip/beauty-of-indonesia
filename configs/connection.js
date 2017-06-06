const mongoose = require('mongoose');
const config = require('./database');
require('dotenv').config()

//Connect to database
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to database : ' + config.database);
});
mongoose.connection.on('error', (err) => {
    console.log('Error to connection to database');
});

module.exports = mongoose;