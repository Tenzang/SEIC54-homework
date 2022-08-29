
// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function (){
 if (rectangleA.length === rectangleA.width){
    return ["this rectangle is also a square."]
 } else {
   return ["this rectangle is not a square."]
 }
};

const area = function (){
    result= rectangleA.length * rectangleA.width;
    return ['the area of the rectangle is ' + result];
};

const permiter = function () {
    result = [(rectangleA.length * 2) + (rectangleA.width * 2)];
    return ['The perimeter of this rectangle is ' + result];
};


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 6,
  sideB: 8,
  sideC: 4,
};

const isEquilateral = function (){
    if (triangleA.sideA === triangleA.sideB && triangleA.sideA === triangleA.sideC){
        return ['This is an equilateral triangle.']
    } else {
        return [ 'This is not an equilateral triangle.']
    };
};

const triangleArea = function () {
    let s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
    area = Math.sqrt(s * (s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC));
    return area;
};

const isIsosceles = function (){
    if (triangleA.sideA === triangleA.sideB && triangleA.sideA !== triangleA.sideC || triangleA.sideA === triangleA.sideC && triangleA.sideA !== triangleA.sideB || triangleA.sideB === triangleA.sideC && triangleA.sideA !== triangleA.sideC){
        return ['This triangle is isosceles'];
    }else {
        return ['This isnt a isosceles triangle.']
    }
};

// If the sum of the squares of the two shorter sides of a triangle is smaller than the square of the longest side, the triangle is obtuse.
const isObtuse = function () {
   let shorterSidesSum= (triangleA.sideA * triangleA.sideA) + (triangleA.sideC * triangleA.sideC);
   let longestSide = triangleA.sideB * triangleA.sideB;
   if (shorterSidesSum < longestSide){
    return[" this is an obtuse triangle"]
   } else {
    return ["this is not an obtuse triangle."]
   }
};

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// // Output
// cashRegister(cartForParty)); // 60.55
// Ask why this is how you do it.


const cartTotal = function(cartForParty){

    var shoppingTotal= 0  
    for( let key in cartForParty ) {
         shoppingTotal= (Number(cartForParty[key]) + shoppingTotal) ;
        
     } 
     return [shoppingTotal];
};


// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:

// card1= 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:

// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true

// const validateCreditCard = function (number){
//     if
// };


// Rain Drops
// Write a method in Javascript called raindrops that takes a number and returns a string based on whether or not the number has a factor of 3, 5 or 7 (or some combination of the three).

// If the number is divisible by 3, the method returns "Pling".
// If the number is divisible by 5, the method returns "Plang".
// If the number is divisible by 7, the method returns "Plong".
// If the number is divisible by more than one of the above, the method returns their sounds combined.
// If the number is not divisible by 3, 5 or 7, the method just returns the number.
// Examples:
// raindrops(28) // => "Plong"
// raindrops(35) // => "PlangPlong"
// raindrops(26) // => "26"

const rainDrops = function (number){
    let output = ''
    if (number % 3 === 0 ){
        output += "Pling"
    } else if ( (number % 5) === 0) {
        return ["Plang"]
    } else if ( (number % 7) === 0) {
         return ["Plong"]
    } else if  ( ( (number % 5 === 0) && ( number % 7) === 0) || ( (number % 3 === 0) && (number % 5 === 0) ) ){  //ASK ABOUT
        return ["PlangPlong"]
    } else {
        return [number]
    }; 
}




/// 1 aug warm-up

const countingValley = function(hike) {
    let altitude = 0;
    let valleyCount = 0;
    for ( lei i = 0; i < hike.lenght; i++) {
        const step =[i];
        const prevAltitude = altitude;
    
        altitude += travel(step);

        if (prevAltitude < altitude && altitude === 0) {
            valleyCount++
        };
         
    };
};
const travel = function(step){
    let output = 1 ;
    if (step === 'D') {
        output =-1;
    }
    return output;
}
   