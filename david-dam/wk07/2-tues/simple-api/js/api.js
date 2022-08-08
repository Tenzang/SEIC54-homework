

const fetch = function (title) {
    $.ajax('http://api.open-notify.org/astros').done(function (data){
        console.log('request finish')
        console.log(data)
        console.log(data.number)
        console.log(data.people)
    
        const people = data.people
        const number = data.number

        $('p#number').html(`${ number } Astronauts in space at this moment.`)
        $('p#people').html(`${ people[0].name }`)
        $('p#people1').html(`${ people[1].name }`)
        $('p#people2').html(`${ people[2].name }`)
        $('p#people3').html(`${ people[3].name }`)
        $('p#people4').html(`${ people[4].name }`)
        $('p#people5').html(`${ people[5].name }`)
        $('p#people6').html(`${ people[6].name }`)
        $('p#people7').html(`${ people[7].name }`)
        $('p#people8').html(`${ people[8].name }`)
        $('p#people9').html(`${ people[9].name }`)

    });
}

$('#search').on('submit', function (event) {
    event.preventDefault();

    const title = $('#title').val();
    fetch(title);
})


// data.responseJSON.people 

// const fetchCover = function (bookTitle) {
//     $.ajax('https://www.googleapis.com/books/v1/volumes?q=title:' + bookTitle).done(function (data) {
//         console.log('request finished')
//         console.log(data);

//         const cover = data.items[1].volumeInfo.imageLinks.thumbnail;
//         $('#cover').attr('src', cover);
//     });
    
// };

// $('#search').on('submit', function (event) {
//     event.preventDefault();

//     const title = $('#title').val();
//     fetchCover(title);
// })