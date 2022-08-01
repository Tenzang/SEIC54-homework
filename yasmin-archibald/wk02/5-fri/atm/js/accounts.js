// accounts.js is soley responsibel for rules comparing bank accounts
// for example: checkingDeposit or savingsWithdraw

//aka the buisness logic

// it is the single source of truth for current balances

//it does know how to do overdraft protection

//but this code has NEVER HEARD OF the dom

const obj = {
  name: 0,
  function: function () {
    this.name + 1;
  },
};

const accounts = {
  checkingBalance: 0,
  savingsBalance: 0,

  total: function () {
    return this.checkingBalance + this.savingsBalance;
  }, // a method - a function inside of an object
  checkingDeposit: function (amount) {
    amount = Number(amount);
    this.checkingBalance += amount;
  },

  checkingWithdraw: function (amount) {
    amount = Number(amount);
    if (amount <= this.checkingBalance) {
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
  },
};
