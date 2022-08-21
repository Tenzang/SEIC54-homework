const fetchPhoto = function () {
    $.ajax("https://random.dog/woof.json").done(function (data) {
        const photo = data.url;
            $('#photo').attr('src', photo);
    });
};

$('#search').on('submit', function (event) {
    event.preventDefault();
    fetchPhoto();
});

