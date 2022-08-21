const button = document.getElementById("fetch");
const bookinput = document.getElementById('input_value');
const wordButton = document.getElementById('fetchBook');
const wordInput = document.getElementById('word_input');

button.addEventListener("click", function(e){
    e.preventDefault();
    const xhr = new XMLHttpRequest(); // This will be at ready state 0
    xhr.onreadystatechange = function(){
        if( xhr.readyState !== 4){
            return; // If xhr is not ready yet it means that there is nothing to do , so contino
        }
        const data = JSON.parse( xhr.responseText );
        const img = document.createElement('img')
        img.src = data.items[1].volumeInfo.imageLinks.thumbnail;
        document.body.appendChild(img)
    }

    xhr.open('GET',`https://www.googleapis.com/books/v1/volumes?q=title:${ bookinput.value }`);
    xhr.send();

    console.log(bookinput.value)
});


















