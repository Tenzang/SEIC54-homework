//I'm sorry I put all the bonuses into one giant mutant thing

const wordLetters = ["F", "O", "X"];
const finalWord = wordLetters.join("");
const guesses = [];

//Bonus: Make it more like Wheel of Fortune
let reward = 0;
//Bonus: Make it like Hangman
const allGuesses = [];
let hangman = 0;

function guessLetter(guess) {
    if (hangman === 6) {
        //byebye
        printHangman();
    } else {
        //if guess is in wordLetters + not already guessed before
        if (wordLetters.indexOf(guess) !== -1 && allGuesses.indexOf(guess) === -1) {
            //console.log("test");
            guesses.push(guess);
            allGuesses.push(guess);
            generateReward();

            printDashes();
            console.log("You've found a new letter.");
            console.log("→ Current guessed letters: " + guesses);

            //final correct guess
            if (guesses.length === wordLetters.length) {
                console.log("\nCongratulations! You guessed the right word!");
                console.log(`★ ${finalWord} ★`);
                //it is possible to end with $0 depending on how many incorrect guesses the user makes
                console.log(`→ Your final reward: $${reward}`);
            }
        } else if (wordLetters.indexOf(guess) === -1 && allGuesses.indexOf(guess) === -1) {
            hangman++;
            printDashes();
            console.log(guess, "is not a correct guess.");
            allGuesses.push(guess);
            depleteReward();
        }
    }
}

function generateReward() {
    //for first guess, generate random reward between 100 and 1000
    if (guesses.length === 1) {
        const max = 1000;
        const min = 100;
        reward += Math.floor(Math.random() * (max - min + 1) + min);
    } else if (guesses.length > 1) {
        //multiply reward otherwise
        reward *= 2;
    }
}

function depleteReward() {
    if (reward >= 100) {
        //deduct $100 only if they have at least 100 to deduct
        reward -= 100;
    } else {
        reward = 0;
    }
}

function printDashes() {
    console.log("----------------------------------------------");
}

function printHangman() {
    printDashes();
    console.log("→ Game over. :(");
    printDashes();
    console.log(`${" ".repeat(3)}+---+`);
    console.log(`${" ".repeat(3)}|${" ".repeat(3)}|`);
    console.log(`${" ".repeat(3)}O${" ".repeat(3)}|`);
    console.log(`${" ".repeat(2)}/|\\${" ".repeat(2)}|`);
    console.log(`${" ".repeat(2)}/ \\${" ".repeat(2)}|`);
    console.log();
}

//WINNING TESTS
guessLetter("F"); //yes
guessLetter("O"); //yes
guessLetter("P"); //no
guessLetter("X"); //yay

//LOSING TESTS - shows hangman
// guessLetter("F"); //yes
// guessLetter("A"); //no
// guessLetter("B"); //no
// guessLetter("O"); //yes
// guessLetter("L"); //no
// guessLetter("M"); //no
// guessLetter("N"); //no
// guessLetter("V"); //no
// guessLetter("P"); //wah
