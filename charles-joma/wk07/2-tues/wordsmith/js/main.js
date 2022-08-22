

/*
// DATAMUSE 
Datamuse is a word finding api engine
used in apps to simply find words that match a 
set of parameters that you can choose

I am using words that sound like 
a certain word 
*/

const url = `https://api.datamuse.com/words?sl=` // Api url , the ?sl= , is what my query will 
// be looking for ( ?sl= is a the api requirement )

const inputField = document.getElementById('word_input'); // The input field value
const submit = document.getElementById("submit"); // The submit button 
const responseField = document.querySelector('.responseField'); // An empty div that will display the result
const unorderedList = document.createElement('ul') 



const preventDefault = function(e){
        e.preventDefault();
        $.ajax(`https://api.datamuse.com/words?sl=${ inputField.value }`).done(function (result) {
        let entireObject = result
        let grab10 = entireObject.slice(0, 10);
        let words = []
        for(let i = 0; i < grab10.length; i++){
                words.push(grab10[i].word)
        }
        // I want format the output better
        responseField.innerHTML = `<h4>${ words }</h4>`
    })
};



submit.addEventListener('click', preventDefault);

/*
const preventDefault = function(e){
    e.preventDefault();
    wordToRhyme = inputField.value
    endpoint = `${url} + ${wordToRhyme}`
    //console.log(endpoint)
    //console.log(fetch(endpoint))
    fetch(endpoint, {
        cache: "no-cache"
    }).then(response => {
        if(response.ok){
        let all = response.json()
        let jsonConvert = JSON.parse(all)
        console.log(jsonConvert)
        }
    })
}

submit.addEventListener('click', preventDefault);
*/










