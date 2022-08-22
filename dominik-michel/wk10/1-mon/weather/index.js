const express = require('express');
const ejs = require('ejs');
const openweather = require('openweather-apis')

const server = express();
server.set('view-engine', ejs);

const PORT = 4444;
const API_KEY = 'b60b80b07c3298e007cf420ab8359922';

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/result', (req, res) => {
    openweather.setCity({ticker: req.query.symbol, apiKey: API_KEY}).then((result) => {
        res.render('result.ejs', { symbol: req.query.symbol, temp: result.temp });
    });
});

server.listen(PORT, () => console.log(`Server running at http://localhost:${ PORT }/`));