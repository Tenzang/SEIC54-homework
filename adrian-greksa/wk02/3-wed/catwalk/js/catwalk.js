// # Exercises: Animation

// ## The Cat Walk

// Who needs Milan when you have JavaScript?
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah! 
//////////////////////////////////ANSWER///////////////////////////////////////////////////

// const body = document.body;
// body.width = '100%';
// body.height = '100%';
// body.margin = '0';
// body.padding = '0';
// body.backgroundColor = 'green';

// const container = document.getElementById('container');
// container.width = 'inherit';
// container.height = 'inherit';
// container.margin = '0';
// container.padding = '0';
// container.backgroundColor = 'pink';
// FOR CAT 1
const catImage1 = document.getElementById('cat1');
catImage1.style.left = '0px';
catImage1.style.top = '0px';
catImage1.backgroundColor = 'red';
catImage1.style.right = '4px';

const watchCat1Walk = function () {
    let oldPosLeft = parseInt(catImage1.style.left);
    let oldPosTop = parseInt(catImage1.style.top);
    let newPosLeft = oldPosLeft + 5;
    let newPosTop = oldPosTop + 1;

    if (parseInt(catImage1.style.right) > 1000) {
        window.clearInterval(intervalID);
    }

    catImage1.style.left = newPosLeft + 'px';
    catImage1.style.top = newPosTop + 'px';
}

setInterval(watchCat1Walk, 20);

// FOR CAT 2
const catImage2 = document.getElementById('cat2');
catImage2.style.left = '0px';
catImage2.style.top = '0px';

const watchCat2Walk = function () {
    let oldPosLeft = parseInt(catImage2.style.left);
    let oldPosTop = parseInt(catImage2.style.top);
    let newPosLeft = oldPosLeft + 5;
    let newPosTop = oldPosTop + 1;

    if (parseInt(catImage2.style.right) === 1000 ) {
        clearInterval(intervalID);
        catImage2.style.
        catImage2.style.transform = scaleX(-1);
    }
    
    catImage2.style.left = newPosLeft + 'px';
    catImage2.style.top = newPosTop + 'px';
}

const intervalID = setInterval(watchCat2Walk, 200);

// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever. 

// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever. 

// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// - Bonus #4: Pretty much go nuts or whatever.