const DrEvil = function(amount) {
    const dollars = amount;
    const million = 1000000;

    if(amount != million ) {
        console.log(`${dollars} dollars`);
    }
    else {
        console.log(`${dollars} dollars (pinky)`);
    }
};

const mixUp = function(string1, string2) {
    console.log(string2.slice(0,2) + string1.slice(2) + ' ' + string1.slice(0,2) + string2.slice(2));
};

// Create a function called fixStart. It should take a single argument, a string, 
// and return a version where all occurences of its first character have been 
// replaced with '*', except for the first character itself. You can assume that 
// the string is at least one character long. For example:

const fixStart = function(replaceCharacter) {
    const firstCharacter = replaceCharacter.charAt(0);
    console.log( firstCharacter + replaceCharacter.replaceAll(firstCharacter, '*'));
};

const verbing = function(addIng) {
    
    if (addIng.length < 3) {
        console.log(addIng);
    }

    if(addIng.slice(-3) == 'ing') {
        console.log(addIng + 'ly');
    } else {
        console.log(addIng + 'ing');
    }

};

//Not Bad
// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

const notBad = function(subString) {
    const findNot = subString.indexOf('not');
    const findBad = subString.indexOf('bad');

    if(findBad == -1 || findNot == -1 || findBad < findNot) {
        return subString;
    }
    return subString.slice(0, findNot) + 'good' + subString.slice(findBad + 3);
};