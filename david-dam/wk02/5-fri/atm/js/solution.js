// const checkForZero = function() {
//     $('.zero').removeClass('zero');
//     const checkingBalance = + $('#checking-balance').text().slice(1);
//     if (checkingBalance <= 0) {
//         $('#checking-balance').addClass('zero');
//     }

//     const savingBalance = + $('#checking-balance').text().slice(1);
//     if (savingBalance <= 0) {
//         $('#checking-balance').addClass('zero');
//     }
// }

// $('document').ready(function() {
//     checkForZero();

//     $('#checking-deposit').on('click', function() {
//         //get the current blance
//         const currentBalance = + $('#checking-balance').text().slice(1);  // pareInt,parseFloat, Number(prefered), + // slice removes the $
//         //get deposit amount
//         const depositAmount = + $('#checking-amount').val();
//         // get total amount
//         const newbalance = currentBalance + depositAmount;
//         //display total
//         $('#checking-balance').text('$' + newbalance);
//         checkForZero();
//     })

//     $('#checking-withdaw').on('click', function() {
//         //get the current balance
//         const currentBalance = + $('#checking-balance').text().slice(1);  
//         // gert the withdraw
//         const withdrawAMount = + $('#checking-amount').val();
//         // subtract the 2
//         const otherBalance = currentBalance + otherBalance;
//         const newbalance = currentBalance - withdrawAMount;
//         // update the balance
//         if(newbalance >= 0) {
//             $('#checking-balance').text('$' + newbalance);
//         } else if (withdrawAMount <= totalBalance) {
//             //zero this account
//             $('#checking-balance').text('$0')
//             //take the remainder from the other account
//             $('#saving-balance').text('$' + (otherBalance + newbalance))
//         }
//         checkForZero();

//     })

//     $('#saving-deposit').on('click', function() {
//         //get the current blance
//         const currentBalance = + $('#savings-balance').text().slice(1);  // pareInt,parseFloat, Number(prefered), + // slice removes the $
//         //get deposit amount
//         const depositAmount = + $('#savings-amount').val();
//         // get total amount
//         const newbalance = currentBalance + depositAmount;
//         //display total
//         $('#checking-balance').text('$' + newbalance);
//         checkForZero();
//     })

//     $('#savings-withdaw').on('click', function() {
//         //get the current balance
//         const currentBalance = + $('#savings-balance').text().slice(1);  
//         // gert the withdraw
//         const depositWithdraw = + $('#savings-amount').val();
//         const otherBalance = + $('#checking-balance').text.slice1(1);
//         // subtract the 2
//         const newbalance = currentBalance + depositWithdraw;
//         // update the balance
//         if(newbalance >= 0) {
//             $('#savings-balance').text('$' + newbalance);
//         }else if (withdrawAMount <= totalBalance) {
//             //zero this account
//             $('#checking-balance').text('$0')
//             //take the remainder from the other account
//             $('#saving-balance').text('$' + (otherBalance + newbalance))
//         }
//         checkForZero();

//     })
    

// })

// ---------- Joel's Solution ---------- 

//This code know NOTHING about negative balances or overdraft protection

//It simply connect the DOM to logical/business functions in accounts.js

//Lots of events handlers and all DOM manipulations



const checkForZero = function () {
    $('.zero').removeClass('zero');
    const checkingBalance = + $('#checking-balance').text().slice(1); // Remove the leading $
    if (checkingBalance <= 0) {
        $('#checking-balance').addClass('zero');
    }

    const savingsBalance = + $('#savings-balance').text().slice(1); // Remove the leading $
    if (savingsBalance <= 0){
        $('#savings-balance').addClass('zero');
    }
};

$(document).ready(function () {
    checkForZero();

    $('#checking-deposit').on('click', function () {
        const currentBalance = + $('#checking-balance').text().slice(1); // Remove the leading $
        const depositAmount = + $('#checking-amount').val();
        const newBalance = currentBalance + depositAmount;
        $('#checking-balance').text('$' + newBalance);
        checkForZero();
    });

    $('#checking-withdraw').on('click', function () {
        const currentBalance = + $('#checking-balance').text().slice(1); // Remove the leading $
        const withdrawAmount = + $('#checking-amount').val();
        const otherBalance = + $('#savings-balance').text().slice(1);
        const totalBalance = currentBalance + otherBalance;
        const newBalance = currentBalance - withdrawAmount;
        if (newBalance >= 0) {
            $('#checking-balance').text('$' + newBalance);
        } else if (withdrawAmount <= totalBalance) {
            $('#checking-balance').text('$0');
            $('#savings-balance').text('$' + (otherBalance + newBalance)); // wtf?
        }
        checkForZero();
    });

    $('#savings-deposit').on('click', function () {
        const currentBalance = + $('#savings-balance').text().slice(1); // Remove the leading $
        const depositAmount = + $('#savings-amount').val();
        const newBalance = currentBalance + depositAmount;
        $('#savings-balance').text('$' + newBalance);
        checkForZero();
    });

    $('#savings-withdraw').on('click', function () {
        const currentBalance = + $('#savings-balance').text().slice(1); // Remove the leading $
        const withdrawAmount = + $('#savings-amount').val();
        const otherBalance = + $('#checking-balance').text().slice(1);
        const totalBalance = currentBalance + otherBalance;
        const newBalance = currentBalance - withdrawAmount;
        if (newBalance >= 0) {
            $('#savings-balance').text('$' + newBalance);
        } else if (withdrawAmount <= totalBalance) {
            $('#savings-balance').text('$0');
            $('#checking-balance').text('$' + (otherBalance + newBalance)); // wtf?
        }
        checkForZero();
    });
});