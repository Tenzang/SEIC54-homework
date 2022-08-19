

const search = function () {
    const xhr = new XMLHttpRequest(); //similar to HTTParty
    let title = document.querySelector('input').value;
    xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`)
    xhr.send();
    xhr.onreadystatechange = function () {

        //You need this for 
        if (xhr.readyState != 4) {
            return;
        }
    
        //Grabs the Image
        const imageElement = document.getElementById('cover');
        const data = JSON.parse(xhr.responseText);
        const thumbnail = data.items[1].volumeInfo.imageLinks.thumbnail;
        imageElement.innerHTML = `<img src="${ thumbnail }" alt="searched novels cover">`;

        //Grabs the title
        const titleElement = document.getElementById('title');
        const title = data.items[0].volumeInfo.title 
        titleElement.innerHTML = `<h1>${ title }</h1>`

        //Grabs the Description
        const descriptionElement = document.getElementById('description')
        const description = data.items[1].volumeInfo.description 
        descriptionElement.innerHTML = `<p>${ description }</p>`
    }
}

document.getElementById('fetch').addEventListener('click', search);