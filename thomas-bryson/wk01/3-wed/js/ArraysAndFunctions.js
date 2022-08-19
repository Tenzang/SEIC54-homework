// Array and Functions Bonus Material

// Defining the function
const maxOfTwoNumbers = function(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
//storing the maximum of 2 & 4 as 'max'
const max = maxOfTwoNumbers(2,4);
console.log(max);

// Good Job!

const maxOfThree = function(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    }
}
const max3 = maxOfThree(4,6,8);
console.log(max3);
console.log(maxOfThree(16,3,5));
console.log(maxOfThree(16,30,5));
console.log(maxOfThree(16,3,50));

//this didn't appear to work when I used (num2 > num1 && num3)??
//Anyway good job.

const vowelCheck = function(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ) {
        return true;
    } else {
        return false;
    }
}
const checkVowel = vowelCheck('a');
console.log(checkVowel);
console.log(vowelCheck('b'));
console.log(vowelCheck('r'));
console.log(vowelCheck('n'));
console.log(vowelCheck('i'));
console.log(vowelCheck('u'));

//Took a little work but we got there in the end. Also, why does, again, simply writing char === 'a' || 'e' || 'i' || etc not work? I have to restate the variable each time.


const sumFunction = function (sumArray) {
let sum = 0;
for (let i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];
}
return sum
}
console.log(sumFunction([1,2,3,4]));

//

const multiplyFunction = function (multiplyArray) {
let product = 1;
for (let i = 0; i < multiplyArray.length; i++) {
    product *= multiplyArray[i];
}
return product
}

console.log(multiplyFunction([1,2,3,4]));

//

const stringReverser = function(reverseString) {
    for (let i = reverseString.length; i > -1; i--) {
        console.log(reverseString[i]);
    }    
}
stringReverser(['s', 't', 'r', 'i', 'n', 'g']);
stringReverser(['h', 'i', 'c', 'c', 'u', 'p']);
//

const findLongestWord = []
