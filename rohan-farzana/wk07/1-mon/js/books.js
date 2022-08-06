const fetchCover = function (bookTilte){
    //get xhr
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + bookTilte);
    xhr.send(); 
    xhr.onreadystatechange = function (){
     if (xhr.readyState !== 4) return;
     const data = JSON.parse(xhr.responseText);
 
     const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
     document.getElementById('cover').src = cover;
 
    };
 };
 
 
 // selct the button
 document.getElementById('search').addEventListener('submit', function(event){
     event.preventDefault();
     const title = document.getElementById('title').value;
     fetchCover(title);
 });