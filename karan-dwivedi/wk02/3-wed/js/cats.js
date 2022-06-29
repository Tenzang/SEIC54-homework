
// const ogCat = document.getElementsByClassName('ogcat');
console.log("cats");


const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
const makeCatMove = function(){
    var oldRight = parseInt(img.style.left);
    var newRight = oldRight + 10;
    img.style.left = newRight + 'px';
}


setInterval(makeCatMove,100);



// const img = document.getElementsByTagName('img')[0];
// img.style.position = 'absolute';
// img.style.top = '0px';
// const watchBillFall = function() {
//   var oldTop = parseInt(img.style.top);
//   var newTop = oldTop + 1;
//   img.style.top = newTop + 'px';
// };
// setInterval(watchBillFall, 5);

