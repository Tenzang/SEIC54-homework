// # Sum Some Arrays
// Write a function that receives two arguments, both of which are Arrays and **returns** their sum. 
// - These arrays contain only **numbers**.
// - You don't know their length and they can contain both integers and floating point numbers.

// ### Example:
// ```JS
// const array1 = [2, 6.4, 3];
// const array2 = [3, 3.6, 2];

// sumArrays(array1, array2) // => 20
// ```

const array1 = [2, 6.4, 3];
const array2 = [3, 3.6, 2];

const sumArray = function ( array1, array2 ) {
    let sum = 0;

    for (let i = 0; i < array1.length; i++){
        sum += array1[i];
    }
    return sum;
};

const sumArrays = function () {
    sum = 0;

    for (i= 0; i < arguments.length; i++) {
        sum += sumArray(arguments[i]);
    } 
}
return sum;

// # Bonus
// Create another version of the above function that can accept more than two arrays as the arguments.

// **(you don't know the specific number of arguments)**.
