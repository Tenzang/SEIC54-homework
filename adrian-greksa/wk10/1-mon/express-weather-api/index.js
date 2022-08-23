const express = require('express');
const ejs = require('ejs');
const weather = require('weather-js');

const server = express();
server.set('view-engine', ejs);

const PORT = 8888;

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/info', (req, res) => {
    weather.find({search: req.query.city, degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        console.log(JSON.stringify(result, null, 2));

        const {temperature: temp, skytext: weather, observationpoint: city} = result[0].current;
        const forecast = result[0].forecast;

        res.render('info.ejs', {temp, weather, city, forecast});
    })
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }/`));