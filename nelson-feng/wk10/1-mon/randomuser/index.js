const express = require('express');
const ejs = require('ejs');
const axios = require('axios');


const server = express();
server.set('view-engine', ejs);
server.use(express.static('public'));

const PORT = 1337;

server.get('/', (req,res) => {
    res.render('home.ejs');
});

server.get('/random', (req,res) => {
    axios.get('https://randomuser.me/api').then((response) => {
        const profile = response.data.results[0];
        const name = profile.name.first;
        const location = profile.location.country;
        const email = profile.email;
        const age = profile.dob.age;
        const mobile = profile.cell;
        const picture = profile.picture.large;
        console.log(name,location,email,age,mobile,picture);

        res.render('random.ejs',{
            profile: profile, 
            name: name, 
            location: location, 
            email: email,
            age: age,
            mobile: mobile,
            picture: picture,
        });
    });
});

server.get('/blurb', (req,res) => {
    console.log(req.query.blurb);

    axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${req.query.blurb}`).then((response) => {
        const blurb = response.data.extract;
        const title = response.data.title;
        res.render('blurb.ejs', {blurb: blurb, title: title,});
    })
});

server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

//HELP LODEN HELP OMG PLEASE IM DYING

// // node:internal/process/promises:288
// triggerUncaughtException(err, true /* fromPromise */);
// ^

// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "AxiosError: Request failed with status code 520".] {
// code: 'ERR_UNHANDLED_REJECTION'
// }