$(document).ready(function (){


    let countryList = $('.countries');

    const getCountryInfo = function (country) {
        $.ajax('https://restcountries.com/v3.1/name/' + country).done(function (data) {
            console.log(data[0].name.official);
            const html = `<artical class="country">
            <img class="country_img" src="${data[0].flag}" />
            <div class="country_data">
                <h3 class="country_name">${data[0].name.official}</h3>
                <h4 class="country_region">${data.region}</h4> 
                <p class="country_row"><span>ds</span>${data.population}</p>
                <p class="country_row"><span>ds</span>${data.languages}</p>
        
            </div>
            </artical>`;
            countryList.append(html);
        });
    };
    $('#search').on('submit', function (event) {
        event.preventDefault();
    
        const title = $('#title').val();
        getCountryInfo(title);
    });
    
});
