const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';

const catwalk = function () {
    if (img.style.left < '950px') {
        const oldLeft = parseInt(img.style.left);
        const newLeft = oldLeft + 30;
        img.style.left = newLeft + 'px';
    } else {
        img.style.left = '0px';
    }
    
};

window.setInterval(catwalk, 200);


