$(document).ready(function () {
  //now I can put scripts in the head

  $("title").text("jQuery");
  $("body").append("<h1>#1 jQuery Fan</h1>");
  $("body").append("<h2>small heading</h2>");
  $("body").append(`<img src="images/fan1.jpeg"></img>`);
  $("body").wrap("<div class = 'container'></div>");
  $("body").css("background-color", "pink");
  $(".container").css("display", "inline-block");
  $(".container").css("max-width", "950px");
  $("h1").funText(33, "candy");
  $("h2").funText(33, "candy");
  //trying to make a button which will allow the background-color to change;
  $("body").append("<button> Change Color </button>");
  $("button").css("display", "block");
  $("button").wrap("<div class = 'vertical-container'");
  $(".vertical-container").wrap("<div class = 'button-container'></div>");
});
