const path = require('path');
const express = require('express');
const app = express();


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/api', function (req, res) {
    console.log('Own API called');
    res.status(200).json({ msg: 'Own API Success' });
});

app.listen(8080);