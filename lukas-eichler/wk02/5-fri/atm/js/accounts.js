// accounts.js is solely responsible for rules concerning bank accounts.
// for example: has methods like checkingDeposit or savingsWithdraw

// AKA called the Business Logic

// It is the single source of truth fo current balance in JS rather than the DOM

// It does know how to do overdraft protection

// This code has NEVER HEARD OF the DOM. has nothing to do with the DOM

const accounts = {
    checkingBalance: 0,
    savingsBalance: 0,

    total: function () {
        return this.checkingBalance + this.savingsBalance;
    },

    checkingDeposit: function (amount) {
        amount = Number(amount);
        this.checkingBalance += amount;
    },

    checkingWithdraw: function (amount) {
        amount = Number(amount);
        if (amount <= this.checkingbalance) {
            this.checkingBalance -= amount;
        } else if (amount <= this.total()) {
            const difference = amount - this.checkingBalance;
            this.checkingBalance = 0;
            this.savingsBalance -= difference;
        }
    },

    savingsDeposit: function (amount) {
        amount = Number(amount);
        this.savingsBalance += amount;
    },

    savingsWithdraw: function (amount) {
        amount = Number(amount);
        if (amount <= this.savingsBalance) {
            this.savingsBalance -= amount;
        } else if (amount <= this.total()) {
            const difference = amount - this.savingsBalance;
            this.savingsBalance = 0;
            this.checkingBalance -= difference;
        }
    }
};

