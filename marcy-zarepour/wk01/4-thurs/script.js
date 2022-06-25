// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// ```javascript

const rectangleA = {
  length: 4,
  width: 6
 };
const isSquare= function(rectangle){
    if (rectangle.width === rectangle.length){
        return "it is square" ;
    }else{
        return "it is not";
    }

}

console.log(isSquare(rectangleA));

const area = function(rectangle){
    return rectangle.length * rectangle.width ;
}
console.log(area(rectangleA));

const perimeter = function(rectangle){
    return (rectangle.length + rectangle.width)* 2 ;
}
console.log(perimeter(rectangleA));




// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// ```javascript

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
const triangleB = {
    sideA: 3,
    sideB: 3,
    sideC: 3
  };

const isEquilateral = function(triangle){
    if(triangle.sideA === triangle.sideB && triangle.sideC=== triangle.sideB){
        return " tringle is equilateral";
    }else{
        return " tringle is not equilateral";
    }
}
console.log(isEquilateral(triangleB));

const isIsosceles = function(triangle){
    if(triangle.sideA === triangle.sideB && triangle.sideB !== triangle.sideC  ||  triangle.sideA === triangle.sideC && triangle.sideC !== triangle.sideB || triangle.sideB === triangle.sideC && triangle.sideC !== triangle.sideA){
        return "triangle is Isosceles";
      }else{
        return "triangle is not Isosceles";
      };
}
console.log(isIsosceles(triangleB));

const area1 = function(triangle) {
    const s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2 ;
    const total = Math.sqrt(s * (s - triangle.sideA) * (s - triangle.sideB) *  (s - triangle.sideC)) ;
    return total.toFixed(2)
    
}
console.log(area1(triangleA));

const obtuse = function(triangle){
    if (Math.sqrt(triangle.sideA) > Math.sqrt(triangle.sideB) + Math.sqrt(triangle.sideC) || Math.sqrt(triangle.sideB) > Math.sqrt(triangle.sideA) + Math.sqrt(triangle.sideC) ||  Math.sqrt(triangle.sideC) > Math.sqrt(triangle.sideA) + Math.sqrt(triangle.sideB) ){
        return "Obtuse is angled Triangle";
}else{
    return "Obtuse is not angled Triangle";
}
}
console.log(obtuse(triangleA));


// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. 
//The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
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

// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`

// The following credit card numbers are invalid:

// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.