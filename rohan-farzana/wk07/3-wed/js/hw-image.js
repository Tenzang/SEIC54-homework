const state = {
    currentPage: 1, 
    lastPageReached: false,
};

const searchFlickr = function(keywords){

    if(state.lastPageReached) return;

    console.log('searching for', keywords);


    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: state.currentPage++, 
        nojsoncallback: 1
    }).done(showImages).done(function(response){
        console.log(response);
        if (response.photos.page >= response.photos.pages){
            state.lastPageReached = true;
        }
    });
};
const showImages = function(results){
    _(results.photos.photo).each(function(photo){
        const thumbnail = generateURL(photo);
        const $img = $('<img>', {src: thumbnail});
        $('.images').append($img);
    });
};

const generateURL = function (p){
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg'
    ].join('');
};


$(document).ready(function(){
    $('#search').on('submit', function(event){
        event.preventDefault();

        $('#image').empty();
        state.currentPage = 1;
        state.lastPageReached = false;

        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });

    const relaxedSearchFlickr = _.debounce(searchFlickr, 4000, true);

    $(window).on('scroll', function(){
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 600){
            const searchTerms = $('#query').val();
            relaxedSearchFlickr(searchTerms);
        }
    });
});