//bank balance
const bankAccount = {
    checking: 300,
    savings: 300
};

//jQuery
$(document).ready(function(){
    //initial balance
    $('div#savings-balance').html('$' + bankAccount.savings);
    $('div#checking-balance').html('$' + bankAccount.checking);
    //checking deposit button
    $("#checking-deposit").click(function(){
        var cDeposit = $("#checking-amount").val();
        deposit (cDeposit, 'checking');
        $('div#checking-balance').html('$' + bankAccount.checking);
    });
    //checking withdraw button
    $("#checking-withdraw").click(function(){
        var cWithdraw = $("#checking-amount").val();
        withdraw (cWithdraw, 'checking');
        $('div#checking-balance').html('$' + bankAccount.checking);
    });
    //saving deposit button
    $("#savings-deposit").click(function(){
        var sDeposit = $("#savings-amount").val();
        deposit (sDeposit, 'savings');
        $('div#savings-balance').html('$' + bankAccount.savings);
    });
    //saving withdraw button
    $("#savings-withdraw").click(function(){
        var sWithdraw = $("#savings-amount").val();
        withdraw (sWithdraw, 'savings');
        $('div#savings-balance').html('$' + bankAccount.savings);
    });
    //balance = 0 > background = red
    $(':button').click(function() {
        if (bankAccount.savings + bankAccount.checking===0) {
                $('.balance').addClass('zero');
                $('body').addClass('alert');
            } else {
                $('.balance').removeClass('zero');
                $('body').removeClass('alert');
            }
        });
    //money over 5000 > money background
    $(':button').click(function() {
        if (bankAccount.savings>=5000 || bankAccount.checking >=5000) {
                $('body').addClass('money');
            } else {
                $('body').removeClass('money');
            }
        });

});

//Bank Functions
//deposit money
const deposit = function (amount, account) {
    if (amount>0) {
        bankAccount[account] += Number(amount);
    }
};

//withdraw money
const withdraw = function (amount, account) {
    if (overdraw(amount)) {
        bankAccount[account] -= Number(amount);
    } else {
        alert ('Youre broke');
    }
};

//check for overdraft
const overdraw = function (amount) {
    if (bankAccount.checking + bankAccount.savings > 0) {
        return true
    }
}