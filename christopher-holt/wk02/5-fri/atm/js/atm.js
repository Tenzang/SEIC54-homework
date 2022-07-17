$(document).ready(function () {
    let checkingDeposit = 0;
    let checkingWithdraw = 0;
    let checkingTotal = 0;

    let savingsAmount = 0;
    let savingsWithdraw = 0;
    let savingsTotal = 0;

    // When you click the depost button, it takes the input and shows that total in the checking balance window
    $('#checking-deposit').on('click', function() {
        checkingTotal += parseInt(checkingDeposit);
        $('#checking-balance').text('$' + checkingTotal); 
        $('.account#checking').removeClass('zero');
    });

    $('#checking-withdraw').on('click', function() {
        if (checkingTotal > 0) {
            checkingTotal -= parseInt(checkingWithdraw);
            $('#checking-balance').text('$' + checkingTotal);
        } else if (savingsTotal > 0) {
            $('.account#checking').removeClass('zero');
            savingsTotal -= parseInt(checkingWithdraw);
            $('#savings-balance').text('$' + savingsTotal);
            checkingTotal += parseInt(checkingWithdraw);
            $('#checking-balance').text('$' + checkingTotal);
        } else if (savingsTotal === 0 && checkingTotal === 0) {
            $('.account#checking').addClass('zero');
        }
    });

    $('#checking-amount').on('keyup', function() {
        checkingDeposit = $(this).val(); // this = the element on which the key up was triggered
        checkingWithdraw = $(this).val();
    });

    $('#savings-deposit').on('click', function() {
        savingsTotal += parseInt(savingsAmount);        
        $('#savings-balance').text('$' + savingsTotal);
        $('.account#savings').removeClass('zero');
    });

    $('#savings-withdraw').on('click', function() {
        if (savingsTotal > 0) {
            savingsTotal -= parseInt(savingsWithdraw);
            $('#savings-balance').text('$' + savingsTotal); 
        } else if (checkingTotal > 0) {
            $('.account#savings').removeClass('zero');
            checkingTotal -= parseInt(savingsWithdraw);
            $('#checking-balance').text('$' + checkingTotal);
            savingsTotal += parseInt(savingsWithdraw);
            $('#savings-balance').text('$' + savingsTotal);
        } else if (savingsTotal === 0 && checkingTotal === 0) {
            $('.account#savings').addClass('zero');
        }
    });

    $('#savings-amount').on('keyup', function() {
        savingsAmount = $(this).val(); // this = the element on which the key up was triggered
        savingsWithdraw = $(this).val();
    });
});