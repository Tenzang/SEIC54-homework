let page = 1;

const searchFlickr = function(keywords) {
    console.log('search for', keywords);
    const flickrURL = 'https://api.flickr.com/services/rest';
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1, //please dont be bored enough to read up this
        page: page
    }).done(showImages).done(function(response){
        console.log(response);
    })
}

const showImages = function(results) {
    _(results.photos.photo).each(function(photo){
        //generate a thumbnail
        const thumbnail = generateURL(photo);
        //display the thumbnail
        const $img = $('<img>', {src: thumbnail})
        $('#images').append($img)
    }); 
};

const generateURL = function(p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' //change the q to something else for different sizes 
    ].join('');
}

$('#search').on('submit', function(event) {
    event.preventDefault(); //disables the form from being submitted to server
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
    $('#images').html('')
});

$(window).on('scroll', _.debounce(function() {
    // calculate the scrollBottom (how close we are to the end of the document)
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    console.log(scrollBottom)
    // if (scrollBottom < 600)
        // searchFlickr again for more photos
    if (scrollBottom < 600 ) {
        const searchTerms = $('#query').val();    
        searchFlickr(searchTerms);
        page++;
    }
}, 200));