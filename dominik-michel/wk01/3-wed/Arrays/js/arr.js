// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers=function(num1, num2) {
    if(num1>num2){
        return `${num1} is bigger then ${num2}`;
    } else if(num2>num1){
        return `${num2} is bigger then ${num1}`;
    }else{
        return `We have two matching numbers!`
    }
}
console.log(maxOfTwoNumbers(10,5))
console.log(maxOfTwoNumbers(10,15))
console.log(maxOfTwoNumbers(10,10))

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree=function(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return `${num1} is the highest number`;
    }else if(num2>num1 &&num2>num3){
        return `${num2} is the highest number`;
    }else{
        return `${num3} is the highest number`
    }
}
console.log(maxOfThree(12,45,5));
console.log(maxOfThree(12,1,2));
console.log(maxOfThree(12,45,50));

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelCheck= function(chr){
    if(chr=="a" ||chr=="e" || chr=="i" || chr=="o" ||chr=="u"){
    return true
 }
    return false
 }

console.log(vowelCheck("a"));
console.log(vowelCheck("b"));
console.log(vowelCheck("e"));


// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.


const sumArray= function(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
         sum += arr[i];
       
    }
    return sum
}
console.log(sumArray([1,2,3,4,5]))

const multiplyArray=function(arr){
    var total=1
    for (let i=0; i<arr.length; i++){
        total*=arr[i];
 } 
 return total;
 
}
console.log(multiplyArray([1,2,3,4]))

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString=function(str){
    const arrayStrings = str.split("")
    const reverseString = arrayStrings.reverse();
    const joinString = reverseString.join("");
    return joinString;
}
console.log(reverseString("Hello"));
console.log(reverseString("Apple"));
console.log(reverseString("Tree"));


// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.



const findLongestWord=function(strs){
    let longest = '';
    for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > longest.length)
    longest = strs[i];
    }
    return longest;
    }
console.log(findLongestWord(["Apple", "Bannana", "Kiwi"]))


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

// const filterLongWords= function(strs){
//     for(let i=0;i<str.length;i++){
//         if()
//     }
// }
// console.log(filterLongWords(["Apple", "Bannana", "Kiwi",1]))

