const cat = document.getElementsByTagName('img')[0];
cat.style.position = 'absolute';
cat.style.left = '0px';
cat.style.bottom = '20px';
cat.style.width = '150px';
cat.style.opacity = 1.0;

const ufo = document.getElementById('ufo');
ufo.style.position = 'absolute';
ufo.style.left = '-4500px';
ufo.style.bottom = '475px';
ufo.style.width = '800px';
ufo.style.zIndex = 100;

let thirdTimerId = undefined;
let fourthTimerId = undefined;
let fifthTimerId = undefined;
let sixthTimerId = undefined;
let seventhTimerId = undefined;
let eigthTimerId = undefined;

const catWalk = function () {
    const oldLeft = parseInt(cat.style.left);
    const newLeft = oldLeft + 1;
    cat.style.left = newLeft + 'px';
    if (cat.style.left === '800px') {
        clearInterval(timerID);
        thirdTimerId = setInterval(catUFOAbduct, 15);
        fourthTimerId = setInterval(fadeAway, 35);
        fifthTimerId = setInterval(rotateCat, 70);
        eigthTimerId = setInterval(catShrink, 200);
    }
};
const timerID = setInterval(catWalk, 25);

const catShrink = function () {
    const oldWidth = parseInt(cat.style.width);
    const newWidth = oldWidth - 2;
    cat.style.width = newWidth + 'px';
    const oldLeft = parseInt(cat.style.left);
    const newLeft = oldLeft + 1;
    cat.style.left = newLeft + 'px';
    if (cat.style.width === '1px') {
        clearInterval(eigthTimerId);
    }
};

const catUFOAbduct = function () {
    const oldBottom = parseInt(cat.style.bottom);
    const newBottom = oldBottom + 1;
    cat.style.bottom = newBottom + 'px';
    if (cat.style.bottom === '560px') {
        clearInterval(thirdTimerId);
    } 
};

const fadeAway = function () {
    cat.style.opacity = cat.style.opacity - 0.005;
    if (cat.style.bottom === '560px') {
        clearInterval(fourthTimerId);
    } 
};

let deg = 0;
const rotateCat = function () {
    cat.style.transform = 'rotate(' + deg + 'deg)';
    deg = (deg - 10) % 360;
    if (cat.style.bottom === '560px') {
        clearInterval(fifthTimerId);
        sixthTimerId = setInterval(ufoFlyAway, 5);
    } 
};

const ufoFly = function () {
    const oldLeft = parseInt(ufo.style.left);
    const newLeft = oldLeft + 1;
    ufo.style.left = newLeft + 'px';
    if (ufo.style.left === '483px') {
        clearInterval(secondTimerId);
    }
};
const secondTimerId = setInterval(ufoFly, 1);

const ufoFlyAway = function () {
    const oldUFOBottom = parseInt(ufo.style.bottom);
    const newUFOBottom = oldUFOBottom + 1;
    ufo.style.bottom = newUFOBottom + 'px';
    if (ufo.style.bottom === '2000px') {
        clearInterval(sixthTimerId);
    }
}

const ufoBeamAppear = function () {
    document.getElementById('ufo-beam').style.visibility = 'visible';
    if (cat.style.bottom === '560px') {
        document.getElementById('ufo-beam').style.visibility = 'hidden';
    } 
}
setTimeout(ufoBeamAppear, 20050);

const ufoBeamDisappear = function () {
    document.getElementById('ufo-beam').style.visibility = 'hidden';
}
setTimeout(ufoBeamDisappear, 27000);


