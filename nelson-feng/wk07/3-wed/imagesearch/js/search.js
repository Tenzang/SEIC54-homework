const globals = {
    pageNumber: 1,
    onLastPage: false,
};


const searchFlickr = function (keywords) {
    if (globals.onLastPage){
        $('#endMessage').text("End of Images")
        return;
    };
    console.log(globals.pageNumber);
    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';
        $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: globals.pageNumber++,
        nojsoncallback: 1 // please don't be bored enough to read up this
    }).done(showImages).done(function (response) {
        console.log(response)
        if (globals.pageNumber > response.photos.pages){
            globals.onLastPage = true;
        };
    });
};
const searchFlickrOnce = _.throttle(searchFlickr, 2000); // STOPS numerous API calls due to scrolling, it is essential to be here due to scope

const showImages = function (results) {
    _(results.photos.photo).each(function (photo) {
        const thumbnail = generateURL(photo);
        const $img = $('<img>', {src: thumbnail});
        $('#images').append($img);
        // display the thumbnail
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
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault(); // disable the form from being submitted to a server.

        $('#images').empty(); // EMPTIES PAGES
        globals.onLastPage = false;
        globals.pageNumber = 1;
        $('#endMessage').text("")

        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });

    $(window).on('scroll', function () {
        //calculate the scroll bottom (how close we are to the end of the document)
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        // if (scrollBottom < 600)
            //searchFlickr again for more photos
        if (scrollBottom < 600){
            const searchTerms = $('#query').val();
            searchFlickrOnce(searchTerms); // used _.throttle
            }
    });
});

