const weather = function(suburb){
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?q=${suburb}&appid=3dce11a4cdfce5ca5071cbc1102e268e`).done(function(data){
        
         const day = data.main.temp
        $('#day').after(`<p>${day}</p>`)
    });
};
$('#search').on('submit', function(event){
    event.preventDefault();
    const date = $('#suburb').val();
    weather(date)
});

//3dce11a4cdfce5ca5071cbc1102e268e