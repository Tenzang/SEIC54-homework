const state = {
    page: 1,
    lastPageReached: false,
    requestInProgress: false
};

const searchFlickr = function(keywords){

    if (state.lastPageReached || state.requestInProgress) return // If either of these return true this function will not run 

    console.log('Searching for', keywords)
    
    const flickrURL = 'https://api.flickr.com/services/rest';

    state.requestInProgress = true; // If it makes it to this stage , then request in progress is set
    //to true

    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084' ,
        page: state.page,
        text: keywords ,
        format: 'json',
        nojsoncallback: 1
    }).done(showImages).done(function (response) {
        console.log(response)
    if( response.photos.page >= response.photos.pages){
        state.lastPageReached = true
    }

    state.requestInProgress = false; // After the request is run , request in progress is set to 
    //false , and is ready for the next time the function is called  
})};




const showImages = function(results){
    _(results.photos.photo).each(function (photo){
        const thumbail = generateURL(photo)
        const $img = $('<img>', {src: thumbail});
        $('#images').append($img)
    });
};

const generateURL = function(p){
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

// let throttled = _.throttle(updatePosition, 100);
// window.innerHeight + window.scrollY >= scrollBottom


$(document).ready(function (){
/////////////////
    $('#search').on('submit', function(event){
        event.preventDefault()

        $('#images').html('') //OR// $('#images').empty(')
        const searchTerms = $('#query').val();
        searchFlickr(searchTerms);
    
    })
////////////////
const relaxedSearchFlickr = _.debounce(searchFlickr, 5000, true) // true: leading page (dont wait to run4)


///////////////
    $(window).on('scroll', function(results){
       const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop()
            if (scrollBottom < 600){
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms)
            state.page++
            }
    })
})