// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array){
    // This function returns the largest number in a given array.
    if (array.length === 1) 
    return array[0];
    
    const indexToRemove =  (array[0] < array[1]) ? 0 : 1;
        array.splice(indexToRemove, 1);

    return findMax(array);

}

function factorial(int){
    if (int == 1 || int == 0) {
        return int * 1;
    } else {
        return int * factorial(int-1);
    }
}

function fibonacci(int, n1 = 0, n2 = 1, counter = 1){
    if (counter === int) {
        return next;
    }
    next = n1 + n2;
    fibonacci(int, n1 = n2, n2 = next, counter + 1);
}

function coinFlips(n){

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

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"] ??
}

module.exports = {
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations
}