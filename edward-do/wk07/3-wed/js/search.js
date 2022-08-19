// move global variables into their namespace
const state = {
    currentPage: 1,
    lastPageReached: false,
    requestInProgress: false
};

const searchFlickr = function (keywords) {

    if (state.lastPageReached || state.requestInProgress) return;

    console.log('Searching for', keywords);

    // get the data 
    const flickrURL = 'https://api.flickr.com/services/rest';

    state.requestInProgress = true;
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: 'secrit',
        text: keywords,
        format: 'json',
        page: state.currentPage++,
        nojsoncallback: 1 // please don't be bored enough to read up this
    }).done(showImages).done(function (response) {
        console.log(response);
        if (response.photos.page >= response.photos.pages) {
            state.lastPageReached = true;
        }
        state.requestInProgress = false;
    });
    // show the data
};

const showImages = function (results) {
    _(results.photos.photo).each(function (photo) {
        // generate a thumbnail
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

        $('#images').empty();
        state.currentPage = 1;
        state.lastPageReached = false;

        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    });

    // Higher Order Function
    const relaxedSearchFlickr = _.debounce(searchFlickr, 2000, true); // true: leading edge (don't wait to run)

    $(window).on('scroll', function () {
        // calculate the scrollBottom (how close we are to the end of the document)
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        // console.log(scrollBottom);
        // if (scrollBottom < 600)
            // searchFlickr again for more photos
        if (scrollBottom < 600) {
            const searchTerms = $('#query').val();
            relaxedSearchFlickr(searchTerms);
        };
    });
});