// console.log("warmup");

// const a = $('#checking-amount');

// const value = a.html();

// console.log(value);

const a = $('h1');
console.log(a);

const depositButtonClick = function(){
    const depositAmountInput = $('#checking-amount').val();
    // console.log (depositAmountInput);
    let inputBox = $('#checking-balance');
    inputBox = 0;
    inputBox += depositAmountInput;

}

$('#checking-deposit').on('click',depositButtonClick);



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




