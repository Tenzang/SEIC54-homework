
const render = function(){
    //This updates every single part of the DOM with teh latest
    //values from out accounts Object

    $('#checking-balance').text('$' + accounts.checkingBalance);
    $('#savings-balance').text('$' + accounts.savingsBalance)

    $('.zero').removeClass('zero')
}

$(document).ready(function(){
    $('checking-deposit').on('click', function (){
        const amount = $ ('#checking-amount').val();
        accounts.checkingDeposit(amount);
        render();
    });

    $('#checking-withdraw').on('click', function(){
        const amount = $('#checking-amount').val();
        accounts.checkingWithdraw(amount);
        render()
    });

    $('#savings-deposit').on('click', function(){
        const amount = $('#savings-amount').val();
        amount.savingsDeposit(amount)
        render()
    });

    $('#savings-withdraw').on('click', function(){
        const amount = $('#savings-amount').val();
        accounts.savingsWithdraw(amount);
        render();
    })

})