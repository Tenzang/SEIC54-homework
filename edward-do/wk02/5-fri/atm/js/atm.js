$(document).ready(function (){
    const toggleZero = function () {
        $('.balance').each(function () {
            if ($(this).text() === '$0') {
                $(this).parent().addClass('zero');
            } else {
                $(this).parent().removeClass('zero');
            }
        })
    };

    let checkingBalance = 0;
    $('#checking-deposit').on('click', function() {
        const depositAmount = parseInt($('#checking-amount').val());
        checkingBalance += depositAmount;
        $('#checking-balance').text(`$${checkingBalance}`);
        toggleZero();
    });

    $('#checking-withdraw').on('click', function() {
        const withdrawAmount = parseInt($('#checking-amount').val());
        if (withdrawAmount <= checkingBalance ) {
            checkingBalance -= withdrawAmount;
        } else {
            let overdraftAmount = withdrawAmount - checkingBalance;
            if (overdraftAmount <= savingsBalance) {
            savingsBalance -= overdraftAmount;
            checkingBalance = 0;
            }
        };
        $('#checking-balance').text(`$${checkingBalance}`);
        $('#savings-balance').text(`$${savingsBalance}`);
        toggleZero();
    });

    let savingsBalance = 0;
    $('#savings-deposit').on('click', function() {
        const depositAmount = parseInt($('#savings-amount').val());
        savingsBalance += depositAmount;
        $('#savings-balance').text(`$${savingsBalance}`);
        toggleZero();
    });

    $('#savings-withdraw').on('click', function() {
        const withdrawAmount = parseInt($('#savings-amount').val());
        if (withdrawAmount <= savingsBalance ) {
            savingsBalance -= withdrawAmount;
        } else {
            let overdraftAmount = withdrawAmount - savingsBalance;
            if (overdraftAmount <= checkingBalance) {
            checkingBalance -= overdraftAmount;
            savingsBalance = 0;
            }
        };
        $('#savings-balance').text(`$${savingsBalance}`);
        $('#checking-balance').text(`$${checkingBalance}`);
        toggleZero();
    });
});