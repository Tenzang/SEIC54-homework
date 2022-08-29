


//move golobal variable into thier namespace

 const state ={
    lastPageReached : false,
     page: 1 ,//flag
     requestInProgress: false
 }

const searchFlickr = function (keywords) {
    if(state.lastPageReached || state.requestInProgress){
        return;
    }
    console.log('Searching for', keywords);
    
    const flickrURL = 'https://api.flickr.com/services/rest';
    state.requestInProgress = true;
    $.getJSON(flickrURL, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: keywords,
        format: 'json',
        page: state.page++,
        nojsoncallback: 1// please don't be bored enough to read up this ??
        
    }).done(showImages).done(function (response) { // response the request
        console.log(response);
        if(response.photos.page >= response.photos.pages){
            state.lastPageReached = true;
        }
        state.requestInProgress = false;
    });
   
};

const showImages = function (results) {
    _(results.photos.photo).each(function (photo) {
        //generate the thumbnail for url
        const thumbnail = generateURL(photo);
        //console.log(thumbnail);
          
        // display the thumbnail
        const $img = $(`<img>`, {src: thumbnail});
        $(`#images`).append($img)
    });
};

const generateURL = function (p) {
    return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',  //we make  url for every images
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

        //$('#images').html('');
        $('#images').empty();
        state.currenPage = 1;
        state.lastPageReached = false;


        const searchTerms = $('#query').val();       //when we search find the value of that(find the words)
        searchFlickr(searchTerms); //??
    });
    $(window).on('scroll', function () {
        // calculate the scrollBottom (how close we are to the end of the document)
        const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        console.log(scrollBottom);
    
        if (scrollBottom < 600) {
            const searchTerms = $('#query').val();
            searchFlickr(searchTerms);
            //page++;
        }
    
    
    });
    
    
});






























