const squareNumber = function(number) {
    const sqrNumber = number * number;
    console.log(`The result of squaring the number ${ number } is ${ sqrNumber }`);
    return sqrNumber;
};

const halfNumber = function(number) {
    const halvedNumber = number / 2;
    console.log(`Half of ${number} is ${halvedNumber}.`);
    return halvedNumber;
};

const percentOf = function(num1, num2) {
    const percentNumber = (100 * num1) / num2;
    console.log(`${num1} is ${percentNumber}% of ${num2}.`)
    return percentNumber;
};

const areaOfCircle = function(radius) {
    const areaCircle = Math.PI * radius * radius;
    console.log(`The area for a circle with radius ${radius} is ${areaCircle}.`);//${areaCircle.parseFloat(radius).toFixed(2)}.`);
    return areaCircle;
};

// 

const bigCalculation = function(number) {
    const halvedNumber = halfNumber(number);
    const sqredNumber = squareNumber(halvedNumber);
    const areaCircle = areaOfCircle(sqredNumber);
    const result = percentOf(sqredNumber, areaCircle);
};