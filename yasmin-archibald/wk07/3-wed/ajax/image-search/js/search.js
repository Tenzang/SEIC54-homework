let page = 1;
const searchFlickr = function (keywords) {
  console.log("Searching for", keywords);
  page += 1;
  const flickrURL = "https://api.flickr.com/services/rest";
  $.getJSON(flickrURL, {
    method: "flickr.photos.search",
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    text: keywords,
    format: "json",
    per_page: 40,
    page,
    nojsoncallback: 1, // please don't be bored enough to read up this
  })
    .done(showImages) // pagenation ??
    .done(function (response) {
      console.log(response.photos, "yasmin look here");
    });
};

const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    const thumbnail = generateURL(photo);
    console.log(thumbnail);
    const $img = $("<img>", { src: thumbnail }); // you can make stuff with a class like that too {class: classname}
    $("#images").append($img);
  });
};

const generateURL = function (p) {
  return [
    "http://farm",
    p.farm,
    ".static.flickr.com/",
    p.server,
    "/",
    p.id,
    "_",
    p.secret,
    "_q.jpg", // change 'q' to something else for different sizes (see documentation)
  ].join("");
};

$(document).ready(function () {
  $("#search").one("submit", function (event) {
    event.preventDefault();

    const searchTerms = $("#query").val();
    searchFlickr(searchTerms);
  });
  const scroll = function () {
    $(window).one("scroll", function () {
      const scrollBottom =
        $(document).height() - $(window).height() - $(window).scrollTop();
      if (scrollBottom < 600) {
        const searchTerms = $("#query").val();
        searchFlickr(searchTerms);
      }
    });
    setTimeout(scroll, 3000);
  };
  scroll();
});
