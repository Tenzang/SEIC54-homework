// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}


// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(num1, num2, num3) {
    if (num1 > num2 & num1 > num3) {
        return num1;
    } else if (num2 > num1 & num2 > num3) {
        return num2;
    } else if (num3 > num1 & num3> num2) {
        return num3;
    }
}


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const character = function(x){
    const vowel = ['a', 'e', 'i', 'o', 'u']
    if (vowel.includes(x)) {
        return true;
    } else {
        return false;
    }
}


// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

const sumArray = function(array){
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total = total + array[i];
    }
    return total;
}

const multiplyArray = function(array){
    let total = 1;
    for (i = 0; i < array.length; i++){
        console.log(i);
        total = total * array[i];
    }
    return total; 
}

// bonus ---------------------------

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function(string){
    return string.split("").reverse().join("");
}
//split() splits a string into an array of substrings
    // "" is used as a seperator
//reverse() method reverses an array 
// join ("") joins arrays into string

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function(word) {
    
}



// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.