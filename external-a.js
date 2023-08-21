const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(path.join(__dirname, '/public')));

app.get('/api', function (req, res) {
    console.log('External API A called');
    res.status(200).json({ msg: 'External API A Success' });
});

app.listen(8081);