const exchange = function () {
    let c1 = $('#currency1').val();
    let c2 = $('#currency2').val();
    $.ajax(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${c1}/${c2}.json`).done(function(data){
        amount = $('#amount').val();
        exchangerate = amount * data[`${c2}`]
        $('p').append(`$${amount} ${c1.toUpperCase()} is $${exchangerate.toFixed(2)} ${c2.toUpperCase()}`)
    });
};

$('#submit').on('click', exchange);