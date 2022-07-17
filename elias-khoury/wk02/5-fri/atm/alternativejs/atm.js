// this code knows NOTHING about negative balances or overdraft protection. 

// it simply connects the Dom elements to logical/business functions in accounts.js

// lots of event handlers and all the DOM manipulation
const render = function () {
    // this function updates everysingle part of the DOM with the latest values from out accounts object.

    $(`#checking-balance`).text(`$ ${accounts.checkingBalance}`);
    $(`#savings-balance`).text(`$ ${accounts.savingsBalance}`);

    // handle red zero stuff
    if (accounts,savingsBalance <= 0) {
        $(`#savings-balance`).addClass(`zero`);
    }

    if (accounts,checkingBalance <= 0) {
        $(`#checking-balance`).addClass(`zero`);
    }

}

$(`#checking-deposit`).on(`click`, function(){
    const amount = $(`checking-amount`).val();
    accounts.checkingDeposit(amount);
    render();
});


$(`checking-withdraw`).on(`click`, function(){
    const amount = $(`#checking-amount`).va();
    accounts.checkingWithdraw(amount);
    render();
})

$(`#savings-deposit`).on(`click`, function(){
    const amount = $(`savings-amount`).val();
    accounts.savingsDeposit(amount);
    render();
});

$(`savings-withdraw`).on(`click`, function(){
    const amount = $(`#savings-amount`).va();
    accounts.savingsWithdraw(amount);
    render();
})