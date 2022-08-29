let pageNum = 1;
let stopRequests = false;

const searchFlickr = function (keywords) {
  const flickrURL = "https://api.flickr.com/services/rest";

  $.getJSON(flickrURL, {
    // url, settings
    method: "flickr.photos.search",
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    text: keywords,
    format: "json",
    nojsoncallback: 1,
    page: pageNum,
    per_page: 100,
  })
    .done(showImages)
    .done(function (response) {
      console.log(response);
    });
};

const showImages = function (response) {
  _(response.photos.photo).each(function (p) {
    // generate thumbnail
    const thumbnail = generateURL(p);
    // display thumbnail
    const $img = $("<img>", { src: thumbnail });
    $(".images").append($img);
  });

  if (pageNum === response.photos.pages) {
    $(".images").append("<h2>End of results reached.</h2>");
    stopRequests = true;
  }
};

const generateURL = function (photo) {
  return [
    "http://farm",
    photo.farm,
    ".static.flickr.com/",
    photo.server,
    "/",
    photo.id,
    "_",
    photo.secret,
    "_q.jpg", // can change "q" to something else for different sizes (see documentation)
  ].join("");
};

$(document).ready(function () {
  $("#search").on("submit", function (event) {
    event.preventDefault(); // disables the form from being submitted to a server
    pageNum = 1;
    stopRequests = false;
    $(".images").empty();
    const searchTerms = $("#query").val();
    searchFlickr(searchTerms);
  });

  $(window).on("scroll", function () {
    // calculate the scrollBottom = documentHeight - scrollTop - windowHeight
    //const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (
      $(document).height() - $(this).height() === $(this).scrollTop() &&
      !stopRequests
    ) {
      pageNum++;
      console.log(pageNum);
      let searchTerm = $("#query").val();
      searchFlickr(searchTerm);
    }
  });
});