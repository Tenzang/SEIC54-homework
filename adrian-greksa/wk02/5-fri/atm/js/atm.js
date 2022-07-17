console.log('is this JS working?');

$(document).ready( function () {

    console.log('is this function working?');
    // a jquery variable of the checking and savings balance in number only
    let $checkingBalance = parseInt( $('#checking-balance').html().slice(1)); 
    let $savingsBalance = parseInt( $('#savings-balance').html().slice(1) );
    
    // * Add functionality so that a user can deposit money into one of the bank accounts.
    
    $('#checking-deposit').on('click', function () {
        let amount = $('#checking-amount').val();
        if ( isNaN(amount) || amount < 0 ) {
            alert('This is an invalid input');
        } else {
            $checkingBalance += parseInt( amount );
            $('#checking-balance').html(`$${ $checkingBalance }`);
            $('#checking-amount').val('');
        };
        if ( $checkingBalance > 0 ) $('#checking-balance').removeClass('zero');
    });

    $('#savings-deposit').on('click', function () {
        let amount = $('#savings-amount').val();
        if ( isNaN(amount) || amount < 0 ) {
            alert('This is an invalid input');
        } else {
            $savingsBalance += parseInt( amount );
            $('#savings-balance').html(`$${ $savingsBalance }`);
            $('#savings-amount').val('');
        };
        if ( $savingsBalance > 0 ) $('#savings-balance').removeClass('zero');
    });

    $('#checking-withdraw').on('click', function () {
        let amount = $('#checking-amount').val();
        if ( isNaN(amount) || amount < 0 ) {
            alert('This is an invalid input');
        } else if ( ($checkingBalance + $savingsBalance) < amount ) {
            // console.log( $checkingBalance + $savingsBalance );
            alert('Unable to withdraw: account total is less than withdrawal amount');
        } else {
            $checkingBalance -= parseInt( amount );
            // console.log( $checkingBalance );
            if ( $checkingBalance < 0 ) {
                // console.log('its less than zero');
                $('#checking-balance').html('$0');
                $savingsBalance += $checkingBalance; // minus value is stored in $checkingBalance
                $checkingBalance = 0;
                $('#savings-balance').html(`$${ $savingsBalance }`); 
                $('#checking-amount').val(''); //clears the input value field
            } else { 
                $('#checking-balance').html(`$${ $checkingBalance }`);
                $('#checking-amount').val('');     
            };
        };
        if ( $checkingBalance === 0 ) $('#checking-balance').addClass('zero');
        if ( $savingsBalance === 0 ) $('#savings-balance').addClass('zero');
    });

    $('#savings-withdraw').on('click', function () {
        let amount = $('#savings-amount').val();
        if ( isNaN(amount) || amount < 0 ) {
            alert('This is an invalid input');
        } else if ( ($checkingBalance + $savingsBalance) < amount ) {
            // console.log( $checkingBalance + $savingsBalance );
            alert('Unable to withdraw: account total is less than withdrawal amount');
        } else {
            $savingsBalance -= parseInt( amount );
            // console.log( $savingsBalance );
            if ( $savingsBalance < 0 ) {
                // console.log('its less than zero'); 
                $('#savings-balance').html('$0');
                $checkingBalance += $savingsBalance; // minus value is stored in $savingsBalance
                $savingsBalance = 0;
                $('#checking-balance').html(`$${ $checkingBalance }`); 
                $('#savings-amount').val(''); //clears the input value field
            } else { 
                $('#savings-balance').html(`$${ $savingsBalance }`);
                $('#savings-amount').val('');     
            };
        };
        if ( $checkingBalance === 0 ) $('#checking-balance').addClass('zero');
        if ( $savingsBalance === 0 ) $('#savings-balance').addClass('zero');
    });

});

console.log('has this function ended?');