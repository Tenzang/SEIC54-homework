// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following 
//functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle


const rectangleA = {  //Object Provided
    length: 4000,
    width: 6
};

 //isSquare
const isSquare = function (rectangle) {
    // Checks if length and width are the same for characteristics of a square
    if(rectangle.length === rectangle.width){ 
        return("This rectangle is a square");
    }else{
        return("This rectangle is not a square");
    }
};
console.log(isSquare(rectangleA));

//area

const areaOf = function (rectangle) {
    // Using formula for are of rectangle
   const area = rectangle.length * rectangle.width; 
    return(area);
}

console.log(areaOf(rectangleA));

//perimeter
const perimeterOf = function (rectangle) {
    //Using formula for perimeter of rectangle
    const perimeter = 2 * (rectangle.length + rectangle.width); 
    return(perimeter);
}

console.log(perimeterOf(rectangleA));

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the 
//following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
sideA: 3,
sideB: 3,
sideC: 4
};

//isEquilateral 
const isEquilateral = function (triangle) {
    if(triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC && triangle.sideC === triangle.sideA){
        return("This is an equilateral triangle");
    }else{
        return("This is not an equilateral triangle");
    }
}

console.log(isEquilateral(triangleA));

//isIsoceles
const isIsoceles = function (triangle) {
    if(triangle.sideA === triangle.sideB && triangle.sideB != triangle.sideC || triangle.sideB === triangle.sideC && triangle.sideC != triangle.sideA ||
        triangle.sideC === triangle.sideA && triangle.sideA != triangle.sideB){
        return("This is an isoceles triangle")
    }else{
        return("This is not an isoceles triangle");
    }
}
console.log(isIsoceles(triangleA));

//area

const area = function (triangle) {
    //Heron's Formula Triangle perimeter /2
    const s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2; 
    //Heron's Formula number to be square rooted
    const rootS = s*(s-triangle.sideA)*(s-triangle.sideB)*(s-triangle.sideC); 
    //Heron's Formula square rooting rootS
    const Tarea = Math.sqrt(rootS);
    return(Tarea);

};

console.log(area(triangleA));

//isObtuse

const isObtuse = function (triangle) {
     //Turns the object into an array.
    const sides = Object.values(triangle);
    //Sort array in ascending order
    const sidesInOrder = sides.sort();
    //Identify longest side
    const longestSide = sidesInOrder[sidesInOrder.length-1];
    //Using longest side^2 > total other sides ^2
    if(longestSide**2 > (sidesInOrder[sidesInOrder.length-2])**2 + (sidesInOrder[sidesInOrder.length-3])**2){ //Formula to find if obtuse
        return("This is an obtuse Triangle");
    }else{
        return("This is not an obtuse Triangle");
    }
}
console.log(isObtuse(triangleA));
