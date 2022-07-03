const img = document.querySelector("img");
const imgWidth = 300;
const windowEnd = window.innerWidth - imgWidth;

// let isWalkingRight = true;

//Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
img.style.left = "0px";

//Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
const catWalk = async function () {
    let oldPosition = parseInt(img.style.left);
    let newPosition = oldPosition;
    let atEnd = newPosition === windowEnd;
    let atBeginning = newPosition === 0;
    let atMiddle = newPosition === ((window.innerWidth / 2));
    //get the cat facing the right way, but can remove if you want it to move backwards
    //for bonus 1, can just set img.style.position = "0px"; when the end is reached
    if (atEnd) {
        img.style.transform = "scaleX(-1)";
        // isWalkingRight = false;
    } else if (atBeginning) {
        img.style.removeProperty("transform");
        //img.style.transform = "scaleX(1)";
        // isWalkingRight = true;
    }

    //LODEN LOOK AT THIS
    if (atMiddle) {
        // img.innerText = "lsdjfdsklfjdslkfjds";
        getHedgehogged();
        await delay(1000);
        img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
        // img.innerText = "test";
    }

    if (newPosition < windowEnd && !img.style.transform) { //if not walking right
        newPosition += 10;
        walk(newPosition);
    } else {
        newPosition -= 10;
        walk(newPosition);
    }
}

const walk = function (newPosition) {
    img.style.left = newPosition + "px";
};

const getHedgehogged = function () {
    img.src = "images/hedgehogchew.gif";
};

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

setInterval(catWalk, 5); //ms meant to be 50 but i made him run faster bc i am impatient

/*
    * apparently fucking with the "left" style property is fucking with my browser
    * while demo'ing my site, my call would just kill itself
    * "left" applies to only position:absolute things
    * when i test with my test div it seems ok (??)
    * also gif rendering is stinky
    * https://www.biphelps.com/blog/The-Fastest-GIF-Does-Not-Exist
*/