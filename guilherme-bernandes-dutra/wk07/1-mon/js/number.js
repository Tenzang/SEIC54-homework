const fetchFact = function () {
    const xhr = new XMLHttpRequest(); // similar to HTTParty

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; // The data is not ready yet.
        }

        const data = JSON.parse(xhr.responseText);
        console.log(data)

        const img = document.createElement('img');
        img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
        document.body.appendChild(img);
    };
    const bookTitle = document.getElementById('book_name').value;
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + bookTitle);
    xhr.send(); // asynchronous (runs in the background)
    
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact(); // First fact free