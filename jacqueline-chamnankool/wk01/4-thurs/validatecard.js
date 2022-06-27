function validateCreditCard(str, expiryDate) {
    //just for formatting in output
    console.log("-".repeat(75));

    //Bonus #1: removes dashes if any
    const cardNum = str.replace(/\D/g, "");
    
    //check if card is expired first before checking number
    if (!checkExpiry(expiryDate)) {
        return "Card expired.";
    }
    //run luhn's algorithm
    if (luhnsAlgorithm(cardNum)) {
        return {
            valid: true,
            number: str
        };
    } else {
        //gets specific error of original string for output
        let e = getErrorMessage(str);
        return {
            valid: false,
            number: str,
            error: e
        };
    }
}

//Bonus #2: more advanced; luhn's
function luhnsAlgorithm(numbers) {
    let checksum = 0;
    let value;

    for (let i = 0; i < 16; i++) {
        //this is to double every other digit to get the check digit
        if (i % 2 == 0) {
            value = 2 * numbers[i];
            //to prevent double digits
            if (value >= 10) {
                value = (Math.floor(value / 10) + value % 10);
            }
        } else {
            value = +numbers[i];
        }
        checksum += value;
    }

    return (checksum % 10 == 0);
}

//Bonus #2: more advanced; expiry
function checkExpiry(expiryDate) {
    const expiryDateSplit = expiryDate.split("/");
    const expiryMonth = expiryDateSplit[0];
    const expiryYear = expiryDateSplit[1];
    //get today's date for comparison
    const today = new Date();
    const thisMonth = String(today.getMonth() + 1).padStart(2, '0');
    const thisYear = today.getFullYear();

    if (thisYear > expiryYear || thisYear <= expiryYear && thisMonth >= expiryMonth) {
        return false;
    } else {
        return true;
    }
}

function getErrorMessage(str) {
    //invalid characters
    if (/[^0-9-\s]+/.test(str)) {
        return "invalid_characters";
    }

    //only one type of number
    let first = str[0];
    let sameDigits = true;
    //sum less than 16
    let digitSum = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== first) {
            sameDigits = false;
            break;
        }

        digitSum += parseInt(str[i]);
    }

    if (sameDigits) {
        return "only_one_type_of_number";
    }

    if (digitSum < 16) {
        return "sum_less_than_16";
    }

    //odd final digit
    if (str[str.length - 1] % 2 !== 0) {
        return "odd_final_number";
    }

    /* based off of luhn's algorithm in which you calculate 
    the checksum % 10 and if the value is 0 then the
    card number is valid */
    return "nonzero_checksum";
}

//valid
console.log(validateCreditCard("9999777788880000", "09/2023"));
console.log(validateCreditCard("9999-7777-8888-0000", "10/2024"));

//invalid characters
console.log(validateCreditCard("a92332119c011112", "10/2025"));
//only one type of number
console.log(validateCreditCard("4444444444444444", "11/2024"));
//less than 16 sum
console.log(validateCreditCard("1111111111111110", "12/2023"));
//ends w odd digit
console.log(validateCreditCard("6666666666666661", "07/2024"));
console.log(validateCreditCard("9999777788880003", "08/2024"));
//valid cardnum but expired
console.log(validateCreditCard("9999777788880000", "09/2021"));
//nonzero checksum
console.log(validateCreditCard("6666666666661666", "10/2023"));
console.log(validateCreditCard("6666-6666-6666-1666", "12/2025"));

/* 
sources for luhn's
* https://planetcalc.com/2464/ => helped a lot in understanding how it works
* https://stackoverflow.com/questions/19249554/advice-on-how-to-code-luhn-credit-card-validation-with-javascript
* https://stackoverflow.com/questions/14905766/implementing-luhn-algorithm-in-javascript 
*/
