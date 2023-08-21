const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:8080',
    methods: ['POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/api', function (req, res) {
    console.log('External API B called');
    res.status(200).json({ msg: 'External API B Success' });
});

app.listen(8082);