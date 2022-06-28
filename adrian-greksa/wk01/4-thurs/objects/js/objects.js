// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function (rectangle) {
    if (rectangle.length === rectangle.width) {
        return true;
    } else {
        return false;
    }
}
console.log(isSquare(rectangleA));

// * area - Returns the area of the rectangle
const areaRect = function(rectangle) {
    return (rectangle.length * rectangle.width);
}
console.log(areaRect(rectangleA));

// * perimeter - Returns the perimeter of the rectangle
const perimeter = function(rectangle) {
    return (rectangle.length + rectangle.width);
}
console.log(perimeter(rectangleA));

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
    sideA: 4,
    sideB: 4,
    sideC: 4
};

const triangleC = {
    sideA: 6,
    sideB: 4,
    sideC: 3
};


// * isEquilateral - Returns whether the triangle is equilateral or not

const isEquilateral = function (triangle) {
    if (triangle.sideA === triangle.sideB === triangle.sideC) {
        return true
    } else {
        return false
    }
}
console.log(`is Eqilateral?`);
console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));
console.log(isEquilateral(triangleC));

// * isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function (triangle) {
    let a = triangle.sideA;
    let b = triangle.sideB;
    let c = triangle.sideC;
    if ( (a === b || b === c || c === a) && !(a === b === c)) {
        return true
    } else {
        return false
    }
}
console.log(`is Isosceles?`);
console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));
console.log(isIsosceles(triangleC));


// * area - Returns the area of the Triangle
const areaTri = function (triangle) {
    const a = triangle.sideA
    const b = triangle.sideB
    const c = triangle.sideC
    const s = (a + b +c)/2
    return (s*(s - a)*(s - b)*(s - c))*0.5
};

console.log(`Area?`);
console.log(areaTri(triangleA));
console.log(areaTri(triangleB));
console.log(areaTri(triangleC));


// * isObtuse - Returns whether the triangle is obtuse or not
const isObtuse = function (triangle) {

    let sides = [triangle.sideA, triangle.sideB, triangle.sideC];
    let sortedSides = sides.sort();

    console.log(sortedSides);

    if ((sides[0]**2 + sides[1]**2) < sides[2]**2) {
        return true
    } else {
        return false
    }
}
console.log(`is Obtuse?`);
console.log(isObtuse(triangleA));
console.log(isObtuse(triangleB));
console.log(isObtuse(triangleC));


