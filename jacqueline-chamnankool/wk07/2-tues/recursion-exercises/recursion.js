// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr) {
  // This function returns the largest number in a given array.
  if (arr.length === 1) return arr[0];

  const indexToRemove = arr[0] < arr[1] ? 0 : 1;
  arr.splice(indexToRemove, 1);

  return findMax(arr);
}

function factorial(n) {
  // This function returns the factorial of a given number.
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function fibonacci(n) {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

function coinFlips(n) {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  const outcomes = [];

  function helper(n, record = []) {
    if (record.length === n) {
      outcomes.push(record.join(""));
      return;
    }

    helper(n, [...record, "H"]);
    helper(n, [...record, "T"]);
  }

  helper(n);
  return outcomes;
}

function letterCombinations(arr) {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
  if (arr.length === 0) return [];
  const combinations = [...arr];
  arr.forEach((letter) => {
    if (letter !== arr.last) {
      for (let subResult of letterCombinations(arr.filter((l) => l != letter))) {
        combinations.push(`${letter}${subResult}`);
      }
    }
  });

  return combinations;
}

module.exports = {
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};
