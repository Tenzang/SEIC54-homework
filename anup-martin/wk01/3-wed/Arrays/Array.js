// / # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


const maxOfTwoNumbers = function( a, b ) {
    if ( a > b ) {
    console.log (` Here ${ a } is the larger number`);
    } else {
    console.log (` ${ b } is the larger number`);
    }
};
maxOfTwoNumbers( 45, 36 );
maxOfTwoNumbers( 5, 8 );


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function( a, b, c ){
    if ( a > b && a > c ) {
    console.log(`${ a } is the bigger number`);
    } else if ( b > a && b > c ) {
    console.log(`${ b } is the bigger numbe`);
    } else ( c > a && c > b);
    console.log(`${ c } is the bigger number`);
};
maxOfThree(13, 17, 74);
maxOfThree( 130, 2, 50);
maxOfThree( 15, 99, 54);

// / 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = function( string) {
    const vowels = "aeiou";
    if (String.length === 1 && vowels.includes(string)){
        console.log(true);
    } else {
        console.log(false);
    }
};
isVowel( "r" );
isVowel( "e" );

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function( x ) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum
};
console.log(sumArray([1, 2, 3, 4]))

const multiplyArray = function( x ) {
    let multiply = 1;
    for (let i = 0; i < x.length; i++) {
        multiply *= x[i];
    }
    return multiply
};
console.log(multiplyArray([1, 2, 3, 4]));

