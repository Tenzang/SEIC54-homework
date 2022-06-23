//----------------PART 1------------------

// SQUARE NUMBER FUNCTION 

const squareNumber = function(num) {
    result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}


// HALF NUMBER FUNCTION

const halfNumber = function(num) {
    const result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}


//PERCENTAGE CALCULATOR FUNCTION

const percentOf = function(num1, num2) {
    result = [num1 / num2] * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}


//AREA OF CIRCLE (BONUS: rounded to 2 decimal places)

const areaOfCircle = function(radius) {
    result = Math.PI * radius * radius;
    console.log(`The circle with the radius ${radius} is ${result.toFixed(2)}.`)
    return result;
}


//----------------PART 2------------------

//FINAL CALCULATOR 

const finalCalculator = function(num) {
    const half = halfNumber(num);
    const square = squareNumber(half);
    const area = areaOfCircle(square);
    const percent = percentOf(area, square);
    return percent;
}
