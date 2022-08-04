// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){// This function returns the largest number in a given array.
    
    if (arr.length === 1) return arr[0]; // if the length of array is 1 then return it. Due to elimination that is the biggest number in the array.

    // YOU CAN USE THIS. const indexRemove = (arr[0] < arr[1]) ? 0 : 1;
    let indexRemove = 0;
        if (arr[0] > arr[1]){ // IF POS 0 is > POS 1 index to be removed is 1 or 0 if not true
            indexRemove = 1;
        } else {
            indexRemove = 0;
        }
    arr.splice(indexRemove, 1); //Remove arr[indexremove] from original array

    return findMax(arr); // RECALL FUNCTION
};

function factorial(int){// This function returns the factorial of a given number.
    if (int == 1 || int == 0) { // if int is 1 or 0 BASE CASE
        return int * 1;
    } else {
        return int * factorial(int-1); // IF NOT int times int- 1
    }
};


function fibonacci(int, n1 = 0, n2 = 1, counter = 1){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if (counter === int) {
        return next;
    }
    next = n1 + n2;
    fibonacci(int, n1 = n2, n2 = next, counter + 1);
};

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