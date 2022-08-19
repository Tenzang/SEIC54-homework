// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
const maxOfTwoNumbers = function (a, b) {
    if (a > b) {
        console.log(`${ a } is the larger number`);
    } else {
        console.log(`${ b } is the larger number`);
    }
};

maxOfTwoNumbers(3, 5);
maxOfTwoNumbers(23, 5);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (a, b, c) {
    if (a > b && a > c) {
        console.log(`${ a } is the larger number`);
    } else if (b > a && b > c) {
        console.log(`${ b } is the larger number`);
    } else {
        console.log(`${ c } is the larger number`);
    }
}
maxOfThree(2, 5, 6);
maxOfThree(2, 5, 1);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const isVowel = function (str) {
    const vowels = 'aeiou';
    if (str.length === 1 && vowels.includes(str)) {
        console.log(true); 
    } else {
        console.log(false);
    }
}
isVowel('e');
isVowel('w');
isVowel('v');



// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
const sumArray = function (x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5]));

const multiplyArray = function (x) {
    let multiply = 1;
    for (let i = 0; i < x.length; i++) {
        multiply *= x[i];
    }
    return multiply
}
console.log(multiplyArray([1, 2, 3, 4]));

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = function (x) {
    let result='';
    for (let i = 0; i < x.length; i++) {
        if (x[i].length >= result[0].length) {
            result[0] = x[i];
        } else {
            continue;
        }
    }
    return result
}

console.log(result);


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.






// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.


let word = 'guesser';
let lettersOfWord = Array(word.length);
let currentGuessedLetters = Array();

const guessLetter = function (char) {  
    currentGuessedLetters.push(char); 
    if (word.includes(char)) {
        for (let i = 0; i < word.length; i++) {
            if (char === word[i]) {
                lettersOfWord[i] = char;
            } else if () {

            }
                continue;
            }
        }
        console.log(`Current guessed letters: ${}`)
    } else {
        console.log('Sorry, the word does not contain ' + char)
    }
}

Array.from({length: 5}, (v, i) => i);




// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.





// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.