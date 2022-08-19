function squareNumber(num) {
    let result = Math.pow(num, 2);
    console.log("The result of squaring the number " + num + " is " + result + ".");
    return result;
}

function halfNumber(num) {
    let result = num/2;
    console.log("Half of " + num + " is " + result + ".");
    return result;
}

function areaOfCircle(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    //rounding
    let result = area.toFixed(2);
    console.log("The area for a circle with radius " + radius + " is " + result + ".");
    return area;
}

function operations(num) {
    let half = halfNumber(num);
    let square = Math.pow(half, 2);
    let area = Math.PI * Math.pow(square, 2);
    let percentage = (area/square) * 100;
}

squareNumber(3);
halfNumber(5);
areaOfCircle(2);
