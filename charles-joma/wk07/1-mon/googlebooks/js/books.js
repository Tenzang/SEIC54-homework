
const url = 'https://www.datamuse.com/api/'

const inputField = document.getElementById('word_input')
const submit = document.getElementById("submit")
const responseField = document.getElementById('responseField')

const getSuggestion = () => {
    const wordQuery = inputField.value
    const endpoint = url + wordQuery

    fetch(endpoint, {
        mode: "no-cors",
        cache: 'no-cache' 
    }).then(response => {
        if(response.ok){
            return response.json()
        }
        throw new Error('Request failed!')
    }, networkError => {
        console.log(networkError.message)
    })
}

const displaySuggestions = (event) => {
    event.preventDefault();
while(responseField){
    responseField.removeChild(responseField.firstChild);
}
getSuggestion()
}

submit.addEventListener('click', displaySuggestions);









