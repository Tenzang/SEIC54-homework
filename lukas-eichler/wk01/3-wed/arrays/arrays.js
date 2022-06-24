// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


const maxOfTwoNumbers = function (num1 , num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    } 
    }


console.log(maxOfTwoNumbers( 101, 104 ));


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.


const maxOfThree = function (num1 , num2, num3) {

  if (num1 > num2 && num1 > num3) {
    return num1;
} if (num2 > num1 && num2 > num3) {
    return num2;
} if (num3 > num1 && num3 > num2) {
    return num3;
}
}

console.log(maxOfThree(34 , 23, 44));


// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


const checkIfVowel = function (letter) {
    if (letter.length == 1) {
        let vowels = new Array("a", "e", "i", "o", "u");
        let checkIfVowel = false;

        for (e in vowels) {
            if (vowels[e] == letter) {
                checkIfVowel= true;
            }
        }
        return checkIfVowel;
    }
}

console.log(checkIfVowel("e"));
console.log(checkIfVowel("a"));
console.log(checkIfVowel("u"));


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const numbers = [1, 2, 3, 4];

const sumArray = function (numbers) {
    let total1 = 0;
    for (let i = 0; i < numbers.length; i++) {
        total1 += numbers[i];
    }
    return total1;
}

console.log(sumArray(numbers));


const numbers1 = [1, 2, 3, 4];

const multiplyArray = function (numbers1) {
    let total = 1;
    for (let i = 0; i < numbers.length; i++) {
        total *= numbers1[i];
    }
    return total;
}

console.log(multiplyArray(numbers1));




// ## Bonusl

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.





