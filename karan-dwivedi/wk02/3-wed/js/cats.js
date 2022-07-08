
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

const img1 = document.getElementsByTagName('img')[1];
img1.style.zIndex=1;
img1.style.position = 'absolute';
img1.style.left = '0px';
img1.style.marginTop = '600px';
img1.style.width = '200px';
const makeCatMove1 = function(){
    var oldRight = parseInt(img1.style.left);
    var newRight = oldRight + 7;
    img1.style.left = newRight + 'px';
}


setInterval(makeCatMove1,100);

const whiteHouse = document.getElementsByTagName('img')[3];

whiteHouse.style.zIndex = -5;
whiteHouse.style.width = "1450px";


// $('button').click(function){
//     $('.kitty');
//     }

// const img = document.getElementsByTagName('img')[0];
// img.style.position = 'absolute';
// img.style.top = '0px';
// const watchBillFall = function() {
//   var oldTop = parseInt(img.style.top);
//   var newTop = oldTop + 1;
//   img.style.top = newTop + 'px';
// };
// setInterval(watchBillFall, 5);

