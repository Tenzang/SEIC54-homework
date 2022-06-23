function squareNumber (num) {
    let result = Math.pow(num,2);
    console.log("The result of squaring the number " + num + " is " + result);
}

squareNumber(3)

function halfNumber (num) {
    let result = num / 2 
    console.log("Half of " + num + " is " + result);
}

halfNumber(5)

function percentOf (num,num2) {
    let result = (num / num2)*100 
    console.log(num + " is " + result + "% of " + num2);
}

percentOf(2,4)

function areaOfCircle(num) {
    let result = (Math.PI * (Math.pow(num,2))).toFixed(2);
    console.log("The area for a circle with a radius " + num + " is " + result);
}

areaOfCircle(2)

function calculate(num) {
    let halfNumber = num/2;
    let squareNumber = Math.pow(halfNumber,2);
    let area = Math.PI * Math.pow(squareNumber,2);
    let percentage = (squareNumber / area)*100
    console.log(percentage)
}

calculate(40)