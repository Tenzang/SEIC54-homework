// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions which accept a rectangle object as an argument:

// isSquare - Returns whether the rectangle is a square or not

const rectangleA = {
    length: 4,
    width: 4
  };

const isSquare = function(rectangle) {
    if (rectangle.length === rectangle.width) {
        return 'The rectange is also a square';
    } else {
        return 'The rectange is not a square';
    }
};

console.log(isSquare(rectangleA));

// area - Returns the area of the rectangle

const area = function(rectangle) {
    return `The area of this rectangle is ${rectangle.length * rectangle.width};`
}

console.log(area(rectangleA));

// perimeter - Returns the perimeter of the rectangle

const perimeter = function(rectangle) {
    return `The perimeter of this rectangle is ${(rectangle.length * 2) + (rectangle.width * 2)}`;
}

console.log(perimeter(rectangleA));

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:

const triangleA = {
    sideA: 4,
    sideB: 3,
    sideC: 5
  };

// isEquilateral - Returns whether the triangle is equilateral or not

const isEquilateral = function(triangle) {
    if (triangle.sideA === triangle.sideB && triangle.sideC === triangle.sideA) {
        return 'The triangle is equal';
    } else {
        return 'The triangle is not equal';
    }
};

console.log(isEquilateral(triangleA));

// isIsosceles - Returns whether the triangle is isosceles or not
// X = Y or X = Z or Y = Z

const isIsosceles = function (triangle) {
    if (triangle.sideA === triangle.sideB && triangle.sideC === triangle.sideA) {
        return 'The triangle is equal';
    }
        else if (triangle.sideA === triangle.sideB ||    triangle.sideA === triangle.sideC ||       triangle.sideB === triangle.sideC) {
        return 'This triangle is Isoceles';
        } else {
        return 'This triangle is not Isoceles';
    }

};

console.log(isIsosceles(triangleA));

// area - Returns the area of the Triangle
// Area of a Triangle = s = (a+b+c) / 2 // A = sqrt s(s-a)(s-b)(s-c)
const areaTriangle = function (triangle) {
    const halfPerimeter = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
    const area = Math.sqrt(halfPerimeter * (halfPerimeter - triangle.sideA) * (halfPerimeter - triangle.sideB) * (halfPerimeter - triangle.sideC));

    return area;
}

console.log(areaTriangle(triangleA));

// isObtuse - Returns whether the triangle is obtuse or not
// Z^2 > (X^2+ Y^2)
const isObtuse = function (triangle) {
    if (triangle.sideA * triangle.sideA > ((triangle.sideB * triangle.sideB) + (triangle.sideC * triangle.sideC))) {
        return 'This triangle is obtuse';
    } else {
        return 'This triangle is not obtuse';
    }
}

// console.log(isObtuse(triangleA));

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// // Input
// const cartForParty = {  
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };

// // Output
// cashRegister(cartForParty)); // 60.55

const shopping = {
    Kiwi: 2,
    Milk: 1.40,
    Bread: 5.32,
    IceCream: 10.50,
    Dinosaur: 100.40
};

const cashRegister = function(shoppingCart) {
    return `$${shoppingCart.Kiwi + shoppingCart.Milk + shoppingCart.Bread + shoppingCart.IceCream + shoppingCart.Dinosaur}`;
};

console.log(cashRegister(shopping));

// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:

// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:

// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true

const validateCreditCard = function(creditCardNumber) {
    
    // Number must be 16 digits in length
    if (creditCardNumber.length !== 16){
        return false;
    }

    // All the digits must be numbers
    for(let i = 0; i < creditCardNumber.length; i++) {
        let currentNumber = creditCardNumber[i]; // Store the current [i] digit

        currentNumber = Number.parseInt(currentNumber); // turn the digit from a string into an integer

        if(!Number.isInteger(currentNumber)) { //check that the digit is a number
            return false;
        }
    }

    // Number must be composed of at least two different digits (all the digits cannot be the same)
    let obj = {};
    for(let i = 0; i < creditCardNumber.length; i++) {
        obj[creditCardNumber[i]] = true;
    }
    if(Object.keys(obj).length < 2) {
        return false;
    }

    // The final digit must be even
    if(creditCardNumber[creditCardNumber.length - 1] % 2 !== 0) {
        return false
    }

    // The sum of all the digits must be greater than 16
    let sum = 0;
    for(let i = 0; i < creditCardNumber.length; i++) {
        sum += Number(creditCardNumber[i]);
        }
        if(sum <= 16) {
            return false;
        } else {
            return true;
        }
};

console.log(validateCreditCard('9999777788880000')); // true
console.log(validateCreditCard('6666666666661666')); // true
console.log(validateCreditCard('a92332119c011112')); // false, has letters in it
console.log(validateCreditCard('4444444444444444')); // false, only one type of number
console.log(validateCreditCard('1111111111111110')); // false, sum less thn 16
console.log(validateCreditCard('6666666666666661')); // false, ends with a odd number

// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips
// Don't overthink this. Shorter code is probably the answer.

const Accounts = {
    currentBalance: 1000,
    ownersName: ['John'],
    priceChange: []
};

const Bank = function() {
    console.log(`Welcome ${Accounts.ownersName[0]} your Bank Balance is: $${Accounts.currentBalance}`);
    Deposit(205);
    console.log(`${Accounts.ownersName[0]} your Bank Balance is now: $${Accounts.currentBalance}`); // Would like to be able to show the value of the amount that was depositing
    Withdraw(100);
    console.log(`${Accounts.ownersName[0]} your Bank Balance is now: $${Accounts.currentBalance}`); // Would like to be able to show the value of the amount that was withdrawn
    addCustomer('James');
    console.log(Accounts.ownersName[1]); // Add a new Customer Name to the Object
}

const Deposit = function(amount) { // Deposit money into account
    Accounts.currentBalance = Accounts.currentBalance + amount;
    updateAccount(amount);
}

const Withdraw = function(amount) { // Withdraw money from account
    Accounts.currentBalance = Accounts.currentBalance - amount;
    updateAccount(amount);
}

const updateAccount = function(amount) { // Update when the bank balance changes
    return Accounts.priceChange.push(amount);
}

const addCustomer = function(name) {
    return Accounts.ownersName.push(`Welcome new customer: ${name}`);
}

Bank();