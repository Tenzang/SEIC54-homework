// Write a function called squareNumber 
//that will take one argument (a number), 
//square that number, and return the result. 
//It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber (number){
    var numberSquared = number**2;
    // return numberSquared;
    logNumSquared = `The result of squaring the number ${number} is ${numberSquared}`;
    console.log(logNumSquared);
    return numberSquared;

}
squareNumber(3);
squareNumber(4);


// Write a function called halfNumber that will take one argument 
//(a number), divide it by 2, and return the result. 
//It should also log a string like "Half of 5 is 2.5.".

function halfNumber(number){
    var numberByTwo = number/2;
    logNumberByTwo = `Half of ${number} is ${numberByTwo}`
    console.log(logNumberByTwo);
    return numberByTwo;
}

halfNumber(8);
halfNumber(5);



// Write a function called percentOf that will take two numbers, 
//figure out what percent the first number represents of the second number, 
//and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(num1,num2){
    var percentageNum1ofNum2 = (num1/num2)*100;
    logPercentageNum1ofNum2 = `${num1} is ${percentageNum1ofNum2}% of ${num2}`;
    console.log(logPercentageNum1ofNum2);
    return percentageNum1ofNum2;
}

percentOf(3,6);
percentOf(6,3);

// Write a function called areaOfCircle that will take one argument (the radius), 
//calculate the area based on that, and return the result. 
//It should also log a string like "
//The area for a circle with radius 2 is 12.566370614359172."

function areaOfCircle(radius){
    var area = Math.ceil(Math.PI*(radius**2))
    logArea = `The area for a circle with radius ${radius} is ${area}`
    console.log(logArea);
    return area;
}

areaOfCircle(5);
areaOfCircle(7);

// Q: Bonus: Round the result so there are only two digits after the decimal.
//Used Math.Ceil above

//<<<<<>>><<>>><<>>>><>>><><><>><><>><><><><><

// Write a function that will take one argument (a number) and perform the 

//following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.

// Square the result of #1 and store that result.

// Calculate the area of a circle with the result of #2 as the radius.

// Calculate what percentage that area is of the squared result (#3).


function newFunction(number){
    var newNumber = halfNumber(number);
    var square = squareNumber(newNumber);
    var aOfCircle = areaOfCircle(square);
    var percent = percentOf(aOfCircle, square);

}

newFunction(5);
