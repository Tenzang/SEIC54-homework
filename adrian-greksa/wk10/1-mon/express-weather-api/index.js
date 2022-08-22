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
        debugger;
        console.log(result)
        // const { current, forecast } = result[0]
        const city = result[0].location.name
        const {temperature: temp, skytext: weather} = result[0].current

        // forecastDays.forEach((d) => {

        // });

        res.render('info.ejs', {temp, weather, city})
    })
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }/`));