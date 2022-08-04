// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion
const arr = [1, 100, 3, 600, 5, 6, 99];
// function findMax(arr, index = 0, max = -Infinity) {
//   if (index === arr.length) {
//     // if 7
//     return max;
//   }
//   if (max < arr[index]) {
//     max = arr[index];
//   }
//   return findMax(arr, index + 1, max);
// }

function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const num = arr.pop();
  const largestOfTheRest = findMax(arr);

  if (num > largestOfTheRest) {
    return num;
  } else {
    return largestOfTheRest;
  }
}
findMax([1, 2, 3]);
console.log(findMax(arr));

// factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.

function factorial(n, ln = 1, f = 1) {
  // n and lesser n
  // This function returns the factorial of a given number.
  if (ln === n) {
    f *= ln;
    return f;
  } else {
    f *= ln;
    return factorial(n, ln + 1, f);
  }
}
console.log(factorial(5));

function fibonacci(n, a = 1, b = 1) {
  if (n == 1 || n == 2) {
    return b;
  } else {
    return fibonacci(n - 1, b, a + b);
  }

  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
}
console.log(fibonacci(20))

function coinFlips() {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations() {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};
