// # Credit Card Validation

// You're starting your own credit card business. 
// You've come up with a new way to validate credit cards 
// with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers - DONE
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even - DONE
// - The sum of all the digits must be greater than 16




//FUNCTION - Verifies if = 16 long

const lengthVerified = function(num) {
    const justNum = num.replaceAll("-",""); // Replaces - with "" on num
    console.log(justNum);
    const cardLen = justNum.length; //checks the length of the string
    if(cardLen === 16){
        return("This is a valid card length");
    } else {
        return("This is not valid sorry!");
    }

};

console.log(lengthVerified(`9999-9999-8888-0000`)); //valid
console.log(lengthVerified(`a923-3211-9c01-1112`)); //Not Valid

//FUNCTION - numbers only

const numberOnly = function (num){
    for(i = 0; i < 16; i++){
        let vNum = lengthVerified(num);
        parseInt(vNum[i]);
        
        
    }
}
console.log(numberOnly(`9999-9999-8888-0000`));





// if(/^[0-9]+$/.test(intNum)){ //returns true if only digits false if not 
//     return(intNum);

//FUNCTION - Final Digit Even

const finalEven = function(num){
    if(lengthVerified(num) % 10 === 0){ //Uses previous function , modulo by 10 isolates last digit
        return("Even!");
    } else {
        return("Odd!");
    }
}

console.log(finalEven(`9999-9999-8888-0000`)); //valid
console.log(finalEven(`a923-3211-9c01-1112`)); //Not Valid

//FUNCTION - Sum of all digits function
const sumOfAllDigits = function(num) {
    const myInt = verifiedNum(num); //Removes Dashes and turns into Int
    console.log(myInt);
    let strNumArr = Array.from(String(myInt)); // Turns numbers into an array of strings
    console.log(strNumArr);
    const intNumArr = parseInt(strNumArr); //Turns array back into Int so we can calculate
    console.log(intNumArr);
    for(let i = 0; i < intNumArr.length -1; i++ ){
        console.log("Yeah this works" + i);
    }
}

console.log(sumOfAllDigits(`9999-9999-8888-0000`));

// The following credit card numbers are valid:

// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`

// The following credit card numbers are invalid:

// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```

// *Hint*: Remove the dashed from the input string before checking 
// if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced!
//  What are the rules, and what are some numbers that pass or fail? 
// Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.