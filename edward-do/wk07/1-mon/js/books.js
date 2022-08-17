console.log('poop')


const fetchBook = function () {
    const xhr = new XMLHttpRequest(); // similar to HTTParty

    title = document.getElementById('title').value

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
        return; // The data is not ready yet.
        } 

        console.log( xhr.responseText ); // STRING
        const data = JSON.parse(xhr.responseText);
        console.log( data ); // an OBJECT

        data.items[1].volumeInfo.imageLinks.thumbnail

        const img = document.createElement('img');
        img.src = data.items[1].volumeInfo.imageLinks.thumbnail
        document.body.appendChild(img);

        const h2 = document.createElement('h2');
        h2.innerHTML = data.items[1].volumeInfo.title
        document.body.appendChild(h2);

        const h3 = document.createElement('h3');
        h3.innerHTML = data.items[1].volumeInfo.authors
        document.body.appendChild(h3);

        const p = document.createElement('p');
        p.innerHTML = data.items[1].volumeInfo.description
        document.body.appendChild(p);
    };


    // const img = document.createElement('img');
    // img.innerHTML = 

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
    xhr.send(); // ASYNCHRONOUS
};

document.getElementById('fetch').addEventListener('click', fetchBook);
// // $("#fetch").click(fetchFact);
// fetchFact(); // First fact free

// @cover = info["items"][1]["volumeInfo"]["imageLinks"]["thumbnail"]
// authors = info["items"][1]["volumeInfo"]["authors"]
// @authors = authors[0] if authors.size == 1
// @authors = authors.join(', ') if authors.size > 1 
// @description = info["items"][1]["volumeInfo"]["description"]
// @title = info["items"][1]["volumeInfo"]["title"]