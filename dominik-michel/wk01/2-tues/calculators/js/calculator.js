// # The Calculator

// ## Part 1


// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber= function(number1){
    let squere= number1**2; 
    let result =`The result of squaring the number ${ number1 } is ${squere}.`
    console.log(result);
    return squere;
}
squareNumber(3)
squareNumber(2)
squareNumber(5)

// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber=function(number2){
    let calculator=number2/2;
    let outcome=`Half of ${number2} is ${calculator}`;
    console.log(outcome);
    return calculator;

}
halfNumber(5)
halfNumber(10)
halfNumber (26)

// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf= function(firstNumber, secondNumber){
    let calcul= firstNumber/secondNumber*100;
    let text=` ${firstNumber} is ${calcul}% of ${secondNumber}`;
    console.log(text);
    return calcul
}
percentOf(10,5)
percentOf(5,25)
percentOf(3,30)

// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle= function(radius){
    let area = Math.PI * radius** 2;
    console.log(`The area  with the circle of radius ${radius} is ${Math.ceil(area)}`)
    return area;
}
areaOfCircle(5)
areaOfCircle(3)
areaOfCircle(10)
    
    
// ## Part 2


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const multi1= function(number3){
    let half =number3/2;
    let squere1=half**2;
    let area1 = Math.PI * squere1** 2;
    let percentage= squere1/ area1*100;
    let outcome1=`Half of the number ${number3} is ${half} and the squere numer of this is ${squere1} which results an area of ${area1}. It has the percentage of ${percentage} of the squere number.`
    console.log(outcome1);
    return percentage

}
multi1(5);
multi1(10);
multi1(4);

// # Strings

// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// ## DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// ```
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
// ```

const DrEvil= function(amount){
    if(amount>=1000000){
        console.log(`${amount} dollars (pinky)`)
    }else {
        console.log(`${amount} dollars`)
    }
    return amount
}
DrEvil(100)
DrEvil(10000000)
// ## MixUp

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
// ```
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
// ```

const mixUp=function(word1, word2){
    let slword1=word1.slice(2)
    let slword2=word2.slice(2)
    console.log(slword1 + slword2)
    return 

}
mixUp("Blue", "Red")

// ## FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
// ```
// fixStart('babble'): 'ba**le'
// ```

const fixStart= function(arg){
      let chnage=arg.replace(/b/gi, "*")
      console.log(chnage)
      return chnage
}
fixStart("buubbbbaaa")

// ## Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
// ```
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
// ```

const verbing= function(word){
    
    if( word.endsWith("ing")){
        let add=word+"ly"
        console.log(add)
    }
    else if(word.length>3){
        let newWord=word+"ing"
        console.log(newWord) 
    }else {
        console.log(word)
    }
}
verbing("Surf")
verbing("Surfing")
verbing("Su")

// ## Not Bad

// Create a function called notBad that takes a single argument, a string.
// - It should find the first appearance of the substring 'not' and 'bad'.
// - If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// - If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

const notBad=function(argu){
    
}
notBad("Meal")
// For example:
// ```
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// ```