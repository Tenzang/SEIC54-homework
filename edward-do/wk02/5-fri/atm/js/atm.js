// const toggleZero = function () {
//     $('.balance').each(function () {
//         if ($(this).text() === '$0') {
//             $(this).parent().addClass('zero');
//         } else {
//             $(this).parent().removeClass('zero');
//         }
//     })
// };

// let checkingBalance = 0;
// let savingsBalance = 0;

// $(document).ready(function (){
//     toggleZero();

//     $('#checking-deposit').on('click', function() {
//         const depositAmount = parseInt($('#checking-amount').val());
//         checkingBalance += depositAmount;
//         $('#checking-balance').text(`$${checkingBalance}`);
//         toggleZero();
//     });

//     $('#checking-withdraw').on('click', function() {
//         const withdrawAmount = parseInt($('#checking-amount').val());
//         if (withdrawAmount <= checkingBalance ) {
//             checkingBalance -= withdrawAmount;
//         } else {
//             let overdraftAmount = withdrawAmount - checkingBalance;
//             if (overdraftAmount <= savingsBalance) {
//             savingsBalance -= overdraftAmount;
//             checkingBalance = 0;
//             }
//         };
//         $('#checking-balance').text(`$${checkingBalance}`);
//         $('#savings-balance').text(`$${savingsBalance}`);
//         toggleZero();
//     });

//     $('#savings-deposit').on('click', function() {
//         const depositAmount = parseInt($('#savings-amount').val());
//         savingsBalance += depositAmount;
//         $('#savings-balance').text(`$${savingsBalance}`);
//         toggleZero();
//     });

//     $('#savings-withdraw').on('click', function() {
//         const withdrawAmount = parseInt($('#savings-amount').val());
//         if (withdrawAmount <= savingsBalance ) {
//             savingsBalance -= withdrawAmount;
//         } else {
//             let overdraftAmount = withdrawAmount - savingsBalance;
//             if (overdraftAmount <= checkingBalance) {
//             checkingBalance -= overdraftAmount;
//             savingsBalance = 0;
//             }
//         };
//         $('#savings-balance').text(`$${savingsBalance}`);
//         $('#checking-balance').text(`$${checkingBalance}`);
//         toggleZero();
//     });
// });

// This code knows NOTHING about negative balances or overdraft protection.

// It simply connects the DOM elements to logical/business functions in accounts.js

// Lots of event handlers and all the DOM manipulation

const render = function () {
    // Our handy render() function updates every single part of the DOM with the latest values from our accounts object.

    $('#checking-balance').text('$' + accounts.checkingBalance);
    $('#savings-balance').text('$' + accounts.savingsBalance);

    $('.zero').removeClass('zero');

    if (accounts.checkingBalance <= 0) {
        $('#checking-balance').parent().addClass('zero');
    };

    if (accounts.savingsBalance <= 0) {
        $('#savings-balance').parent().addClass('zero');
    };
};

$(document).ready (function() {
    render();

    $('#checking-deposit').on('click', function() {
        const amount = $('#checking-amount').val();
        accounts.checkingDeposit(amount);
        render();
    });

    $('#checking-withdraw').on('click', function() {
        const amount = $('#checking-amount').val();
        accounts.checkingWithdraw(amount);
        render();
    });

    $('#savings-deposit').on('click', function() {
        const amount = $('#savings-amount').val();
        accounts.savingsDeposit(amount);
        render();
    });

    $('#savings-withdraw').on('click', function() {
        const amount = $('#savings-amount').val();
        accounts.savingsWithdraw(amount);
        render();
    });
});