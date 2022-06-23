//Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumber = function(num1, num2) {
    if(num1 > num2) {
        return `The greater number of ${num1} and ${num2} is ${num1}`;
    } else {
        return `The greater number of ${num1} and ${num2} is ${num2}`;
    }
};

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThreeNumber = function(num1, num2, num3) {
    console.log(` The greater number is ${Math.max(num1, num2, num3)}`);
};

//Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const findVowel = function(letter) {
    const character = ['a', 'e', 'i', 'o', 'u'];
    
    for(let i = 0; i < character.length; i++) {
        if(letter === character[i]) {
            return true;
        } else {
            return false;
        }
    }
};

//Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function() {
    const array = [1, 2, 3, 4];
    let sum = 0;

    for(i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}

const multiplyArray = function() {
    const array = [1, 2, 3, 4];
    let multiply = 1;

    for(i = 0; i < array.length; i++) {
        multiply *= array[i];
    }
    console.log(multiply);
}

//const reverseString = function(word) {
//    const splitString = word.split('');
//    console.log(splitString);
//}

//You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

//Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
//Write a function called guessLetter that will:
//Take one argument, the guessed letter.
//Iterate through the word letters and see if the guessed letter is in there.
//If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
//When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
//It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
//Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const finalWord = ['F', 'O', 'X']; // 
const currentGuess = ['_', '_', '_'];

const guessLetter = function(letter) {
    
    let myGuess = false;
    let moreGuessNeeded = false;

    for(let i = 0; i < finalWord.length; i++) {
        if(finalWord[i] === letter) {
            currentGuess[i] = letter;
            myGuess = true;
        }
        if (currentGuess[i] === '_') {
            moreGuessNeeded = true;
        }
    }
    if (myGuess) {
        console.log('Good Guess!');
        console.log(currentGuess.join(''));
        if (!moreGuessNeeded) {
            console.log("Congrats, you have won!");
        } 
    } else {
            console.log('That was incorrect');
        }
};

// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

let rewardAmount = 0;
console.log(`You have $${rewardAmount}, good luck!`); 

const wheelFortune = function(letter) {
    let myGuess = false;
    let moreGuessNeeded = false;

    for(let i = 0; i < finalWord.length; i++) {
        if(finalWord[i] === letter) {
            currentGuess[i] = letter;
            myGuess = true;
        }
        if (currentGuess[i] === '_') {
            moreGuessNeeded = true;
        }
    }
    if (myGuess) {
        console.log('Good Guess!');
        rewardAmount = rewardAmount + Math.floor(Math.random() * 100);
        console.log(`$${ rewardAmount }`);
        console.log(currentGuess.join(''));
        if (!moreGuessNeeded) {
            console.log("Congrats, you have won!");
            console.log(`Your final total is $${rewardAmount}`);
        } 
    } else {
            rewardAmount = rewardAmount - Math.floor(Math.random() * 50);
            console.log(`$${ rewardAmount }`);
            console.log('That was incorrect');
        }
};