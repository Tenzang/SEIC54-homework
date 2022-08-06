const getBookTitle = function () {
    const xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        const data = JSON.parse(xhr.responseText);
        const thumbnail = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
        const title = data.items[0].volumeInfo.title;

        document.getElementById('book-title').innerHTML = title;
        document.getElementById('book-cover').src = thumbnail;
    };

    let title = document.getElementById('bookName').value
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`)
    xhr.send();
};

document.getElementById('see-info').addEventListener('click', getBookTitle);








// book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }"

// info = HTTParty.get book_url

// @thumbnail = info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]