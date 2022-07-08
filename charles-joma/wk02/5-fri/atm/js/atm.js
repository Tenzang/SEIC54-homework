


let savings = 0;
let checking = 0;

const deposit = function(amount, account){
    if(account === 'savings'){
       savings += amount
       return savings
    } else if(account === 'checking'){
        checking += amount
        return checking
    }
}

const withdraw = function(amount, account){
    if(account === 'savings' && savings >= amount){
        savings -= amount
        return savings
    } else if(account === 'checking' && checking >= amount){
        checking -= amount
        return checking
    } else {
        return `Not enough money babe`
    }
}

const overdraft = function(amount, account){
    let extract = 0;
    if(account === 'savings' && savings <= amount){
        let remainder = savings - amount // will be the negatives if youve less monet than wanted out
        savings -= amount // this takes the amount out of savings, leaving it in hhe negatives
        savings -= remainder // This adds the remainder back onto savings to level it out to zero,
        //so now we have withdrawn the money from savings
        extract = amount // we set the amount to this variable
        if(checking > 0){ // if the checking account has money in it
            savings += withdraw(extract, 'checking');
            // checking -= withdraw(extract, 'checking');
            return savings
        } 
    } else if(account === 'checking' && checking <= amount){
        let remainder = checking - amount;
        checking -= amount
        checking -= remainder
        extract = amount
        if(savings > 0){
           checking += withdraw(extract, 'savings');
           //savings -= withdraw(extract, 'savings');
           return checking
        }
    }
}

let $leftRedContainer = $('#checking');
let $rightRedContainer = $('#savings')
let $checkDepBut = $(' #checking-deposit');

$checkDepBut.on('click', function(){
   //checking += parseInt($('#checking-amount').val());
   deposit(parseInt($('#checking-amount').val()), 'checking')
   $checkingBalanceDisplay.html(`$${checking}`);

   if(checking <= 0){
    $leftRedContainer.css({'background-color':'red'})
} else {
    $leftRedContainer.css({'background-color':'#6C9A74'})
    }
});

let $checkWithButt = $('#checking-withdraw');

$checkWithButt.on('click', function(){
    //checking -= parseInt($('#checking-amount').val());
    withdraw(parseInt($('#checking-amount').val()), 'checking');
    overdraft(parseInt($('#checking-amount').val()), 'checking');
    
    $savingsBalanceDisplay.html(`$${savings}`);


    if(checking <= 0){
        $leftRedContainer.css({'background-color':'red'})
    } else {
        $leftRedContainer.css({'background-color':'#6C9A74'})
    }
});

let $checkingBalanceDisplay = $('#checking-balance');

let $savingsBalanceDisplay = $("#savings-balance");

let $savDepositButt = $('#savings-deposit');

$savDepositButt.on('click', function(){
    //savings += parseInt($('#savings-amount').val());
    deposit(parseInt($('#savings-amount').val()), 'savings')
    $savingsBalanceDisplay.html(`$${savings}`)


    if(savings <= 0){
        $rightRedContainer.css({'background-color':'red'})
    } else {
        $rightRedContainer.css({'background-color':'#6C9A74'})
    }
});

let $savWithdrawButt = $('#savings-withdraw');

$savWithdrawButt.on('click', function(){
    //savings -= parseInt($('#savings-amount').val());
    withdraw(parseInt($('#savings-amount').val()), 'savings');
    overdraft(parseInt($('#savings-amount').val()), 'savings');

    $checkingBalanceDisplay.html(`$${checking}`);
    
    if(savings <= 0){
        $rightRedContainer.css({'background-color':'red'})
    } else {
        $rightRedContainer.css({'background-color':'#6C9A74'})
    }
});












