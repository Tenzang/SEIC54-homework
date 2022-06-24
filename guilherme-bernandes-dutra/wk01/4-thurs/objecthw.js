// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };

const rectangleA = {
    length: 4,
    width: 6,

  };


const isSquare = function (rectangle){
    if (rectangle.length===rectangle.width){
        console.log('its a square')
      } else 
        console.log('its a rectangle')
    };
    
const area= function (rectangle){
    const area = rectangle.length * rectangle.width
    return area
}
 console.log (area + 'this is the square area.')

 const perimeter= function(rectangle){
    return (rectangle.length + rectangle.width)* 2;
 }
 console.log(perimeter(rectangleA));


//  Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 6,
  sideC: 4
};
const triangleB = {
    sideA: 4,
    sideB: 4,
    sideC: 4
  };

 const isEquilateral = function(triangle){
    if (triangle.sideA === triangle.sideB && triangle.sideA=== triangle.SideC) {
        console.log('it is an equilateral triangle.')
        } else 
        console.log('it is not an equilateral triangle')
}

const isIsosceles = function(triangle){
    if (triangle.sideA===triangle.sideB && triangle.sideA !==triangle.sideC|| triangle.sideC===triangle.sideA && triangle.sideC!== triangle.sideB) {
        console.log('this is an isosceles triangle')
    } else {
        console.log('this is not an isosceles triangle?')
    }
}

const isObtuse =  function(triangle){
    if(triangle.sideA!==triangle.sideB && triangle.SideC!==triangle.sideA) {
        console.log('This is an Obtuse triangle')
    } else {
        console.log('This is not an Obtuse triangle')
    }
}

