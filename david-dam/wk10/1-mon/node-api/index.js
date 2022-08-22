import express from 'express';
import ejs from 'ejs';
import Pokedex from 'pokedex-promise-v2';
const pokemon = new Pokedex();


const server = express();
server.set('view-engine', ejs);

const PORT = 3000;

server.get('/', (req, res) => {
    res.render('home.ejs');
});

server.get('/search', (req,res) => {
    console.log(`search for ${ req.query.name }`);
    pokemon.getPokemonSpeciesByName(req.query.name.toLowerCase(), (response, error) => {
        if (!error) {
            const { name, id, habitat,capture_rate } = response;
            console.log(response)
            res.render('search.ejs', { name: name, id: id, habitat: habitat, capture_rate: capture_rate });
        } else {
            console.log(error);
        }
    });
})

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${ PORT }`);
});