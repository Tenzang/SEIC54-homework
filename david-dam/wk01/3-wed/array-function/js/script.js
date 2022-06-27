// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. 
//    Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = function(num,num2) {
    if (num > num2) {
        console.log(num)
    } else {
        console.log(num2)
    }
}

maxOfTwoNumbers(1,2);
maxOfTwoNumbers(5,10);
maxOfTwoNumbers(50,100);

// // 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function(num,num2,num3) {
    if (num > num2 && num > num3){
        console.log(num);
    } else if (num2 > num && num2 > num3){
        console.log(num2);
    } else {
        console.log(num3);
    }
}

maxOfThree(3,2,1);
maxOfThree(4,6,2);
maxOfThree(3,6,9);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowels = ['a','e','i','o','u'];

    const character = function(word) {
            if (word.length[1] = vowels) {
                console.log(true)
            } else {
                console.log(false)
            }
    }

// Can not get this to work as it only ouput as "True"

    character('a')
    character('b')

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. 
// For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function(a,b,c,d) {
    let sum = a + b + c + d;
        console.log(sum)
}

sumArray(1,2,3,4);
sumArray(2,4,6,8);
sumArray(1,3,5,7);

const multiplyArray = function(a,b,c,d) {
    let multi = a * b * c * d;
        console.log(multi)
}

multiplyArray(1,2,3,4)
multiplyArray(2,4,6,8)
multiplyArray(1,3,5,7)

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

// had to google for split(),reverse(),join().

const reverseString = function (word) {    
    console.log(word.split("").reverse().join(""));
}

reverseString(" Hello ");
reverseString(" Is it me your looking for")
reverseString(" I can see it in your eyes")
reverseString(" I can see it in your smile")

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

// const findLongestWord = function(word)  {
//     let strSplit = str.split(' ');
//     let longestWord = strSplit.reduce(function(longest, currentWord)) {
//         if(currentWord.length > longest.length)
//         console.log(currentWord)
//         else
//         console.log(longest)
// }
// }


// have tried to used the above solution but can't get the output.
// But then when I learnt to compress this cod below it seems to 

const findLongestWord = function(word) {
    const longestWord = word.split(' ').reduce(function(longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
      }, "");
      console.log(longestWord);
}

findLongestWord('I am awsome');


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.