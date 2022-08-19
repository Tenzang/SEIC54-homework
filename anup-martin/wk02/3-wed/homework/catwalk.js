

const catImage = document.getElementById('cat');
catImage.style.left = '0px';
catImage.style.bottom = '0px';
catImage.style.right = '4px';

const CatWalk = function () {
    let oldPosLeft = parseInt(catImage.style.left);
    let oldPosTop = parseInt(catImage.style.top);
    let newPosLeft = oldPosLeft + 5;
    let newPosTop = oldPosTop + 1;

    if (parseInt(catImage.style.right) > 1000) {
        window.clearInterval(intervalID);
    }

    catImage.style.left = newPosLeft + 'px';
    catImage.style.top = newPosTop + 'px';
}

setInterval(CatWalk, 80);
