// # Pig Latin
// Create a function in JS that will translate your input to Pig Latin!

// ### Your function:
// - Must move the first letter of each word to the end of it, then add "_ay_" to the end of the word.
// - Must Leave punctuation marks untouched.
// - Doesn't need to be case sensitive.

// ### The input:
// - Will have a space between words and punctuation, like in the example below. 

// _note: It's fine for your output to keep the space between punctuation marks and the word._

// ### Examples:
// ``` JS
// pigLatin("Pig Latin is cool !"); // => "igPay atinLay siay oolcay !"
// pigLatin("When do we get back from break ?"); // => "henWay oday eway etgay ackbay romfay reakbay ?"
// pigLatin("DRY code is good code ."); // => "RYDay odecay siay oodgay odecay ."
// ```

// #### Bonus:
// Go do some code wars or something...

const pigLatin = function(phrase) {
   // breakup words in to words array
    const words = phrase.split (" "); 
    //loop through each word
    for (i = 0; i < words.length; i++) {
        //Pull current word from array
        let word = words [i];
    if (word !== "!" && word !== "?" && word !== "." ) {
        //skip word if puctuaction
        word = word + word[0] + "ay";
        words[i] = word.substring(1);  //remove the first character
    }
    }
    return words.join(" ");
}
pigLatin("Pig Latin is cool !");
pigLatin("When do we get back from break ?");
pigLatin("DRY code is good code .");



