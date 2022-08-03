const fetchBook = function () {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4){
            return
        }

        const img = document.createElement('img');

        const data = JSON.parse(xhr.responseText) //Changes STR to Obj

        img.src = data.items[1].volumeInfo.imageLinks.thumbnail;

        document.body.appendChild(img);
    };

    const title = document.getElementById('input').value

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`)

    xhr.send();
};

document.getElementById('fetch').addEventListener('click', fetchBook);