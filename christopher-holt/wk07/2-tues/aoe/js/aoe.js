const fetchAOE = function () {
    $.ajax('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations').done(function (data) {
        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        $('#cover').attr('src', cover);
        $('#fetch').after(`<p>${ data }</p`);
        console.log(data.items[0]);
    });
}

$('#search').on('submit', function (event) {
    event.preventDefault();
    const name = $('#title').val();
    fetchAOE(name);
})