// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array){
    let index = 0
    let large = array[index]
    
    function rSum(){
        if (index === array.length) {
            return large;
        }
        if (array[index] > large) {
            large = array[index]
        }
        index ++
        return rSum();
    }
    return rSum();
}

function factorial(x){
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x-1)
    }
}

function fibonacci(number){
    if (number < 2) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number -2);
}

function coinFlips(flips){
    let combinations = [];
    if (flips <= 1) {
        return [''];
    }
    let flip = ["HH", "HT", "TH", "TT"]

    



    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return   the following:
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