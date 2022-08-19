
const cat = document.getElementsByTagName('img')[0];
console.log(cat);
cat.style.position = 'absolute';
cat.style.left = '0px';
const watchCatWalk = function () {
    cat.style.transform = 'scaleX(1)';
    const startPosition = parseInt(cat.style.left);
    const newPosition = startPosition + 1;
    cat.style.left = newPosition + 'px';
    if(cat.style.left === '1180px') {
        clearInterval(intervalId);
        setInterval(catWalkingLeft, 1);
    }
}

const intervalId = setInterval(watchCatWalk, 5);




