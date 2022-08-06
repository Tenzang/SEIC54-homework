let pageNumber = 1;
let scrolled = 0;

const searchFlickr = function(keywords) {
    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        page: pageNumber, // be able to change the page number as you scroll
        format: 'json',
        nojsoncallback: 1 // please dont be bored enough to read up on this
    }).done(showImages).done(function (response) {
        console.log(response);
    });
    

};

const showImages = function(results) {
    _(results.photos.photo).each(function (photo) {
        // generate a thumbnail
        // display the thumbnail
        const thumbnail = generateURL(photo);
        //console.log(thumbnail);
        const $img = $('<img>', {src: thumbnail, class: 'image'});
        $('#images').append($img);
        scrolled = 0;
    });
    //results.photos.page += 1;
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
        '_q.jpg' // change q to something else for different sizes (HELP FOR HOMEWORK TONIGHT) (see documentation)
    ].join('');
};

$(document).ready(function () {
    $('#search').on('submit', function (event) {
        event.preventDefault(); // disables the form from being submitted to a server
        
        const searchTerms = $('#query').val();
        $('#images').empty();
        pageNumber = 1;
        searchFlickr(searchTerms);
    });

    $(window).on('scroll', function() {
        // calculate the scrollBottom (how close we are to the end of the document)
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        console.log(scrollBottom);
        if (scrollBottom < 600) {
            if (scrolled === 0) {
                const searchTerm = $('#query').val();
                pageNumber += 1;
                searchFlickr(searchTerm); 
                scrolled = 1;
            }
        }
            // searchFlickr again for more photos
    })
});