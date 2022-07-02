

// ////////////////----DEPOSIT CHECKING----///////////////
$(`#checking-deposit`).on(`click`, function () {
    let balance = parseInt($(`#checking-balance`).html().replace(`$`, ``));
    let input = parseInt($(`#checking-amount`).val())
    let total = balance + input;   
    $(`#checking-balance`).html(`$${total}`);
    if (total > 0) {
        $(`#checking`).removeClass(`zero`);
    };
    
}) 

// ////////////////----WITHDRAW CHECKING----///////////////
$(`#checking-withdraw`).on(`click`, function (event) {
    let balance = parseInt($(`#checking-balance`).html().replace(`$`, ``));
    let input = parseInt($(`#checking-amount`).val())
    let savingsBalance = parseInt($(`#savings-balance`).html().replace(`$`, ``));
    let total = balance - input;
    let both = balance + savingsBalance;

    if (input > both) {
        event.preventDefault();
        alert(`You broke`)
    } else if (input <= both && input > balance) {
            let balance1 = 0;
            $(`#checking-balance`).html(`$${balance1}`);
            let input2 = input - balance;
            let balance2 = savingsBalance - input2;
            $(`#savings-balance`).html(`$${balance2}`);
    } else if (total <= 0) {
            let total = balance - input;
            total = 0;
            $(`#checking`).addClass(`zero`);
            $(`#checking-balance`).html(`$${total}`);
    } else {
            let total = balance - input;
            $(`#checking-balance`).html(`$${total}`);
    };
})

// ////////////////----SAVINGS CHECKING----///////////////
$(`#savings-deposit`).on(`click`, function () {
    let balance = parseInt($(`#savings-balance`).html().replace(`$`, ``));
    let input = parseInt($(`#savings-amount`).val())
    let total = balance + input;

    $(`#savings-balance`).html(`$${total}`);

    if (total > 0) {
        $(`#savings`).removeClass(`zero`);
    };
    
}) 


// ////////////////----WITHDRAW SAVINGS----///////////////
$(`#savings-withdraw`).on(`click`, function (event) {
    let balance = parseInt($(`#savings-balance`).html().replace(`$`, ``));
    let input = parseInt($(`#savings-amount`).val())
    let checkingBalance = parseInt($(`#checking-balance`).html().replace(`$`, ``));
    let total = balance - input;
    let both = balance + checkingBalance;

    if (input > balance + checkingBalance) {
        event.preventDefault();
        alert(`You broke`); 
    } else if (input <= both && input > balance) {
            let balance1 = 0;
            $(`#savings-balance`).html(`$${balance1}`);
            let input2 = input - balance;
            let balance2 = checkingBalance - input2;
            $(`#checking-balance`).html(`$${balance2}`);
    } else if (total <= 0) {
            let total = balance - input;
            total = 0;
            $(`#savings`).addClass(`zero`);
            $(`#savings-balance`).html(`$${total}`);
            
    } else {
            let total = balance - input;
            $(`#savings-balance`).html(`$${total}`);
    };
})
       



