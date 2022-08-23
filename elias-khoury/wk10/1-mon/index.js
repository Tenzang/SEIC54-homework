const express = require('express');
const ejs = require('ejs');
const server = express();
server.set('view-engine', ejs);
const PORT = 8888;
const bruh = require('bruhapi');

server.get('/', (req, res) => {
	res.render('home.ejs');
});

server.listen(PORT);
