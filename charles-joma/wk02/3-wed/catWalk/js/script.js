const img = document.querySelector('img');
img.style.position = 'absolute';
img.style.top = '300px';
img.style.left = '0px';
img.style.right = '0px';





const walkForward = function(){
        let oldLeft = parseInt(img.style.left);
        let newLeft = oldLeft + 10
        img.style.left = newLeft + 'px';
    if(img.style.left === '1200px'){
        img.style.transform = 'rotateY(180deg)';
        setInterval(walkRight, 10/ 6);
        clearInterval(setIntervalId)
    } 
}

const walkRight = function(){
    const flipped = parseInt(img.style.left) - 1
    img.style.left = flipped + 'px'
    if(img.style.right === '1000px'){
        img.style.transform = 'rotateY(180deg)';
    }
}

const setIntervalId = setInterval(walkForward, 1/6)






