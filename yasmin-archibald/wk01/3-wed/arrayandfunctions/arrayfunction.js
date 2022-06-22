// Array Functions and Bonus ( https://gist.github.com/wofockham/61148df9403b3cfc2138 )

// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

//1.
const maxOfTwoNumbers = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log(`This is the max of the two numbers ${maxOfTwoNumbers(1, 9)}`);
console.log(`This is the max of the two numbers ${maxOfTwoNumbers(100, 9)}`);
console.log(`This is the max of the two numbers ${maxOfTwoNumbers(199, 88)}`);
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

//2.
const maxOfThree = function (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};
console.log(maxOfThree(100, 80, 4.9));
console.log(maxOfThree(9000, 50, 478392));
console.log(maxOfThree(9000, 5736, 2));
console.log(maxOfThree(1, 2, 10));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

//3.
const vowelOrNot = function (x) {
  let vowel = ["a", "e", "i", "o", "u"];
  let answer;
  for (i = 0; i < vowel.length; i++) {
    if (x === i) {
      answer = true;
    } else {
      answer = false;
    }
  }
  console.log(answer);
};
vowelOrNot("a");
// the hardest part of the above was that i thought it was broken and I couldn't understand why. I changed heaps of things before i realised i had 'i > vowel.length' instead of 'i < vowel.length' ):< !

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

//4. 
const sumArray = function (array1) {
  //I don't know why this works. I stole it from mozilla and tinkered with it, broke it and fixed it a few times and then decided this version would do fine.
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  console.log(`Your array summed togeter is ${sumWithInitial}`);
  // expected output: 10
};
sumArray([1, 2, 3, 4]);

//5. 
const multiplyArray = function (array) {
  // I don't understand how it works this time either but it took a lot of tinkering to make it work so I'm still proud of it.
  sum = array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
  console.log(`The result of all array items multiplied is ${sum}`);
  return sum;
};
multiplyArray([1, 2, 3, 4]);
// Bonus

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

//6. 
const reverseString = function (str) {
  let newString = ""; // hmm.. let newString on it's own breaks this.
  for (let i = str.length - 1; i >= 0; i--) {
    //this is weird but it works?
    newString += str[i];
  }
  return newString;
};
console.log(`Reversed string = ${reverseString("hello world")}`); //yay?!
//const chars = str.split('');
//console.log(chars[8]);

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

//6.
const findLongestWord = function (array) {
  // i remember doing this once before. I need to define the first item in the array as the longest word and then compare every new item to it and replace it if its longer
  let longestWord = "";
  for (let i = 0; i < array.length; i++) {
    longestWord = 0;
    if (longestWord.length < array[i].length) {
      longestWord = arr[i];
    }
  } //This isn't working and I am very tired.
  console.log(longestWord);
  return longestWord;
};
const names = [
  "Harry",
  "Beth",
  "Bartholemuedsafdas",
  "Anevenlongernamestly the third",
];
console.log(findLongestWord(names));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

//8. 
const filterLongWords = function (array) {
  //Bones of the function I would write if I were a better programmer
  //
  console.log(`Here's the array of words longer than ${i}, ${longWordArray}`);
  return longWordArray;
};
