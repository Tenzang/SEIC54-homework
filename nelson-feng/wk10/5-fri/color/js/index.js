$( document ).ready(() => {
    
    // const $canvas = $("#colorCanvas"); //this not the element but an object
    // const colorContext = $canvas[0].getContext('2d'); //This allows 2D context for canvas tag

    // //creating vertical gradient (white to black)
    // let vGradient = colorContext.createLinearGradient(0,0,0,300);
    // vGradient.addColorStop(0, 'rgba(0,0,0,0)');
    // vGradient.addColorStop(1, '#000');
    // colorContext.fillStyle = vGradient;
    // colorContext.fillRect(0, 0, colorContext.canvas.width, colorContext.canvas.height);

    // //horizontal gradient
    // let color = '#0000ff';
    // let hGradient = colorContext.createLinearGradient(0, 0, colorContext.canvas.width,0);
    // hGradient.addColorStop(0,'#fff');
    // hGradient.addColorStop(1, color);
    // colorContext.fillStyle = hGradient;
    // colorContext.fillRect(0, 0, colorContext.canvas.width, colorContext.canvas.height);


    // $canvas.click((event) => {
    //     let x = event.clientX;
    //     let y = event.clientY;
    //     pixel = colorContext.getImageData(x,y,1,1)['data'];
    //     rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
    //     document.body.style.background = rgb;
    // })



    var colorCanvas = document.getElementById('colorCanvas');
var ColorCtx = colorCanvas .getContext('2d');  // This create a 2D context for the canvas

var color = 'rgba(0,0,255,1)';
let gradientH = ColorCtx .createLinearGradient(0, 0, ColorCtx .canvas.width, 0);
gradientH.addColorStop(0, '#fff');
gradientH.addColorStop(1, color);
ColorCtx .fillStyle = gradientH;
ColorCtx .fillRect(0, 0, ColorCtx .canvas.width, ColorCtx .canvas.height);


// Create a Vertical Gradient(white to black)
 let gradientV = ColorCtx .createLinearGradient(0, 0, 0, 300);
 gradientV.addColorStop(0, 'rgba(0,0,0,0)');
 gradientV.addColorStop(1, '#000');
 ColorCtx .fillStyle = gradientV;
 ColorCtx .fillRect(0, 0, ColorCtx .canvas.width, 
 ColorCtx .canvas.height);


 colorCanvas.addEventListener('click',function(event){
    let x = event.clientX;  // Get X coordinate
    let y = event.clientY;  // Get Y coordinate
    pixel = ColorCtx.getImageData(x,y,1,1)['data'];   // Read pixel Color
    rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`;
    document.body.style.background = rgb;    // Set this color to body of the document
 });

 
});
