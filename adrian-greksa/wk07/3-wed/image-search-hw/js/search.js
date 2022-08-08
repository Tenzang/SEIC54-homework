const searchFlickr = function (keywords, pageNum=1) {
    console.log('Searching for', keywords, 'On page: ', pageNum);

    canLoad = false;
    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1, // please don't be bored enough to read up on this
        page: pageNum
    }).done(showImages).done(function() {
        canLoad = true;
    });
};

const showImages = function (results) {
    _(results.photos.photo).each(function (photo) {
        const thumbnail = generateURL(photo);
        const $img = $('<img>', {src: thumbnail});
        $('#images').append($img)
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
        '_q.jpg' // change 'q' to something else for different sizes (see documentation)
    ].join('');
}

$(document).ready(function () {
    let pageNum = 1;
    let canLoad = true;

    $('#search').on('submit', function (event) {
        event.preventDefault(); 
        
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });

    $(window).on('scroll', function () {
        console.log('scrolling!')
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (scrollBottom < 600 && canLoad) {
            pageNum++;
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms, pageNum);
        };
    });

});