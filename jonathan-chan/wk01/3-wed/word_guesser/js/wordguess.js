const endWord = ['F','O','X']
const guessedWord = ['_','_','_']
function guessLetter (str) {
    for (i=0; i<endWord.length; i++) {
        //checking to see if the letter inputted matches the end word bank with each loop
        if (str===endWord[i]) {
            //if conditions are met then the letter inputted is stored into guessed word bank
            guessedWord[i]=str;
            //tells the user which letter is right
            console.log(`you got ${guessedWord} right`);
        } 
    } 
    //.join to compare the strings
    if (guessedWord.join()===endWord.join()) {
        console.log(`Congratulations you guessed ${endWord} right`);
}
};

guessLetter('O')
guessLetter('F')
guessLetter('X')