
//=========================================================================================//
const squareNumber = function(number){
   let numberSquared = Math.pow(number, 2);
   console.log(`The result of squaring the number ${number} is ${numberSquared}`);
   return numberSquared;
}
squareNumber(64)

//=========================================================================================//


const halfNumber = function(number){
    let numberHalfed =  number / 2
    console.log(`Half of ${number} is ${numberHalfed}`);
    return numberHalfed;
}

halfNumber(65);

//=========================================================================================//


const percentOf = function(n1,n2){
    let percentage = n1 / n2 * 100 
    console.log(`${n1} is ${percentage}% of ${n2}`);
    return percentage;
}

percentOf(10,20);

//=========================================================================================//

const areaOfCircle = function(radius){
    let area = Math.PI * Math.pow(radius, 2);
    console.log(`The area for a circle with a radius of ${radius} is ${area}`);
    return area = area.toFixed(2);
}

areaOfCircle(45);

//========================================================================================//


//========================================================================================//
//========================================================================================//
//==================PART 2======================================================================//
//========================================================================================//
//========================================================================================//

const bigOleFunction = function(number){
    let takeHalf = halfNumber(number);
    let numberSquared = squareNumber(takeHalf); 
    const circArea = areaOfCircle(numberSquared);
    const newPercent = percentOf(circArea, numberSquared)
    return newPercent;
}

console.log(bigOleFunction(3));







