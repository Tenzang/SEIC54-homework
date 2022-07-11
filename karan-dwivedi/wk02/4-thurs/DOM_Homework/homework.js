// console.log("warmup");

// // Review of JS callbacks

// //  textAFriend("Girl Develop It", sayHello);


// const sayHello = function(name){
//     console.log(`Hey ${name} how are ya`)
// }

// sayHello('Grace');

// // //call the function with an anonymous callback function


// const sayHello2 = function(){
//     console.log()
// }


// preventing default events

// for egs default event for clicking on a link is to go on a new page

// step one you select all the a tags, set up the on function and event(click in this case) , the function

// $('a').on('click',function(event){
// event.preventDefault();
// console.log("not going there");
// });
// when gthe click (event) happens you must prevent default and console . log 
// $ ('a').on('click',function(event){
// event.preventDefault();
// console.log("Bruuuh");
// }
// );


//   $('button').click(function() {
//     $('.bill').fadeOut();
//   });
  


const a = $('a');

// console.log(a);



$('a').on('click',function(event)
{ event.preventDefault();
    const href = $(this).attr('href');
    const thumbNail = youtube.generateThumbnailUrl(href);
    $('<img>').attr('src',thumbNail).appendTo(`#player`);
})








// const linkFunc = function(event){
//     for(let i=0;i<event.length;i++);{
// const links = event.length[i];
// const $links = $(links);
// console.log ($links);// this = events.length[i];
// // const hrefIndex = $links.attr(href);
// console.log(hrefIndex);

// const allLinksHref = $($links).attr('href');
// console.log (allLinksHref);
// // const $youtubeThumbNail = youtube.generateThumbnailUrl()
// // const youtubeThumbNail = youtube.generateThumbnailUrl(href)

// // console.log (youtubeThumbNail);

// }
// }

// linkFunc(a);
