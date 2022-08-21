const fetchCover = function (bookTitle) {
    $.ajax('https://www.googleapis.com/books/v1/volumes?q=title:' + bookTitle).done(function (data) {
        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
            $('#cover').attr('src', cover);
    });
};

$('#search').on('submit', function (event) {
    event.preventDefault();

    // get the title
    const title = $('#title').val();
    fetchCover(title);
});




// const fetchCover = function (bookTitle) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + bookTitle);
//     xhr.send(); // asynchronous
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState !== 4) return;
//         const data = JSON.parse(xhr.responseText);

//         const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
//         document.getElementById('cover').src = cover;
//     };
// };

// document.getElementById('search').addEventListener('submit', function (event) {
//     event.preventDefault(); // DON'T GO ANYWHERE
//     const title = document.getElementById('title').value;
//     fetchCover(title);
// });