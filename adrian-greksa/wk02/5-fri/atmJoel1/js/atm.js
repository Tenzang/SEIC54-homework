console.log('is this JS working?');

const checkForZero = function () {
    // console.log('checking for zeroes');
    $('.zero').removeClass('zero');
    const checkingBalance = + $('#checking-balance').text().slice(1);
    if (checkingBalance <= 0) {
        $('#checking-balance').addClass('zero');
    }

    const savingsBalance = + $('#savings-balance').text().slice(1);
    if (savingsBalance <= 0) {
        $('#savings-balance').addClass('zero');
    }
};


$(document).ready( function () {
    
    $('#checking-deposit').on('click', function () {
        // get the current balance
        const currentBalance = + $('#checking-balance').text().slice(1); //parseInt, parseFloat, Number, +

        // get the deposit amount
        const depositAmount = + $('checking-amount').val();
        
        // add the two
        const newBalance = currentBalance + depositAmount;
        
        // update the balance on screen
        $('#checking-balance').text('$' + newBalance);
        checkForZero();
    });

    $('#checking-withdraw').on('click', function () {
        // console.log('withdraw') check if click works
        
        //get the current balance
        const currentBalance = + $('#checking-balance').text().slice(1);

        // get the withdraw amount
        const withdrawAmount = + $('checking-amount').val();
        const otherBalance = + $('#savings-balance').text().slice(1);
        const totalBalance = currentBalance + otherBalance;
        const newBalance = currentBalance - withdrawAmount;
        if (newBalance >= 0) {
            $('#checking-balance').text('$' + newBalance);
        } else if (withdrawAmount <= totalBalance) {
            $('#checking-balance').text('$0');
            $('#savings-balance').text('$' + (otherBalance + newBalance));
        }
        checkForZero();

    });

    $('#savings-deposit').on('click', function () {
        // get the current balance
        const currentBalance = + $('#savings-balance').text().slice(1); //parseInt, parseFloat, Number, +

        // get the deposit amount
        const depositAmount = + $('savings-amount').val();
        
        // add the two
        const newBalance = currentBalance + depositAmount;
        
        // update the balance on screen
        $('#savings-balance').text('$' + newBalance);
        checkForZero();
    });

    $('#savings-withdraw').on('click', function () {
        // console.log('withdraw') check if click works
        
        //get the current balance
        const currentBalance = + $('#savings-balance').text().slice(1);

        // get the withdraw amount
        const withdrawAmount = + $('savings-amount').val();

        const otherBalance = + $('#savings-balance').text().slice(1);
        const totalBalance = currentBalance + otherBalance;
        const newBalance = currentBalance - withdrawAmount;
        if (newBalance >= 0) {
            $('#savings-balance').text('$' + newBalance);
        } else if (withdrawAmount <= totalBalance) {
            $('#savings-balance').text('$0');
            $('#checking-balance').text('$' + (otherBalance + newBalance));
        }
        checkForZero();
    });


});

console.log('has this function ended?');