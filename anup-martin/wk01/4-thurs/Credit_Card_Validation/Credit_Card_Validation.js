// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// // - The final digit must be even
// - The sum of all the digits must be greater than 16

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

const validateCreditCard = function(creditCardNumber) {
    let cardCharacters = creditCardNumbers.replaceAll(" ", "-") //replacing "spacing" & "-"//
    console.log(cardCharacters);
};

if (cardCharacters.lenght === 16 && cardCharacters.isInteger) { //check if 16 & are numbers?//
    if (checkUnique()) {
        if (cardCharacters [15] % 2 === 0) {  //16th digit divided will be even//
            if ( )
        }
    }

};

const checkUnique = function () {
    for (i = 0; i < 16; i++ ) {
        let x = true;
        if (cardCharacters [0] === cardCharacters [i]) {
            let x = false;
        } else {
            let x = false;
        }
    }
};
    
const checkSum = function( ){
    let sum = "";
    for (i = 0; i < 16; i++) {
        sum += Number.cardCharacterscharacters[i]
    }
};

validateCreditCard('9999-9999-8888-0000');
validateCreditCard('6666-6666-6666-1666');
validateCreditCard('1111-1111-1111-1110');
validateCreditCard('6666-6666-6666-6661');

console.log(checkSum);

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.