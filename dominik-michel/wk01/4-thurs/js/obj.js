// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
const rectangle={
    length:4,
    width:4,
};
const rectangle2={
    length:4,
    width:10,
};


const isSquare=function(arg){
    if(arg.length===arg.width){
        console.log( `It is a squere`)
    }else{
        console.log(`Its not a squere `)
    }
}
isSquare(rectangle)
isSquare(rectangle2)
// * area - Returns the area of the rectangle

const area=function(arg){
    let a=arg.length*arg.width
    console.log(a)
}
area(rectangle)
area(rectangle2)

// * perimeter - Returns the perimeter of the rectangle
const perimeter=function(arg){
    let a=(arg.length+arg.width)*2
    console.log(a)
}
perimeter(rectangle)
perimeter(rectangle2)

// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```



// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

const triangle={
    sideA: 3,
    sideB: 4,
    sideC: 4
}
// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral=function(arg){
   if(arg.sideA===arg.sideB && arg.sideA===arg.sideC && arg.sideB===arg.sideC){
       console.log("It is equilateral ")
   }else{
       console.log("Its not equilateral")
   }
}
isEquilateral(triangle)

// * isIsosceles - Returns whether the triangle is isosceles or not

const isIsosceles=function(arg){
    if(arg.sideA===arg.sideB && arg.sideA!==arg.sideC || arg.sideA===arg.sideC && arg.sideA!==arg.sideB ||arg.sideA!==arg.sideB || arg.sideA!==arg.sideC){
        console.log("The triangle is isoscles")
    }else{
        console.log("The triangle is not isoscles")
    }
}
isIsosceles(triangle)
// * area - Returns the area of the Triangle
const area1=function(arg){
    let s= (arg.sideA+arg.sideB+arg.sideC)/2;
    let a= Math.sqrt(s*(s-arg.sideA)*(s-arg.sideB)*(s-arg.sideC))
    console.log(a)
}
area1(triangle)
// * isObtuse - Returns whether the triangle is obtuse or not

const isObtuse=function(arg){
    if(arg.sideA>arg.sideB || arg.sideB>arg.sideC || arg.sideA>arg.sideC ){
        console.log("The triangle is obtuse")
}else{
    console.log("The traingle is not obtuse")
 }
}
isObtuse(triangle)
// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```

// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

// ```
// // Input
const cartForParty = {  
  banana: 1.25,
  handkerchief: .99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
 };

 let val=Object.values(cartForParty)

   const cashRegister= function(arr){
        let sum=0
        for(let i=0;i<arr.length;i++){
             sum += arr[i];
           
        }
        return sum
    }
    console.log(cashRegister(val))
 
// // Output
// cashRegister(cartForParty)); // 60.55
// ```


// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

const card1 = `9812-1253-1213-2223`;
const card2 = `a923-3211-9c01-1112`;
const card3 = `1111-1111-1111-1110`;
const sumChecker = function(x){
    let sum = String.values(x);
    let total = 0;
        for (let i = 0; i < sum.length; i++) {
            total += sum[i];
        }
        return total;
};
const cardValidator = function(cardnumber) {
    let cardnumber1 = cardnumber.replace(/-/g, "");
        for (let i = 0; i < cardnumber1.length; i++) {
            if (cardnumber1.length !== 16 ){
                console.log (`bugger off (not 16 digits)`);
            } else {
              console.log ( `correct card number length`);
            }
        }
    let cardnumber2 = Array.from(String(cardnumber1), Number);
    console.log(cardnumber2);
        let total = 0;
        for (let i = 0; i < cardnumber2.length; i++) {
            total += cardnumber2[i];
            }
            if (total > 16 && total === isNaN) {
                console.log(`wooo`)
            } else {
                console.log("bugger off mate")
            }
    // function sumChecker(cardnumber2){
    //     let sum = String.values(cardnumber2);
    //     let total = 0;
    //         for (let i = 0; i < sum.length; i++) {
    //             total += sum[i];
    //         }
    //         console.log(total);
    //         console.log(‘gello’)
    //     if ( sumChecker(cardnumber2) < 16) {
    //         return `fook off`;
    //     }
    //     console.log(‘gello’)
};
console.log(cardValidator(card1));

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

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.




// # JavaScript Bank

// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write. 

// #### Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality. 

// #### Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance. 

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working. 

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance. 

// ### Tips

// Don't overthink this. Shorter code is probably the answer. 

// ## Bonus

// - Ensure that the accounts cannot have negative values. 
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts. 

// ## Additional

// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them. 