const searchFlickr = function (keywords, pageNo) {
    console.log('searching for', keywords);
    
    const flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1,
        page: pageNo,
        per_page: 20,
    }).done(showImages).done(function (response){
        console.log(response)
    });
};

const showImages = function (results) {
    _(results.photos.photo).each(function (photo) {
        const thumbnail = generateURL(photo);
        const $img = $('<img>', {src: thumbnail});
        $('#images').append($img);
    });
};

const generateURL = function (p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg'//change q to something else for size
    ].join('');
}

$(document).ready(function() {
    let pageNo = 1
    $('#search').on('submit', function(event){
        event.preventDefault();
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms, pageNo);
    });

    $(window).on('scroll', function () {
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 600) {
            const searchTerm = $('#query').val();
            searchFlickr(searchTerm, pageNo+1 );
        }
    });
});

