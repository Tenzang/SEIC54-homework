
$(document).ready(function() {

let checkBalance = 0;
let savingBalance = 0;


    $('#checking-deposit').on('click', function() {
        checkBalance = parseFloat($('#checking-balance').html().replace('$', ''));
        let total = checkBalance + parseFloat($('#checking-amount').val());
        total = total || checkBalance;//prevents NaN
        $('#checking-balance').html(`$${total}`)

        if (total >= 0) {
            $('.account').show(100,function(){
                $('.account').removeClass('zero')
            })
        }
        if(total > 9000) {
            alert(`It's over 9000!!!!!!`)
        }
    })

    $('#checking-withdraw').on('click', function() {
        checkBalance = parseFloat($('#checking-balance').html().replace('$', ''));
        let withdraw = parseFloat($('#checking-amount').val());
        let total = checkBalance - withdraw;
        total = total || checkBalance;//prevents NaN
        $('#checking-balance').html(`$${total}`)

        if ( withdraw <= total) {
            total = total - withdraw;
        } else {
            let overdraft = total - checkBalance;
            if(overdraft <= savingBalance) {
                savingBalance = savingBalance - overdraft;
                total = 0;
            }
        }

        if(total <= 0) {
            $('.account').show(100,function(){
                $('.account').addClass('zero')
            })
            alert('WARNING!: Insuffiencent funds.')
        }

    })

    $('#savings-deposit').on('click', function() {
        savingBalance = parseFloat($('#savings-balance').html().replace('$', ''));
        let total = savingBalance + parseFloat($('#savings-amount').val());
        total = total || checkBalance;//prevents NaN
        $('#savings-balance').html(`$${total}`)

        if (total >= 0) {
            $('.account').show(100,function(){
                $('.account').removeClass('zero')
            })
        }
        if(total > 9000) {
            alert(`It's over 9000!!!!!!`)
        }
    })

    $('#savings-withdraw').on('click', function() {
        savingBalance = parseFloat($('#savings-balance').html().replace('$', ''));
        withdraw = parseFloat($('#savings-amount').val());
        let total = savingBalance - withdraw;
        total = total || savingBalance;//prevents NaN
        $('#savings-balance').html(`$${total}`)

        if ( withdraw <= total) {
            total = total - withdraw;
        } else {
            let overdraft = total - savingBalance;
            if(overdraft <= checkBalance) {
                savingBalance = checkBalance - overdraft;
                total = 0;
            }
        }

        if(total < 0) {
            $('.account').show(100,function(){
                $('.account').addClass('zero')
            })
            alert('WARNING!: Insuffiencent funds.')
        }

    })

});