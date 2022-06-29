const cat = document.getElementsByTagName('img')[0];
cat.style.position = 'absolute';
cat.style.left = '0px';
cat.style.bottom = '0px';
cat.style.width = '150px';
cat.style.opacit = 1.0;

let thirdTimerId = undefined;

const catWalk = function (){
    const oldLeft = parseInt(cat.style.left);
    const newLeft = oldLeft + 1;
    cat.style.left = newLeft + 'px';
    if (cat.style.left === '800px') {
        clearInterval(timerID);
        thirdTimerId = setInterval(catUFOAbduct, 20);
    }
};
const timerID = setInterval(catWalk, 25);

const ufo = document.getElementById('ufo');
ufo.style.position = 'absolute';
ufo.style.left = '-4500px';
ufo.style.top = '0px';
ufo.style.width = '800px'

const ufoFly = function (){
    const oldLeft = parseInt(ufo.style.left);
    const newLeft = oldLeft + 1;
    ufo.style.left = newLeft + 'px';
    if (ufo.style.left === '483px') {
        clearInterval(secondTimerId);
    }
};
const secondTimerId = setInterval(ufoFly, 1);

const ufoBeamAppear = function (){
    document.getElementById('ufo-beam').style.visibility = 'visible';
}
setTimeout(ufoBeamAppear, 20000);

const img = document.getElementsByTagName('img')[0]; 
img.style.opacity = 1.0;


const catUFOAbduct = function (){
    const oldBottom = parseInt(cat.style.bottom);
    const newBottom = oldBottom + 1;
    cat.style.bottom = newBottom + 'px';
    setInterval(function() {
        img.style.opacity = img.style.opacity - 0.005;
    }, 5000);
    let deg = 0;
    setInterval(function() {
        cat.style.transform = 'rotate(' + deg + 'deg)';
        deg -= 2;
    }, 200); 
    if (cat.style.bottom === '560px') {
        clearInterval(thirdTimerId);
    } 
};

const fadeAway = function() {
    cat.style.opacity = cat.style.opacity - 0.005;
};
  