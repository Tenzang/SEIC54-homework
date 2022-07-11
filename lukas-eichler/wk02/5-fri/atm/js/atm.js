// console.log("Just a test");

// $(document).ready( function () {

//     let $checkingBalance = parseInt( $('#checking-balance').html().slice(1)); 
//     let $savingsBalance = parseInt( $('#savings-balance').html().slice(1));
    
//     $('#checking-deposit').on('click', function () {
//         let amount = $('#checking-amount').val();
//         if ( isNaN(amount) || amount < 0 ) {
//             alert('This is an invalid input');
//         } else {
//             $checkingBalance += parseInt( amount );
//             $('#checking-balance').html(`$${ $checkingBalance }`);
//             $('#checking-amount').val('');
//         };
//         if ( $checkingBalance > 0 ) $('#checking-balance').removeClass('zero');
//     });

//     $('#savings-deposit').on('click', function () {
//         if ( isNaN(amount) || amount < 0 ) {
//             alert('This is an invalid input');
//         } else {
//             $savingsBalance += parseInt ( amount );
//             $('#savings-balance').html(`$${ $savingsBalance }`);
//             $('#savings-amount').val('');
//         };
//         if ( $savingsbalance > 0 ) $('#savings-balance').removeClass('zero');
//     });

// });


// const checkForZero = function () {
//     $('.zero').removeClass('zero');
//     const checkingBalance = + $('#checking-balance').text().slice(1); // remove the leading $
//     if (checkingBalance <= 0) {
//         $('#checking-balance').addClass('zero');
//     }

//     const savingsBalance = + $ ('#savings-balance').text().slice(1); // Remove the leading $
//     if (savingsBalance <= 0) {
//         $('#savings-balance').addClass('zero');
//     }
// };

// $(document).ready(function () {
//     checkForZero();
//     $('#checking-deposit').on('click', function () {
//         // get the current balance
//         const currentBalance = + $('#checking-balance').text().slice(1); // Remove the leading $
//         // get the deposit amount
//         const depositAmount = + $('#checking-amount').val();
//         // add the two
//         const newBalance = currentBalance + depositAmount;

//         console.log(currentBalance, depositAmount, newBalance);

//         // then update the balance on screen
//         $('#checking-balance').text('$' + newBalance);
    
//         checkForZero();
//     });

//     $('#checking-withdraw').on('click', function () {
//         // get the current balance
//         const currentBalance = + $('#checking-balance').text().slice(1); // Remove the leading $
//         // get the withdraw amount
//         const withdrawAmount = + $('#checking-amount').val();
//         const otherBalance = + $('#savings-balance').text().slice(1);
//         const totalBalance = currentBalance - withdrawAmount;
//         // subtract the two
//         const newBalance = currentBalance - withdrawAmount;
//         if (newBalance >= 0) {
//             $('#checking-balance').text('$' + newBalance);
//         } else if (withdrawAmount <= totalBalance) {
//             // zero this account
//             $('#checking-balance').text('$0');
//             $('#savings-balance').text('$' + (otherBalance + newBalance)); // study?
//             // take the remainder from the other account
//         }
//         // update the balance.
 
//         checkForZero();
//     });


//     $('#savings-deposit').on('click', function () {
//         // get the current balance
//         const currentBalance = + $('#savings-balance').text().slice(1);
//         // get the deposit amount
//         const depositAmount = + $('#savings-amount').val();
//         // add the two
//         const newBalance = currentBalance + depositAmount;

//         // then update the balance on screen
//         $('#savings-balance').text('$' + newBalance);

//         checkForZero();
//     });

//     $('#savings-withdraw').on('click', function () {
//         // get the current balance
//         const currentBalance = + $('#savings-balance').text().slice(1); // Remove the leading $
//         // get the withdraw amount
//         const savingsAmount = + $('#savings-amount').val();
//         // subtract the two
//         const newBalance = currentBalance - savingsAmount;
//         // update the balance.
//         $('#savings-balance').text('$' + newBalance);

//         checkForZero();
//     });

// });

// const checkForZero = function () {
//     $('.zero').removeClass('zero');
//     const checkingBalance = + $('#checking-balance').text().slice(1); // Remove the leading $
//     if (checkingBalance <= 0) {
//         $('#checking-balance').addClass('zero');
//     }

//     const savingsBalance = + $('#savings-balance').text().slice(1); // Remove the leading $
//     if (savingsBalance <= 0){
//         $('#savings-balance').addClass('zero');
//     }
// };

// $(document).ready(function () {
//     checkForZero();

//     $('#checking-deposit').on('click', function () {
//         const currentBalance = + $('#checking-balance').text().slice(1); // Remove the leading $
//         const depositAmount = + $('#checking-amount').val();
//         const newBalance = currentBalance + depositAmount;
//         $('#checking-balance').text('$' + newBalance);
//         checkForZero();
//     });

//     $('#checking-withdraw').on('click', function () {
//         const currentBalance = + $('#checking-balance').text().slice(1); // Remove the leading $
//         const withdrawAmount = + $('#checking-amount').val();
//         const otherBalance = + $('#savings-balance').text().slice(1);
//         const totalBalance = currentBalance + otherBalance;
//         const newBalance = currentBalance - withdrawAmount;
//         if (newBalance >= 0) {
//             $('#checking-balance').text('$' + newBalance);
//         } else if (withdrawAmount <= totalBalance) {
//             $('#checking-balance').text('$0');
//             $('#savings-balance').text('$' + (otherBalance + newBalance)); // wtf?
//         }
//         checkForZero();
//     });

//     $('#savings-deposit').on('click', function () {
//         const currentBalance = + $('#savings-balance').text().slice(1); // Remove the leading $
//         const depositAmount = + $('#savings-amount').val();
//         const newBalance = currentBalance + depositAmount;
//         $('#savings-balance').text('$' + newBalance);
//         checkForZero();
//     });

//     $('#savings-withdraw').on('click', function () {
//         const currentBalance = + $('#savings-balance').text().slice(1); // Remove the leading $
//         const withdrawAmount = + $('#savings-amount').val();
//         const otherBalance = + $('#checking-balance').text().slice(1);
//         const totalBalance = currentBalance + otherBalance;
//         const newBalance = currentBalance - withdrawAmount;
//         if (newBalance >= 0) {
//             $('#savings-balance').text('$' + newBalance);
//         } else if (withdrawAmount <= totalBalance) {
//             $('#savings-balance').text('$0');
//             $('#checking-balance').text('$' + (otherBalance + newBalance)); // wtf?
//         }
//         checkForZero();
//     });
// });


// Accounts.js connected to this code below. 
// (This code knows NOTHING about negative balances of overdraft protection)
//It simply connects the DOM elements to logical/business functions in acounts.js

// Lots of event handlers and all of the DOM manipulation

const render = function () {
    // Our handy render() function updates every single part of the DOM with the 
    // latest values from our accounts object.

    $('#checking-balance').text('$' + accounts.checkingBalance);
    $('#savings-balance').text('$' + accounts.savingsBalance);

    $('.zero').removeClass('zero');

    if (accounts.savingBalance <= 0) {
        $('#savings-balance').addClass('zer');
    }

    if (accounts.checkingbalance <= 0) {
        $('#checking-balance').addClass('zero');
    }

    // TODO: handle the red zero stuffs
};

$(document).ready(function () {
    $('#checking-deposit').on('click', function () {
        const amount = $('#checking-amount').val();
        accounts.checkingDeposit(amount);
        render();
        
    });

    $('#checking-withdraw').on('click', function () {
        const amount = $('#checking-amount').val();
        accounts.checkingWithdraw(amount);
        render();
    });

    $('#savings-deposit').on('click', function () {
        const amount = $('#savings-amount').val();
        accounts.savingsDeposit(amount);
        render();
    });

    $('#savings-withdraw').on('click', function () {
        const amount = $('#savings-amount').val();
        accounts.savingsWithdraw(amount);
        render();
    });
});