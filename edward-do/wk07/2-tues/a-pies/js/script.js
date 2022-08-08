console.log('is this thing on?')

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://lingua-robot.p.rapidapi.com/language/v1/entries/en/",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "secrit",
		"X-RapidAPI-Host": "lingua-robot.p.rapidapi.com"
	}
};

json = {};

const fetchWord = function (word) {
    $.ajax(settings.url + word, settings).done(function (data) {
        json = data;
        const lemma = data.entries[0].lexemes[0].lemma
        const partOfSpeech = data.entries[0].lexemes[0].partOfSpeech
        const definition = data.entries[0].lexemes[0].senses[0].definition

        $('#lemma').text(lemma)
        $('#part-of-speech').text(partOfSpeech)
        $('#definition').text(definition)
    });
};

$('#search').on('submit', function (event) {
    event.preventDefault();

    const word = $('#word').val();
    fetchWord(word);
})

$.ajax('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud.json').done(function (data) {
    $('#usd').text(`${data.aud.usd} USD`)
    $('#eur').text(`${data.aud.eur} euros`);
});

// json.entries[0].lexemes[0].lemma
// json.entries[0].lexemes[0].partOfSpeech
// json.entries[0].lexemes[0].senses