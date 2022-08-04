
const fetchFact = function() {
    const xhr = new XMLHttpRequest();
    const name = document.getElementById('search').value;
        

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
            return; //data is not ready yet.
        }


        console.log( xhr.responseText);
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        const p = document.createElement('img');
        p.src = data["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"];
        document.body.appendChild(p);
    };
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title/' + name);
    xhr.send (); //request
}

document.querySelector(`#fetch`).addEventListener('click', fetchFact);
