let cat = document.getElementById("cat");
const isMovingLeft = true;
const maxWidth = window.innerWidth -296;
var catRight;
let newLeft = 0;

const catWalk = function() {
    const oldLeft = parseInt(cat.style.left);
    newLeft += 5;
    cat.style.left = newLeft + 'px';

    if(parseInt(cat.style.left) >= maxWidth)
{
    cat.style.transform = "scaleX(-1)";
    catRight = setInterval(walkBack,100);
    clearInterval(animate);
};
};

setInterval(catWalk, 50);


var walkBack = function() {
    newLeft = newLeft - 10;
    cat.style.left = newleft + 'px';
      if(parseInt(cat.style.left) === 0){
        clearInterval(catRight);
      }
};