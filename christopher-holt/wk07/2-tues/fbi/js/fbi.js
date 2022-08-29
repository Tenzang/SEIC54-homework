const fetchFBIName = function () {
    $.ajax('https://api.fbi.gov/wanted/v1/list').done(function (data) {
        //console.log(data.items[0].images[1].original); Images for someone
        //console.log(data.items[0].aliases[0]); Name of a man
        //console.log(data.items[0].description); description
        //console.log(data.total);

        const cover = data.items[2].images[0].original;
        $('#picture1').attr('src', cover);        
        $('#submit').after(`<p id"description"> Description: ${ data.items[2].description }</p`);
        $('#submit').after(`<p id"alias"> Reward: ${ data.items[2].reward_text }</p`);
        $('#submit').after(`<p id"alias"> Alias: ${ data.items[2].aliases[0] }</p`);

        const coverTwo = data.items[1].images[0].original;
        $('#picture2').attr('src', coverTwo);    
        $('#submit').after(`<p id"description"> Description: ${ data.items[1].description }</p`);
        $('#submit').after(`<p id"reward_text"> Reward: ${ data.items[1].reward_text }</p`);
        $('#submit').after(`<p id"alias"> Alias: ${ data.items[1].aliases }</p`);

        const coverThree = data.items[3].images[0].original;
        $('#picture3').attr('src', coverThree);    
        $('#submit').after(`<p id"description"> Description: ${ data.items[3].description }</p`);
        $('#submit').after(`<p id"alias"> Reward: ${ data.items[3].reward_text }</p`);
        $('#submit').after(`<p id"alias"> Alias: ${ data.items[3].aliases[0] }</p`);
    });
}

//$('#search').on('click', function (fetchFBIName) {})
fetchFBIName();

//https://api.fbi.gov/wanted/v1/list