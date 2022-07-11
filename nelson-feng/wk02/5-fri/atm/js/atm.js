$(document).ready(function () { //Anonymous function runs js file safely as soon as DOM loads

//Make 2 Arrays Checking and savings
//make a function that when pressing deposit or withdraw will add or remove amount to array
//Arrays are summed up and project total in each grey box

const checking = [];
const savings = [];

//Function Sums all Inputed numbers in the array
const sumArray = function (array) { 
    let total = 0;
    for(let i = 0; i < array.length; i++){
        const index = parseInt(array[i]); //parseInt needed as values from user input return as strings
        total += index;
    }
    return total;
}

//*******************************************************
//When pressing Checking - Deposit Button - Adds to total
$('#checking-deposit').on('click',function(){
    const $deposit = $('#checking-amount').val();
    checking.push($deposit);
    $('#checking-balance').html('$'+ sumArray(checking));
});

//When pressing Checking - Withdraw Button - Subtracts from total
$('#checking-withdraw').on('click',function(){
    const $withdraw = -1 * $('#checking-amount').val();
    const $remainder = $withdraw + sumArray(checking);
    if(sumArray(checking)+parseInt($withdraw) >= 0){ // if total array after withdraw is < 0 then function will not run
        checking.push($withdraw);
        $('#checking-balance').html('$'+ sumArray(checking))
        ;
    } 
    if((sumArray(checking) + $withdraw) < 0 && sumArray(savings) >= (-1 * $remainder)){
        savings.push($remainder);
        checking.push(-1 * sumArray(checking));
        $('#checking-balance').html('$'+ sumArray(checking) );
        $('#savings-balance').html('$'+ sumArray(savings));
    }
});

//*******************************************************

//When pressing Savings - Deposit Button - Adds to total
$('#savings-deposit').on('click',function(){
    const $deposit = $('#savings-amount').val();
    savings.push($deposit);
    $('#savings-balance').html('$'+ sumArray(savings));
});

//When pressing Savings - Withdraw Button - Subtracts from total
$('#savings-withdraw').on('click',function(){
    const $withdraw = -1 * $('#savings-amount').val();
    const $remainder = $withdraw + sumArray(savings);
    if(sumArray(savings)+parseInt($withdraw) >= 0){
        savings.push($withdraw);
        $('#savings-balance').html('$'+ sumArray(savings));
    } if ((sumArray(savings) + $withdraw) < 0 && sumArray(checking) >= (-1 * $remainder)){
        checking.push($remainder);
        savings.push(-1 * sumArray(savings));
        $('#checking-balance').html('$'+ sumArray(checking) );
        $('#savings-balance').html('$'+ sumArray(savings));
    }
});

//*******************************************************
//Check if balance is 0 for both
$('input').on('click',function(){
    if(sumArray(checking) > 0){
        $('#checking-balance').removeClass('zero').addClass('balance');
    } if(sumArray(checking) <= 0){
        $('#checking-balance').removeClass('balance').addClass('zero');
    } if (sumArray(savings) > 0){
        $('#savings-balance').removeClass('zero').addClass('balance');
    } if (sumArray(savings) <= 0){
        $('#savings-balance').removeClass('balance').addClass('zero');
    }
    });

});