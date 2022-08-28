// $(document).ready(function(){
//     const maxHue = 360;
//     const $colorDiv = $('#color-picker');

//     // center most point on screen
//     // let centerY = ($colorDiv.height() /2);
//     // let centerX = ($colorDiv.width() /2);

    



//     // page is divided into 100 chunks
//     // page is divided into 360 chunks for hue left to right
//     // if in middle 360 times 0.5 
    
//     $colorDiv.on('mousemove', (e) => {
//         let x = e.clientX
//         let y = e.clientY
//         console.log("X: ", x, "Y: ", y)
        
//         const biggestCoordinate = y <= x ? x : y; 
//         const smallestCoordinate = y > x ? x : y;
//         const hue = maxHue * (x / this.innerWidth);

//         $colorDiv.css("background-color", `hsl(${Math.round(hue)})`)

        
//     });
// });

const maxHue = 360
const maxSaturation = 100
const maxLightness = 100

document.addEventListener("DOMContentLoaded", () => {
  
  window.addEventListener("mousemove", (e) => {
    const biggestCoordinate = e.clientY <= e.clientX ? e.clientX : e.clientY
    const smallestCoordinate = e.clientY > e.clientX ? e.clientX : e.clientY
    
    const hue = maxHue * (e.clientX / window.innerWidth)
    const saturation = maxSaturation * (e.clientY / window.innerHeight)
    const lightness = maxLightness * (smallestCoordinate / biggestCoordinate)
    
    console.log({
      xValues: `${e.clientX} / ${window.innerWidth}`,
      percentageAcrossScreen: e.clientX / window.innerWidth,
      yValues: `${e.clientY} / ${window.innerHeight}`,
      percentageDownScreen: e.clientY / window.innerHeight,
      diagonalValues: `smallest coord divided by biggest coord: ${smallestCoordinate} / ${biggestCoordinate}`,
      lightness,
      hue,
      saturation
    })
    
    console.log(`hsl(${Math.round(hue)}, ${Math.round(saturation)}%, 50%)`)
    
    document.querySelector('div').style.backgroundColor = `hsl(${Math.round(hue)}, ${Math.round(saturation)}%, ${lightness}%)`
  })
  
})