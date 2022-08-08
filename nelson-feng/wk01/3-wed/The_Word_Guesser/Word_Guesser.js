// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess 
//the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), 
//and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' 
//and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various 
//letters to check that your program works.

const array1 = ['F','O','X'];
const array2 = ["","",""]

const guessLetter = function (guessedLetter) {
    for (let i = 0; i < array1.length; i++){
        if(guessedLetter === array1[i]){ // To find if word matches
            array2[i] = guessedLetter;
            console.log("Congratulations! You found a new letter!")
    for(let j = 0; j < array2.length; j++){ // To check remaining words

    }
        
            console.log("There are ${} letters left to find!")
    }
}
}

console.log(guessLetter("F"));
console.log(array2);
console.log(guessLetter("D"));
console.log(array2);
console.log(guessLetter("X"));
console.log(array2);






