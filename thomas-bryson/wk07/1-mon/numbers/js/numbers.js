const fetchBook = function () {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return; 
        }
        const bookData = JSON.parse(xhr.responseText);
        const thumbnail = (bookData["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]);
        const title = (bookData["items"][0]["volumeInfo"]["title"]);
        const desc = (bookData["items"][0]["volumeInfo"]["description"]);
        console.log(desc)
/// Create paragraph for title
        const printTitle = document.createElement('h2');
        printTitle.innerHTML = title;
        document.body.appendChild(printTitle);
/// Create paragraph for image
        const img = document.createElement('img');
        img.src = thumbnail;
        document.body.appendChild(img);
/// Create paragraph for description
        const printDesc = document.createElement('p');
        printDesc.innerHTML = desc;
        document.body.appendChild(printDesc);
    };
    let book = document.getElementById('book').value
    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ book }`);
    xhr.send(); // asynchronous (runs in the background)
};
document.getElementById('fetch').addEventListener('click', fetchBook)