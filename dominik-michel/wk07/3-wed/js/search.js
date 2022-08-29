let page = 1;


const searchFlickr = function (keywords) {
    console.log('Searching for', keywords);

    const flickrURL = 'https://api.flickr.com/services/rest';

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        nojsoncallback: 1, // please don't be bored enough to read up this
        page: page,
        per_page: 100
    }).done(showImages).done(function (response) {
        console.log(response);
    });
};

const showImages = function (results) {
    _(results.photos.photo).each(function (photo) {
        const thumbnail = generateURL(photo);
        console.log(thumbnail);
        // display the thumbnail
        const img= $('<img>', {src: thumbnail});
        $('#images').append(img);
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
        
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
        $('#images').html('')
    });
    
    $(window).on('scroll',_.throttle(function(){
        //calculate scrollbottom (how close we are to the end of the document)
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        console.log(scrollBottom)

                if (scrollBottom < 600){
                    const searchTerms = $('#query').val();
                    searchFlickr(searchTerms);
                    page++
                    if(results.photos.pages == page){
                        Image.removeEventListener('scroll', searchFlickr)
                    }
                    
                }
            // })     
    },2000))
});
// # AJAX Flickr Lab



// - Don't request more images when you reach the last "page" of Flickr results




// - **Prevent your code from making too many requests**: only one at a time, please
// - Support infinite scroll to show all results from Flickr (eventually, after a lot of scrolling).
// - Make sure you go back to the first page when searching for a new term!




// - Make it beautiful
// - Add other features as you see fit
// - Bonus: display larger images in an attractive slideshow
// - Bonus: add links back to each image's own page on Flickr.com