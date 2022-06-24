//Array and Functons Bonus Material

/* Define a function maxOfTwoNumbers that takes two numbers as arguments 
and returns the largest of them. Use the if-then-else construct available in 
Javascript. You'll have to remember your pre-work, or do some googling to 
figure this out. */
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwoNumbers(10,5), "is the highest number.");

console.log("-----------------------------------");

/* Define a function maxOfThree that takes three numbers as arguments and
 returns the largest of them. */
function maxOfThree(num1, num2, num3) {
    let largest = num1;

    if (num2 > largest) {
        largest = num2;
    }

    if (num3 > largest) {
        largest = num3;
    }

    return largest;
}

console.log(maxOfThree(10,5,21), "is the highest number.");

console.log("-----------------------------------");

/* Write a function that takes a character (i.e. a string of length 1) and 
returns true if it is a vowel, false otherwise. */
function isVowel(letter) {
    const vowels = /[aeiou]/gi;
    if (letter.match(vowels)) {
        return true;
    } else {
        return false;
    }
}

console.log(isVowel("A"));
console.log(isVowel("B"));

console.log("-----------------------------------");

/* Define a function sumArray and a function multiplyArray that sums and 
multiplies (respectively) all the numbers in an array of numbers. For example, 
sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should 
return 24. */
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function multiplyArray(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }

    return product;
}

console.log("Sum:", sumArray([1,2,3,4]));
console.log("Product:", multiplyArray([1,2,3,4]));

console.log("\n====================================");
console.log("Bonus Stuff");
console.log("====================================");

/* Define a function reverseString that computes the reversal of a string. 
For example, reverseString("jag testar") should return the string "ratset gaj". */
function reverseString(str) {
    let output = "";
    for (let i = str.length-1; i >= 0; i--) {
        output += str[i];
    }

    return output;
}

console.log(reverseString("jag testar"));

console.log("-----------------------------------");

/* Write a function findLongestWord that takes an array of words and returns 
the length of the longest one. */
function findLongestWord(words) {
    let longestWord = "";

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord(["apple", "banana", "thisisdefinitelyaword"]));

console.log("-----------------------------------");

/* Write a function filterLongWords that takes an array of words and an number i 
and returns the array of words that are longer than i. */
function filterLongWords(words, i) { //i...
    const longWords = [];

    for (const word of words) {
        if (word.length > i) {
            longWords.push(word);
        }
    }

    return longWords;
}

console.log(filterLongWords(["sdkjfhdskjfhds", "dsdf", "dflsdjakgj", "da"], 5));
