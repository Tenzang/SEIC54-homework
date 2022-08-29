// The Calculator
// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the numberT 3 is 9."

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function(num1){
    let result = num1 * num1 ;
    return ["The result of squaring the number " + num1 + " is " +  result];
    
}

const halfNumber = function(num1){
    let resultHalf = num1 / 2 ;
    return[ "Half of " + num1 + " is " + resultHalf];

}

const percentOf = function(num1, num2 ) {
    let resultPercent = num1 / num2 * 100;
    return  [num1 + " is " + resultPercent + "% of " + num2];
}

const areaOfCircle = function(radius) {
    let areaResult = radius * radius * Math.PI;
    return [ "The area for a circle with radius " + radius + " is " + areaResult];
}

// Parte 2: Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const bonus = function(num1){
    let resultHalf = num1 /2
    let resultSquare = resultHalf * resultHalf
    let areaResult = resultSquare * resultHalf * Math.PI;
    let resultPercentage = areaResult / resultSquare * 100
    return [resultHalf, resultSquare, areaResult, resultPercentage];
}

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const drEvil = function(amount){
    if (amount === 1000000) {
        console.log(amount + " dollars (pinky)");
    } else {
        console.log(amount + " dollars");
    }
}