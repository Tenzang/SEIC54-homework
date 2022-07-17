// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following 
// functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle


const rectangleA = {
    length: 4,
    width: 4
};

const rectangleB = {
    length: 10,
    width: 4
};

// isSquared

const isSquare = function(shape) {
    if (shape.length === shape.width) {
        console.log(`This rectangle is square.`)
    } else {
        console.log(`This rectangle is not square.`)
    }
}

isSquare(rectangleA);
isSquare(rectangleB);

//area

const area = function(shape) {
    const space = shape.length * shape.width;
    console.log(`This area is ${space}`)
}

area(rectangleA);
area(rectangleB);

//Perimeter

const perimeter = function(shape) {
    const result = (2 * shape.length) + (2 * shape.width);
    console.log(`This perimeter is ${result}`)
}

perimeter(rectangleA);
perimeter(rectangleB);


console.log(`-------------------------------------------------------------------------------------------`)


// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following 
// functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not


const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
}

const triangleB = {
    sideA: 7,
    sideB: 7,
    sideC: 7,
}

const triangleC = {
    sideA: 5,
    sideB: 7,
    sideC: 9,
}

// Equilateral

const isEquilateral = function (tri) {
    if(tri.sideA === tri.sideB && tri.sideB === tri.sideC){
        return `This is equilateral`
    } else {
        return `This is not equilateral.`
    }
}

console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));

// Isosceles 

const isIsosceles = function(tri) {
    if (tri.sideA === tri.sideB && tri.sideB === tri.sideC) {
        return `This is not Isosceles`
    } else if (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC){
        return `This is is an Isosceles`
    }
}

console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));

// Area

const Area = function(tri) {
    const a = tri.sideA;
    const b = tri.sideB;
    const c = tri.sideC;

    s = (a + b + c) / 2;
    ar = (s*(s-a)*(s-b)*(s-c)) ** 0.5;

    return ar;
}

console.log(Area(triangleA));
console.log(Area(triangleB));

// const isObtuse = function(tri) {
//     if (tri.sideA === tri.sideB && tri.sideB === tri.sideC) {
//         return `This is not obtuse`
//     } else if (tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC){
//         return `This is not obtuse`
//     } else {
//         return `This is obtuse`
//     }
// }

// const isObtuse = function(tri) {
//     const side = Object.values(tri)
//     // console.log(sides);
//     const sideOrder =side.sort();
//     // console.log(sideOrder);
//     const longestSide = sidesInOrder[sidesInOrder.length-1];
//     if(longestSide**2 > (sidesInOrder[sidesInOrder.length-2])**2 + (sidesInOrder[sidesInOrder.length-3])**2){ //Formula to find if obtuse
//         return("This is an obtuse Triangle");
//     }else{
//         return("This is not an obtuse Triangle");
//     }
// }

const isObtuse = function (triangle) {
    const sides = Object.values(triangle); //Turns the object into an array.
    // console.log(sides);
    const sidesInOrder = sides.sort();
    // console.log(sidesInOrder);
    const longestSide = sidesInOrder[sidesInOrder.length-1];
    // console.log(longestSide);
    if(longestSide**2 > (sidesInOrder[sidesInOrder.length-2])**2 + (sidesInOrder[sidesInOrder.length-3])**2){ //Formula to find if obtuse
        return("This is an obtuse Triangle");
    }else{
        return("This is not an obtuse Triangle");
    }
}

console.log(isObtuse(triangleA));
console.log(isObtuse(triangleB));
console.log(isObtuse(triangleC));