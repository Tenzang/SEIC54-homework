// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    // This function returns the largest number in a given array.
    const [first, ...last] = arr
    if (arr.length === 1) return first //Base case
    return first > findMax(last) 
    ? first
    : findMax(last)
}

function factorial(num){
    // This function returns the factorial of a given number.
    if (num < 0) {
        throw new Error("num must not be negative");
    } //base case
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function fibonacci(n,memo){
    // This function returns the Nth number in the fibonacci sequence.
    memo = memo || {};
    if (memo[n]) {
        return memo[n];
    } 
    if (n <= 2) {
        return 1;
    }

    return memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
    
}

function coinFlips(){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(){
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
    letterCombinations
}