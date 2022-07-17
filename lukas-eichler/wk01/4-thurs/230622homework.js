// # Geometry Function Lab

// ### PART 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept
// a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// javascript
// const rectangleA = {
//   length: 4,
//   width: 4

const square = {
    length: 8,
    width: 11,
}

const isSquare = function (shape) {

if (shape.length === shape.width) {
    return true;
} else {
    return false;
}

};

const squareArea = function (shape) {
    let x = shape.length * shape.width;
    return (x);
};
   

const perimeter = function (shape) {
    let x = (shape.length + shape.width) * 2;
    return (x);
}


console.log(isSquare(square));

console.log(squareArea(square));

console.log(perimeter(square));



// ### PART 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept 
// a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```


const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};

const isEquilateral = function (shape) {
    if (shape.sideA === shape.sideB === shape.sideC) {
        return true;
    } else {
        return false;
    }
};

const isIsosceles = function (shape) {
    if (shape.sideA == shape.sideB || shape.sideA == shape.sideC || shape.sideC == shape.sideA) {
        return true;
    } else {
        return false;
    }
}

const triangleArea = function (shape) {
    let x = shape.sideA * shape.sideB * shape.sideC
    return (x);
};

console.log(isEquilateral(triangleA));
console.log(isIsosceles(triangleA));
console.log(triangleArea(triangleA));




// # THE CASH REGISTER

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

// ```
// // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty)); // 60.55
// ```