// DrEvil ----------------------

const DrEvil = function(amount){
    if (amount < 1000000 || amount > 1000000) {
        return `${amount} dollars`;
    } else {
        return `${amount} dollars (pinky)`;
    }
}


// mixUp -----------------------

const mixUp = function(word1, word2) {
    return `${word2.slice(0, 2) + word1.slice(2)} ${word1.slice(0, 2) + word2.slice(2)} `;
}



//fixStart ---- not working yet !@!@#!@#!@#!@#!@---------

const fixStart = function(theWord) {
    const fixedWord = theWord.charAt(0);
    return fixedWord + theWord.slice(1).replaceAll(fixedWord, `*`);
}


// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'




//Verbing --------------------------------------------

const verbing = function(text) {
    if (text.length < 3) {
        return text;
    } else if (text.slice(-3) == 'ing') {    // -3 is the 3 last characters from the end == is used as it could be CAPS
        return `${text}ly`;
    } else {
        return `${text}ing`;
    }
}



//notBad -------------------NOT WORKING YET-------------

// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:

//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function (line) {
    const notI = line.indexOf(`not`);
    const badI = line.indexOf(`bad`);
    if (notI == -1 || badI == -1 || badI < 0);
}

//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.


  