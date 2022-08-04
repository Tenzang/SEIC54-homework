// Accounts Js is solely respionsible for rules concerninig bank accounts
// Eg. doing all the math and logic 

// AKA teh busines Logic

//It is the single source of truth for current balance

// It does know to do overdraft protection

// This code has NNEVER HESRD OF THE DOM 

const accounts = {
    checkingBalnce: 0 ,
    savingsBalance: 0,

    total: function(){
        return this.checkingBalance + this.savingsBalance
    },

    checkingDeposit: function(amount){
        amount = Number(amount);
        this.checkingBalnce += amount
    },

    checkingWithdraw: function(amount){
        amount = Number(amount);
        if(amount <= this.checkingBalnce){
            this.checkingBalance -= amount;
        } else if (amount <= this.total){
            const difference = amount - this.checkingBalnce;
            this.checkingBalnce = 0;
            this.savingsBalance -= difference
        }
    },

    savingsDeposit: function(amount){
        amount = Number(amount);
        if(amount <= this.savingsBalance){
            this.savgingsBalance += amount
        }
    },

    savingsWithdraw: function(amount){
        amount = Number(amount);
        if(amount <= this.savingsBalance){
            this.savingsBalance -= amount
        } else if (amount <= this.total){
            const difference = amount - this.savingsBalance
            this.savingsBalance = 0;
            this.checkingBalance -= difference
        }
    },
    
}