//console.log('hi is this thing on?')

//geometry function labs
//p1 rectangle
const rectangle = {
    length: 4,
    width: 4,
};

function isSquare(shape) {
    //check if sides are equal
    if (shape.length === shape.width) {
        return `Is a square!`;
    } else {
        return `Is not a square :/`;
    }
};

function areaS(shape) {
    //calculate area
    let areaOf = shape.length * shape.width;
    return `The area is ${areaOf}`;
};

function perimeter(shape) {
    //calculate perimeter
    let perimeter = (2 * shape.length) + (2 * shape.width);
    return `The perimeter is ${perimeter}`
};

//test
console.log(isSquare(rectangle))
console.log(areaS(rectangle))
console.log(perimeter(rectangle))

//p2 triangle
const triangleA = {
    sideA: 3,
    sideB: 2,
    sideC: 4
};

const triangleB = {
    sideA: 4,
    sideB: 4,
    sideC: 3
};

const triangleC = {
    sideA: 5,
    sideB: 4,
    sideC: 3
};

function isEquilateral(shape) {
    //check if sides are equal
    if (shape.sideA === shape.sideB === shape.sideC) {
        return `Is a Equilateral!`;
    } else {
        return `Is not Equilateral :/`;
    }
};

function isIsosceles(shape) {
    if (shape.sideA === shape.sideB || shape.sideC === shape.sideA) {
        return `Is a Isosceles!`;
    } else {
        return `Is not an Isosceles :/`;
    }
};

function areaT(shape) {
    //calculate the perimeter
    const s = (shape.sideA + shape.sideB + shape.sideC) / 2
    //use herons formula where s = perimeter
    const result = Math.sqrt(s * (s - shape.sideA) * (s - shape.sideB) * (s - shape.sideC))
    return `The area is ${result}`
}

//rules for triangle
// 1) Square all 3 sides.
// 2) Sum the squares of the 2 shortest sides.
// 3) Compare this sum to the square of the 3rd side.
// if sum > (3rd side)^2   Acute Triangle
// if sum = (3rd side)^2   Right Triangle
// if sum < (3rd side)^2   Obtuse Triangle

function isObtuse(shape) {
    let arrayShape = [shape.sideA, shape.sideB, shape.sideC]
    arrayShape = arrayShape.sort()
    if (Math.pow(arrayShape[0],2) + Math.pow(arrayShape[1],2) < Math.pow(arrayShape[2],2)) {
        return `This is an Obtuse Triangle`;
    } 
    if (Math.pow(arrayShape[0],2) + Math.pow(arrayShape[1],2) === Math.pow(arrayShape[2],2)) {
        return `This is a Right Angled Triangle`;
    }
    if (Math.pow(arrayShape[0],2) + Math.pow(arrayShape[1],2) > Math.pow(arrayShape[2],2)) {
        return `This is an Acute Triangle`;
    }
    
};

//test
console.log(areaT(triangleA)); 
console.log(isObtuse(triangleA)); //=> obtuse
console.log(isObtuse(triangleB));//=>acute
console.log(isObtuse(triangleC));//=>right angled