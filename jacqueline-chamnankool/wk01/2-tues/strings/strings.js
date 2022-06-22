// https://www.teaching-materials.org/javascript/exercises/strings

/* DrEvil
Create a function called DrEvil. It should take a single argument, an amount, 
and return '<amount> dollars', except it will add '(pinky)' at the end if the 
amount is 1 million. */
function DrEvil(amount) {
    let str = amount + " dollars";
    if (amount == 1000000) {
        str += " (pinky)";
    }

    return str;
}

/* MixUp
Create a function called mixUp. It should take in two strings, and return 
the concatenation of the two strings (separated by a space) slicing out and 
swapping the first 2 characters of each. You can assume that the strings 
are at least 2 characters long. */
function mixUp(str1, str2) {
    let tempChar = str1[0];
    str1 = str1.replace(tempChar, str2[0]);
    str2 = str2.replace(str2[0], tempChar);
    //string.replace(character to replace, character to be replaced)
    return str1 + " " + str2;
}

/* FixStart
Create a function called fixStart. 
It should take a single argument, a string, and return a version where all 
occurences of its first character have been replaced with '*', except for the 
first character itself. You can assume that the string is at least one 
character long. */
function fixStart(str) {
    //need global g modifier
    let firstChar = str[0];
    //allows using variable in replace function
    var reg = new RegExp(firstChar, "g");
    let result = firstChar + str.slice(1).replace(reg, "*");
    return result;
}

/* Verbing 
Create a function called verbing. It should take a single argument, a string. 
If its length is at least 3, it should add 'ing' to its end, unless it already 
ends in 'ing', in which case it should add 'ly' instead. If the string length 
is less than 3, it should leave it unchanged. */
function verbing(str) {
    let ending = "";
    //get last 3 letters
    for (let i = str.length-3; i < str.length; i++) {
        ending += str[i];
    }

    if (str.length >= 3 && ending !== "ing") {
        str += "ing";
    } else if (str.length >= 3 && ending == "ing") {
        str += "ly";
    }

    return str;
}

/* Not Bad
Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' 
substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), 
just return the original sentence. */
function notBad(str) {
    //let re = /(not).*(?= bad)/g;
    let not = "not";
    let bad = "bad";
    let re = new RegExp(`${not}.*${bad}`, "g");
    let result = str.replace(re, "good");

    console.log(result);
}

/* the junk i was trying
function notBad(str) {
    //holy shit this is ugly
    let notExists = false;
    let badExists = false;
    //slice removes punctuation
    let arr = str.slice(0, -1).split(" ");
    let notIndex = 0;
    let badIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "not" || arr[i] === "Not") {
            notExists = true;
            notIndex = i;
            console.log("Not exists at index " + notIndex);
        } else if (arr[i] === "bad" || arr[i] === "Bad" && notExists) {
            badExists = true;
            badIndex = i;
            console.log("Bad exists at index " + badIndex);
        }
    }

    //if "not bad" exists in the right order, replace with "good"
    if (notExists && badExists) {
        arr[notIndex] = "good";
        arr.splice(notIndex+1, badIndex);
    }

    //get the punctuation back lol
    arr.push(str[str.length-1]);

    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length-2) {
            result += " ";
        }
    }
    
    console.log(result);
}
*/

console.log(DrEvil(1000000));
console.log(mixUp("mix", "pod"));
console.log(fixStart("babble"));
console.log(verbing("swimming"));
notBad("This dinner is not that bad!");