// # The Calculator

// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function(numA) {
    const square = numA * numA;
    const result = `The result of squaring the number ${numA} is ${square}`;
    console.log(result);
    return square;
}

squareNumber(3);

const halfNumber = function(numB) {
    const half = numB /2;
    const result = `Half of ${numB} is ${half}`;
    console.log(result);
    return half;
}

halfNumber(5)

const percentOf = function(num1,num2) {
    const percent = num1/num2 * 100;
    const result = `${num1} is ${percent}% of ${num2}`;
    console.log(result);
    return percent;
}

percentOf(2,4);

const areaOfCircle = function(theRadius) {
    const area = Math.PI * theRadius * theRadius;
    const result = `The area for a circle with radious of ${theRadius} is ${area}`
    console.log(result);
    return area;
}

areaOfCircle(2);

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const magicCalculator = function(number) {
    const half = halfNumber(number);
    const square = squareNumber(half);
    const area = areaOfCircle(square);
    const percent = percentOf(area,square);
    return percent;
}

magicCalculator(3);