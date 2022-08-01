const handleSubmit = function () {
    const title = document.getElementById("title").value;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; // data not ready yet
        }

        const data = JSON.parse(xhr.responseText);
        const book = data.items[1].volumeInfo; // the 0th result has no book cover
        const bookTitle = book.title;
        const bookAuthor = book.authors[0];
        const bookCover = book.imageLinks.thumbnail;

        const titleHeader = document.createElement("h2");
        titleHeader.innerText = `${bookTitle} by ${bookAuthor}`;
        const coverImg = document.createElement("img");
        coverImg.src = bookCover;

        document.body.appendChild(titleHeader);
        document.body.appendChild(coverImg);
    };

    xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
    xhr.send();
};