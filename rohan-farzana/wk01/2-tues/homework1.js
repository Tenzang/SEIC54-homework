const squareNumber=function (number){
    let result=number*number;
    console.log(`The result of squaring the number 3 is ${result}.`);
    return squareNumber;
}

squareNumber(3);


const halfNumber=function (number){
    const result= number/2;
    console.log(`Half of 5 is ${result}`);
    return result;
}

halfNumber(5);

const percentOf= function(num, bam){
    let number= (num/bam)%100;
    console.log(`2 is 50% of ${number}`);
    return number;
}

percentOf(4, 9);


const areaOfCircle = function( rad){
  let area= Math.PI * (rad* rad);
  
  console.log(`he area for a circle with radius 2 is ${area}.`);
  return area;
}
  areaOfCircle(3);

//   Write a function that will take one argument (a number) and
//    perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const funFact=function (num){
    let half= halfNumber(num);
    let squared = squareNumber(half);
    let circleOfRadius=areaOfCircle(squared);
    let lastPercent=percentOf(squared.area);
    
}

funFact(3);