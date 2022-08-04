const fetchAstronauts = function (nasa) {
    let astronaut = [];
    $.ajax('http://api.open-notify.org/astros.json').done(function (data) {
        for (let i=0; i<data.people.length; i++) {
       astronaut.push(data.people[i].name);
        };
        $('p').append(astronaut.join(", "));
    });
};

$('#title').on('click', function (event) {
    fetchAstronauts();
});