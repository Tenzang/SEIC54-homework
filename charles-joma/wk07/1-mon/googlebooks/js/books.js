

const jsonButton = document.querySelector("#generate");
const buttonContainer = document.querySelector(".buttonContainer")
const display = document.querySelector("#displayContainer")

const diffButtons = ["Another One", "More" , "We the best" , "You is smart" , "You is loyal"];

//console.log(diffButtons)
//const response = fetch("https://www.googleapis.com/books/v1/volumes?q=title");
//console.log(response);

const generateJson = async () => {
    try {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=title");
    if(response.ok){
        const jsonResponse = await response.json();
        renderResponse(jsonResponse)
        changeButton();
     }
    } catch(error) {
        console.log(error)
    }
}; 

const formatJson = function(resjson){
    let resJson = JSON.stringify(resJson)
    let counter = 0;
    return resJson.split('').map(char => {
        switch(char){
            case ',':
                return `,\n${' '.repeat(counter * 2 )}`;
                case '{':
                    counter += 1;
                    return `\n${' '.repeat(counter * 2)}`;
                    case '}':
                        counter -= 1;
                    return `\n${' '.repeat(counter * 2)}}`;
                    default:
                    return char;
            }
        })
    .join('');
};
        
const renderResponse = function(jsonResponse){
    const jsonSelection = Math.floor(Math.random() * 4);
        display.innerHTML = `<prev>${formatJson(jsonResponse[jsonSelection])}</prev>`;
};


const changeButton = function(){
    const newText = Math.floor(Math.random() * 7);
    jsonButton.innerHTML = `${collection[newText]}!`;
};


jsonButton.addEventListener('click', generateJson);







