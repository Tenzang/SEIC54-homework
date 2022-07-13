const accounts = {
    checkingBalance : 0,
    savingsBalanace: 0,

    total: function (){
        return this.checkingBalance = this.savingsBalanace;

    },

    checkingDeposit: function (amount){
        amount = Number (amount);
        this.checkingBalance += amount
    },

    checkingWithdraw: function (amount) {
        amount = Number (amount);
        this.checkingBalance -= amount
    },

    savingsDesposit: function (amount){
        amount = Number(amount);
        this.savingsBalanace += amount;
    },

    savingsWithdraw: function (amount) {
        amount = Number (amount);
        this.savingsBalance -= amount
    },

}




