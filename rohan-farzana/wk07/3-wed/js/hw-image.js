const searchFlickr = function(keywords){
    console.log('searching for', keywords);


    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1
    }).done(showImages).done(function(response){
        console.log(response);
    });
};
const showImages = function(results){
    _(results.photos.photo).each(function(photo){
        const thumbnail = generateURL(photo);
        const $img = $('<img>', {src: thumbnail});
        $('.images').append($img);
    });
};

const generateURL = function(p){
    return [
        p.farm,
        p.server,
        p.id,
        p.secret,
    ].join('');
};

$(document).ready(function(){
    $('#search').on('submit', function(event){
        event.preventDefalut();

        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });
    $(window).on('scroll', function(){
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 600){
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms);
        }
    });
});