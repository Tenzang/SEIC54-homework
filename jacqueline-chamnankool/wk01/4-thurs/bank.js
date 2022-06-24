/* created an accountNum property b/c i don't want to assume all 
names will be unique for transferring, but the logic is
pretty much the same */
const bank = [
    {
        accountNum: 1475243,
        ownerName: "John Smith",
        balance: 342
    },
    {
        accountNum: 3421743,
        ownerName: "Jane Doe",
        balance: 10389
    },
    {
        accountNum: 8873675,
        ownerName: "James Miller",
        balance: 8427
    },
];

function totalBalance(bank) {
    let total = 0;
    for (const account of bank) {
        total += account.balance;
    }

    return total;
}

function addAccount(num, name, balance) {
    const newAccount = {
        accountNum: num,
        ownerName: name,
        balance: balance
    };

    bank.push(addAccount);

    return `New account added successfully.`;
}

function getAccount(num) {
    //gets the user's account based off of their account number
    //this assumes the user always exists :^)
    const filter = bank.filter(function(account) {
        return account.accountNum === num;
    });
    //returns the applicable account object
    return filter[0];
}

function deposit(amount, accountNum) {
    const account = getAccount(accountNum);
    account.balance += amount;
    return `Deposit successful.\n→ New balance: $${account.balance}`;
}

function withdraw(amount, accountNum) {
    const account = getAccount(accountNum);

    if (account.balance < amount) {
        return `Error: Not enough funds.\n→ Current balance: $${account.balance}`;
    } else {
        account.balance -= amount;
        return `Withdraw successful.\n→ New balance: $${account.balance}`;
    }
}

function transfer(amount, accountFrom, accountTo) {
    const from = getAccount(accountFrom);
    const to = getAccount(accountTo);

    //making sure the person has enough funds to send first
    if (from.balance < amount) {
        return `Error: Not enough funds.\n→ Current balance: $${from.balance}`;
    } else {
        from.balance -= amount;
        to.balance += amount;
        return `Transfer successful.\n→ New balance: $${from.balance}`;
    }
}

function printDashes() {
    console.log("-".repeat(50));
}

//total of all balances
printDashes();
console.log(`Total of all balances: $${totalBalance(bank)}`);
printDashes();
console.log(addAccount(4398104, "Amy Page", 999));
printDashes();
//John Smith depositing $10 into account
console.log(deposit(10,1475243));
printDashes();
//Jane doe attempting to overdraw, then withdrawing proper amount
console.log(withdraw(10400,3421743));
printDashes();
console.log(withdraw(400,3421743));
printDashes();
console.log(transfer(200,3421743,8873675));

//...i am sorry for the random nonsensical numbers
