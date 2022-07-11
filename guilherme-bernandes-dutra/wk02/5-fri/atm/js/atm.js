
const checkforZero = function () {
    const checkingBalance = + $('#checking-balance').text().slice(1);
    if (chcekingBalance <= 0) {
        $('#checking-balance').addClass('zero');
    }

    const savingBalance = + $('#saving-balance')
}
+$('#checking-deposit').on('click', function () {

const currentBalance = + $('#checking-balance').text().slice(1); //remove the leading $

const depositAmount = + $('#checking-amount').val();

const newBalance = currentBalance + depositAmount;

console.log(currentBalance, depositAmount, newBalance);

$('#checking-balance').text( '$' + newBalance);
});

$('#checking-withdraw').on('ckick', function () {


const currentBalance = + $('#checking-balance').text().slice(1); 
const withdrawAmount = + $('#checking-amount').val();
const newBalance = currentBalance - withdrawAmount;
if (newBalance >= 0) {
    $('#checking-balance').text('$'+newBalance);
}

}
+$('#savings-deposit').on('click', function () {

    const currentBalance = + $('#savings-balance').text().slice(1); //remove the leading $
    
    const depositAmount = + $('#savings-amount').val();
    
    const newBalance = currentBalance + depositAmount;
    
    console.log(currentBalance, depositAmount, newBalance);
    
    $('#savings-balance').text( '$' + newBalance);
    
    
    });



    // bussiness logic. + UI


    //different approach we will use the dom to store data.

    // accounts.js is solely responsible for rules concerning bank accounts.
    //(for example: checkinDeposit or savingsWithdeaw)

    //Aka the bussiness logic

    // it is the single source of trurth for currrent balances

    //it does know how to do overdraft protection

    // this code has NEVER HEARD OF the DOM

    const accounts = {
        chcekingBalance: 0,
        savingBalance: 0,
    }

    total: function() {
        return this.checkingBalance + this.savingsBalance;
    },

    checkingDeposit: function(amount) {
        amount = Number(amount);
        this.checkingBalance += amount

    },

    checkingWithdraw: function (amount) {
        amount = Number(amount);
        if (amount <= this.checkingBalance) {
            this.checkingBalance -= amount;
        }
    },

    savingsDeposit: function (amount) {
        amount = Number(amount);
        this.savingsBalance += amount;
    },

    savingsWithdraw: function  (amount) {
        amount = Number(amount);
        if (amount <= this.checkingBalance) {
        this.savingsBalance += amount;
    
    },


    
