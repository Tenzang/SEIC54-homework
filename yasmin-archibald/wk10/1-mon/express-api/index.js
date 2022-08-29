const express = require('express');
const ejs = require('ejs');
const randomCat = require('random-cat-img');

const server = express();
const PORT = 1337;
server.set('view-engine', ejs);

server.get('/home', (req, res) => {
    res.render('home.ejs')
});
server.get('/away', (req, res) => {
    
    randomCat().then(res => console.log(res.data))
    res.render('away.ejs');
})

server.listen(PORT, () => console.log(`Server running on http://localhost:${ PORT }`));