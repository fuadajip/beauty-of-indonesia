let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cors = require('cors');
require('dotenv').config();
require('./configs/connection');
let app = express();
let port = process.env.PORT;

let destinationRoutes = require('./routes/destination');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use('/api/v1', destinationRoutes);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});