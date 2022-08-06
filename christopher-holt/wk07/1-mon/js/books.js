const fetchBookInfo = function () {
    const xhr = new XMLHttpRequest(); // similar to HTTParty
    const webpage = "https://www.googleapis.com/books/v1/volumes?q=title:Jaws";

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; // data is not ready yet
        }

        ///////////////////////////////////////////// Important for tonights homework
        console.log( xhr.responseText ); // STRING
        const title = JSON.parse(xhr.responseText).items[0].volumeInfo.title;
        const picture = JSON.parse(xhr.responseText).items[1].volumeInfo.imageLinks.thumbnail;
        const author = JSON.parse(xhr.responseText).items[0].volumeInfo.authors[0];
        const description = JSON.parse(xhr.responseText).items[1].volumeInfo.description;
        console.log( "The title is: " + title ); // AN OBJECT
        console.log( picture ); // AN OBJECT
        console.log( "The author is: " + author ); // AN OBJECT
        console.log( "The description is: " + description ); // AN OBJECT
        ///////////////////////////////////////////// 

        // Adding the title to the page
        const titleOnScreen = document.createElement('div');
        titleOnScreen.innerHTML = title;
        const head = document.body;
        head.appendChild(titleOnScreen);

        // Adding the Jaws image to the page
        const img = document.createElement('img');
        img.src = picture;
        document.body.appendChild(img);

        // Adding the description to the page
        // const p = document.getElementById('p');
        // const text = document.createTextNode(description);
        // p.append(text);       

    };

    info = xhr.open('GET', webpage);
    xhr.send(); // ASYNCHRONOUS (runs in the background)
};

document.getElementById('fetch').addEventListener('click', fetchBookInfo);
//fetchBookInfo(); // First fact free