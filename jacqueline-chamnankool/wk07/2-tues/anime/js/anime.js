const handleSubmit = function () {
    const title = $("#title").val().toLowerCase();
    $.ajax(`https://anime-facts-rest-api.herokuapp.com/api/v1/${title}`).done(function (data) {
        const randomIndex = Math.floor(Math.random() * data.data.length+1);
        $("body").append(`<h3>${ data.data[randomIndex].fact }</h3>`);
    });
};