const withdrawButtonClick = function (){
    let balance = parseInt($('#checking-balance').html().replace('$',' '));
    let input = parseInt($('#checking-amount').val());
    let savingsTotal = parseInt($('#savings-balance').html().replace('$',' '));
    let total = balance - input;
    let zero = 0;
    let savingsRemaining = (savingsTotal + balance) - input;
    if(input > balance && input >(savingsTotal+balance)){
        $('#checking-balance').html(`$${balance}`)
        $('#p1').html(`Error:insufficient funds`)
    }
    if (input > balance && input < (savingsTotal + balance)){
        $('#checking-balance').html(`$${zero}`);
        $('#savings-balance').html(`$${savingsRemaining}`)
        $('#p1').html(`You overdrew $ ${input} from Checking and you have $ ${savingsRemaining} in your Savings`)
    }
    if (total>0) {
        $('#checking-balance').html(`$${total}`);
        $('#p1').html(`You withdrew $${input} from Checking A/C`)};
        gifAnimate();
}
const depositButtonClick = function(){
    let balance = parseInt($('#checking-balance').html().replace('$',' '));
    let input = parseInt($('#checking-amount').val());
    let total = balance + input;
    $('#checking-balance').html(`$${total}`);
    $('#p1').html(`You deposited $${input} into Checking A/C`)
}
const nDepositButtonClickSavings = function (){
    let balance = parseInt($('#savings-balance').html().replace('$',' '));
    let input = parseInt($('#savings-amount').val());
    let total = balance + input;
    $('#savings-balance').html(`$${total}`);
    $('#p1').html(`You deposited $${input} into Savings A/C`)
}
const withdrawButtonClickSavings = function (){ 
    let balance = parseInt($('#savings-balance').html().replace('$',' '));
    let input = parseInt($('#savings-amount').val());
    let checkingTotal = parseInt($('#checking-balance').html().replace('$',' '));
    let total = balance - input;
    let zero = 0;
    let checkingRemaining = (checkingTotal + balance) - input;
    if(input > balance || input >(checkingTotal+balance)){
        $('#savings-balance').html(`$${balance}`)
        $('#p1').html(`Error:insufficient funds`)
    }
    if (input > balance && input < (checkingTotal + balance)) {
        $('#savings-balance').html(`$${zero}`);
        $('#checking-balance').html(`$${checkingRemaining}`)
        $('#p1').html(`You overdrew $ ${input} from Savings and you have $ ${checkingRemaining} in your Checking`)
}
if (total>0) {
    $('#savings-balance').html(`$${total}`);
    $('#p1').html(`You withdrew $${input} from Savings A/C`)};
}
const withdrawErrorChecking = function(){
    let Checkingbalance = parseInt($('#checking-balance').html().replace('$',' ')) ;
    if(Checkingbalance === 0){
        $('#checking').addClass("zero");
    }
    else {
        $('#checking').removeClass("zero");
    };
};
const withdrawErrorSavings = function(){
    let Savingsbalance = parseInt($('#savings-balance').html().replace('$',' '));
    if(Savingsbalance === 0){
        $('#savings').addClass("zero");
    }
    else {
        $('#savings').removeClass("zero");
    };
};
const depositHistory = function(){
    let inputChecking = parseInt($('#checking-amount').val());
const output = "You deposited $" + inputChecking + " into your checking account"
console.log(output);
$('#p1').html(`${output}`)
}
const errorMessage = function (){
   const output = "Error: Insufficient funds/ Overdraw limit reached"
   console.log(output);
   $('#p1').html(`${output}`)
}

// BIG FUNCTION!!!!!    
$('#checking-deposit, #checking-withdraw, #savings-deposit, #savings-withdraw').click(function () {
     if (this.id === 'checking-deposit') {
       depositButtonClick();
    }
    else if (this.id === 'checking-withdraw'){
       withdrawButtonClick();
    }
    else if (this.id === 'savings-deposit'){
        nDepositButtonClickSavings()
     }
     else withdrawButtonClickSavings();
     withdrawErrorChecking();
     withdrawErrorSavings();   
 });


 
   
 
 

// const userDepositAmount = function(){
//     console.log('deposit!')
// }

// $('#checking-deposit').on('click', userDepositAmount);

// $('#checking-deposit').on('click',function(){
//     console.log('clicked');
// })

// $('#checking-deposit').click(userDepositAmount);


// $("checking-deposit").on('click',function (event){
//     // event.preventDefault();
//     const depositAmount = $("#checking-amount").html();
//     console.log (depositAmount);
// }

// )




