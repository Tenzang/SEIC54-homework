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
        //honestly I can probably make a function to update the divs every click but it works
        $('div#checking-balance').html('$' + bankAccount.checking);
        $('div#savings-balance').html('$' + bankAccount.savings);
    });
    //checking withdraw button
    $("#checking-withdraw").click(function(){
        var cWithdraw = $("#checking-amount").val();
        withdraw (cWithdraw, 'checking');
        $('div#checking-balance').html('$' + bankAccount.checking);
        $('div#savings-balance').html('$' + bankAccount.savings);
    });
    //saving deposit button
    $("#savings-deposit").click(function(){
        var sDeposit = $("#savings-amount").val();
        deposit (sDeposit, 'savings');
        $('div#savings-balance').html('$' + bankAccount.savings);
        $('div#checking-balance').html('$' + bankAccount.checking);
    });
    //saving withdraw button
    $("#savings-withdraw").click(function(){
        var sWithdraw = $("#savings-amount").val();
        withdraw (sWithdraw, 'savings');
        $('div#savings-balance').html('$' + bankAccount.savings);
        $('div#checking-balance').html('$' + bankAccount.checking);
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
    //if you did then adds to your account 
    if (amount>0) {
        bankAccount[account] += Number(amount);
    }
};

const withdraw = function (amount,account) {
     //checks if the account you've selected can be deducted
    if (bankAccount[account]- Number(amount) >= 0) {
        bankAccount[account] -= Number(amount);
    }
    //if youre broke in that account then it will check the sum of both accounts
    else if ((bankAccount.checking+bankAccount.savings)-Number(amount)>=0){
        //checks to see which account is being overdrawn and deducts accordingly
        if (bankAccount.savings-Number(amount)<0) {
            //stores the 'negative amount' and deducts to the other account
            let tempAcc = bankAccount.savings - Number(amount);
            bankAccount.checking += tempAcc;
        }
        //I missed an else here and it fucking took the money out twice
        else if (bankAccount.checking-Number(amount)<0) {
            let tempAcc = bankAccount.checking - Number(amount);
            bankAccount.savings += tempAcc;
        }
        
    } else {
        alert (`Warning: Insufficient funds`)
    }
};