console.log ('hello is this thing on?');

function validateCreditCard (num) {
    let duplicates = [];
    let total = 0;
    //check if all numbers
    if (!Number(num)) {
        return false;
    }
    //check if 16 diits are entered
    //changed < to !== as u want to check exactly 16 not just less than
    if (num.length!==16) {
        return false;
    }
    for (i=0 ; i<num.length ; i++){
        //logs each digit into total
        total += + num[i]; 
        //records duplicates into duplicate string **cant really find a better method, open to suggestions**
        if (num[0] === num[i]) {
            duplicates += num[i];
        }
    }
    //checks duplicates string against inputted string
    if (duplicates === num) {
        return false;
    } 
    //checks the total is greater than 16
    if (total<=16) {
        return false;
        
    }
    //checks the last digit of the string is even
    if (num[num.length-1] %2 !== 0) {
        return false;
    }
    return true;
};

//test
console.log(validateCreditCard('9999999988880000')); //RETURNS TRUE
console.log(validateCreditCard('6666666666661666')); //RETURNS TRUE
console.log(validateCreditCard('a92332119c011112')); //RETURNS FALSE
console.log(validateCreditCard('4444444444444444')); //RETURNS FALSE
console.log(validateCreditCard('1111111111111110')); //RETURNS FALSE
console.log(validateCreditCard('6666666666666661')); //RETURNS FALSE
console.log(validateCreditCard('999999999999999')); //RETURNS FALSE