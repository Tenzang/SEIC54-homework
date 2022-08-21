const fetchInfo = function (){
    $.ajax('http://api.open-notify.org/iss-now.json').done(function(data) {
        $('#fetch').after(`<p> current timestamp ${data.timestamp}</p>`)
        $('#fetch').after(`<p> current message ${data.message}</p>`)
        $('#fetch').after(`<p> current latitude${data.iss_position.latitude}</p>`)
        $('#fetch').after(`<p> current longitude ${data.iss_position.longitude}</p>`)
    });
};

const obtainInfo = function (){
    $.ajax('http://api.open-notify.org/astros.json').done(function(data) {
        $('#obtain').after(`<p> The current amount of people on space is ${data.number}</p>`)
        for (i=0; i < data.people.length; i++){
         $('#obtain').after(`<p> name :${data.people[i].name} company: ${data.people[i].craft} </p>`);
         
        }
     });
};

$('#fetch').on('click', fetchInfo);
$('#obtain').on('click', obtainInfo);

//jQuery methods.
