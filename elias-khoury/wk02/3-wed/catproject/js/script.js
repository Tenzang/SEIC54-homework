

const img = document.querySelector(`.catPic`);

img.style.left = `0px`;
img.style.top = `0px`;
img.style.width = `50%`

    const catWalk = function () {
        const oldTop = parseInt(img.style.top);
        const oldLeft = parseInt(img.style.left);
        const oldWidth = parseInt(img.style.width);
        const newLeft = oldLeft + 3;
        const newTop = oldTop + 1;
        const newWidth = oldWidth + 0.5;


        img.style.left = newLeft + `px`;
        img.style.top = newTop + `px`;     
        img.style.width = newTop + `px`;     

      
        if (newLeft > 400) {
            document.querySelector(`.homer`).style.visibility = `visible`;
        }
        if (newLeft > 600) {
            document.querySelector(`.homer2`).style.visibility = `visible`;
        }
        if (newLeft > 800) {
            document.querySelector(`.homer3`).style.visibility = `visible`;
        }
        if (newLeft > 1000) {
            document.querySelector(`.homer4`).style.visibility = `visible`;
        }
         if (newLeft >1500) {
            clearInterval(id);
        }
    };
    const id = setInterval(catWalk, 20);

    // setInterval(catWalk, 20);
    