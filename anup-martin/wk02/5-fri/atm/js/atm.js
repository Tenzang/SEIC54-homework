$(document).ready(function () {
    $('#checking-deposit').on('click', function(){
        const currentBalance = + $('#checking-balance').text.slice(1); // removing the $ sign//
        const depositAmount = + $ ('#checking-amount').val();
        const newBalance = currentBalance + depositAmount;
        $('#checking-balance').text('$' + newBalance);
    });

    $('#checking-withdraw').on('click', function(){
        const currentBalance = + $('#checking-balance').text.slice(1);//get the current balance//
        const withdrawAmount = + $('#checking-amount').val();//withdraw amount//
        const newbalance = currentBalance-withdrawAmount;
        $('#checking-balance').text('$ + newbalance');
    });
    $('savings-deposit').on('click', function (){
        const currentBalance = + $('savings-balance').text.slice(1);
        const depositAmount = + $('savings-amount').val();
        const newBalance = currentBalance + depositAmount;
        $('#savings-balance').text('$' + newBalance);
    });
});