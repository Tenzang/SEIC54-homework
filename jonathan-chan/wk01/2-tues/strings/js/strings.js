//Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million.
function drEvil (num){
    if (num>=1000000) {
        console.log(num + " dollars (pinky)");
    } else {
        console.log(num + " dollars");
    }
}

drEvil(10)
drEvil(1000000)

//Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. 
//You can assume that the strings are at least 2 characters long.
function mixUp (str1,str2) {
    let resultStr1 = str1.substring(0,2) + str2.substring(2);
    let resultStr2 = str2.substring(0,2) + str1.substring(2);
    console.log(resultStr2 + " " + resultStr1)
}

mixUp("dog", "dinner")

//Create a function called fixStart. 
//It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. 
//You can assume that the string is at least one character long.
function fixStart(str) {
    let newstr = str.split('')
     for (let i=0; i < newstr.length; i++) {
        if (newstr[i] === str[0] ) {
            newstr[i] = "*";
        }
     }

     console.log(newstr.join(""))
}

fixStart("papple")

//Create a function called verbing. It should take a single argument, a string. 
//If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. 
//If the string length is less than 3, it should leave it unchanged. 
function verbing(str) {
    let test = 'ing';
    if (str.includes(test)) {
        str = str + ('ly');
        console.log(str);
    } else if (str.length > 3) {
        str = str + ('ing');
        console.log(str);
    } else {
        console.log(str)
    }

}

verbing('swim')
verbing('swimming')
verbing('go')

//Create a function called notBad that takes a single argument, a string.
//It should find the first appearance of the substring 'not' and 'bad'.
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

function notBad(str) {
    let result = str.replace(/not.*bad/, 'good');
    console.log(result);
}

notBad('This dinner is not that bad!'); 
notBad('This movie is not so bad!'); 
notBad('This dinner is bad!');