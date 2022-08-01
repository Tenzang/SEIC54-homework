const fetchBook = function (name) {

    const xhr = new XMLHttpRequest ();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
        return;
        }

        const data = JSON.parse(xhr.responseText);
        
        const img = document.createElement('img');
        img.src = data["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"];
        document.body.appendChild(img);
    }

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${name}`);
    xhr.send();

};

const getbookName = function() {
    let bookName = document.getElementById('title').value
    fetchBook(bookName)
};

document.querySelector('button').addEventListener('click', getbookName)
