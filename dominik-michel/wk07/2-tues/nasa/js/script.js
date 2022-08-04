
const nasa = function(name){
    $.ajax('https://api.nasa.gov/planetary/apod?api_key=F2gwKV1Gy3S4Akz3GEDTSU907etaaQ7G5SVQYrBF&date=' + name ).done(function(data){
        const cover = data.hdurl;
        $('#cover').attr('src', cover)
    });
};
$('#search').on('submit', function(event){
    event.preventDefault();
    const date = $('#date').val();
    nasa(date)
});

