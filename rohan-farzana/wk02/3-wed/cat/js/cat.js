//Create a new Javascript file and link to it with a script tag at the bottom.

//Create a variable to store a reference to the img.

const catImage =document.getElementsByTagName('img')[0];

//Change the style of the img to have a "left" of "0px", 
//so that it starts at the left hand of the screens.

//Create a function called catWalk() that moves the cat 
//10 pixels to the right of where it started, by changing the "left" style property


    
    catImage.style.position = 'absolute'; 
    catImage.style.left = '0px';  

    const catWalk = function () {
        
        let startPosition = parseInt(catImage.style.left);
        let stopPosition = startPosition + 1; 
        catImage.style.left = stopPosition + 'px'; 

    }

    setInterval (catWalk, 10);

    catImage.style.position = 'absolute'; 
    catImage.style.right = '0px';  

    const revWalk = function () {
        
        let startPosition = parseInt(catImage.style.right);
        let stopPosition = startPosition + 1; 
        catImage.style.right = stopPosition + 'px';
        const finalWalk = catImage.style.right + joint(catWalk);
    }

    setInterval (revWalk,10)


