$(document).ready(function () {
    let totalSavings = 0;
    let totalChecking = 0;

    $('#checking-deposit').on('click', function () {     //Function for DEPOSITS deposits-checking account
        let addMoneyChecking = parseInt($('#checking-amount').val());
        totalChecking += parseInt(addMoneyChecking);
        updateBalance('#checking-balance', totalChecking);
    });

    $('#savings-deposit').on('click', function () {     //Function for DEPOSITS deposits-savings account
        let addMoneySavings = parseInt($('#savings-amount').val());
        totalSavings += parseInt(addMoneySavings);
        updateBalance('#savings-balance', totalSavings);
    });

    $('#checking-withdraw').on('click', function () {   //Function for WITHDRAWAL withdrawls-checking account
        withdrawChecking(parseInt($('#checking-amount').val()));
        updateBalance('#checking-balance', totalChecking);
        updateBalance('#savings-balance', totalSavings);
    });

    $('#savings-withdraw').on('click', function () {     //Function for WITHDRAWAL withdrawals-savings account
        withdrawSavings(parseInt($('#savings-amount').val()));
        updateBalance('#savings-balance', totalSavings);
    });

    const withdrawSavings = function(amount) {     //Function for overdraft protection - Savings
        if (totalSavings >= amount) {
            totalSavings -= amount;
        } else {
            return 0;
        }
    };

    const withdrawChecking = function(amount) {     //Function for overdraft protection - Checking, takes from Savings
        if (totalChecking >= amount) {
            totalChecking -= amount;
        } else if (totalChecking < amount) {
            let overdraft = withdrawSavings(amount - totalChecking);
            if ((totalSavings + totalChecking) >= amount) {
            totalChecking = 0;
        } else {
            return 0;
        }}
    };

    const updateBalance = function(balance, total) {     //Function for HTML updating + <div> colour-coding
        $(balance).text('$' + total);
            if (total === 0) {
                $(balance).css('background-color', 'red');
            }   else {
                $(balance).css('background-color', '#e3e3e3');
            }
    };
});