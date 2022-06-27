// console.log('help me im stuck')
// console.log('---------------------------')

const bank = [
    {name: 'John', balance: 500},
    {name: 'Roger', balance: 300},    
];

//check if users inputted name is in the bank array
function checkAccount (userName) {
    for (const account of bank){
    if (account.name===userName) {
        return account;
    }
    } 
};

function depositMoney (userName,money) {
    //stores the output of the function into a variable that can be used in the function
    const account = checkAccount(userName);
    if (money >0) {
        account.balance += money;
        return account;
    } else {
        return `Transaction cancelled`;
    }
    //first attempt: changed after withdrawMoney was changed
    //for each object in the bank array 
    // for (const account of bank) {
    //    if (checkAccount(userName)) {
    //     account.balance += money;
    //     return bank;
    //    } 
    // } 
};

function withdrawMoney (userName, money) {
    const account = checkAccount(userName);
    if (money <= account.balance) {
        account.balance -= money;
        return account;
    } else {
        return `Insufficient funds`;
    }
    //first attempt: loop crashed when function checkAccount was invoked
    // for (const account of bank) {
    //     if (checkAccount(userName)) {
    //         if (money <= account.balance) {
    //             //is not deducting money currently
    //             console.log("flag", account.balance, money);
    //             account.balance -= money;
    //             return bank;
    //         } else {
    //             return `Insufficient funds`
    //         }
    //     }   
    // }
};

function checkBalance (userName) {
    const account = checkAccount (userName);
        if (account) {
            return account;
        } else {
            return `No account found`;
        }
};
    // for (const account of bank) {
    //     if (checkAccount(userName)) {
    //         return account
    //     } else {
    //         return 'No account found'
    //     }
    // }
// };

function createAccount (userName) {
    const account = checkAccount(userName);
    if (account===false) {
        return `You already have an account`;
    } else {
        bank.push({name: userName, balance: 0});
        return `Account ${userName} created`;
    }
};
//     for (const account of bank) {
//         if (checkAccount(userName)) {
//             return 'You already have an account'
//         } else {
//             bank.push({name: userName, balance: 0}) 
//             return account;
//         }
//     }
// };

//test
console.log(depositMoney('John',300)); // => 'John' balance becomes 800
console.log(withdrawMoney('Roger',200)); // => 'Roger' balance becomes 100
console.log(withdrawMoney('Roger',400)); // => Insufficient funds
console.log(checkBalance('John')); // => return 'John's balance
console.log(checkBalance('Arthur')); // => return no account found
console.log(createAccount('Arthur')); // => Account 'Arthur' created