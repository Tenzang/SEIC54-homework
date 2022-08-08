const beautifulImage = function () {
    $.ajax("https://api.nasa.gov/planetary/apod?api_key=ZCJEhiXYm9T69pxcLZJxOvwhNVA7diTZhJbuGjKd").done(function (data) {
        const title = data.title;
        const picture = data.url;
        const info = data.explanation;
        $("#title").html(title);
        $("#image").attr("src", picture);
        $("#description").html(info);
    });
};

$("#button").on("click", beautifulImage);

const randomFacts = function () {
    const limit = $(`#factsAmount`).val();
    $.ajax({
        method: "GET",
        url: "https://api.api-ninjas.com/v1/facts?limit=" + limit,
        headers: { "X-Api-Key": "P6HbU6FOC20yEWLsWX10iw==w8M7VCnzetOzbMzm" },
        contentType: "application/json",
        success: function (result) {
            if (limit < 2) {
                $(`#random1`).text(result[0].fact);
                console.log(result[0].fact);
            } else if (limit === 2) {
                $(`#random1`).text(result[0].fact);
                $(`#random2`).text(result[1].fact);
                console.log(result[0].fact);
                console.log(result[1].fact);
            } else {
                $(`#random1`).text(result[0].fact);
                $(`#random2`).text(result[1].fact);
                $(`#random3`).text(result[2].fact);
                console.log(result[0].fact);
                console.log(result[1].fact);
                console.log(result[2].fact);
            }
        },
        error: function ajaxError(jqXHR) {
            console.error("Error: ", jqXHR.responseText);
        },
    });
};

$("#factsForm").submit(function (event) {
    randomFacts();
    event.preventDefault();
});

// $('#button2').on('click', randomFacts)
