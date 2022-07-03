const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.top = '200px;'
img.style.left = '0px';
const screenWidth = window.innerWidth;

const moveCatForwards = function () {
    const currentPosLeft = parseInt(img.style.left);
    let movePosLeft = currentPosLeft + 5;
    //let movePosBackwards = currentPosLeft - 5;

    img.style.left = movePosLeft + 'px';
    if(movePosLeft >= window.innerWidth) {
        clearInterval(catTimer);
        img.style.transform = 'rotateY(180deg)';
        setInterval(moveCatBackwards, 50);
    }
    //console.log(screenWidth);
};

const moveCatBackwards = function() {
    const currentPosBackwards = parseInt(img.style.left);
    let movePosBackwards = currentPosBackwards - 5; 

    img.style.left = movePosBackwards + 'px';
}



const catTimer = setInterval(moveCatForwards, 50);
//setInterval(moveCatBackwards, 50);