$(document).ready(function(){
    $('#checking-deposit').on('click' ,function(){
        const num = parseInt($('#checking-balance').text().slice(1));
        const deposit = parseInt($('#checking-amount').val()) + num;
    
        $('#checking-balance').html('$' + deposit );
    })
$('#checking-withdraw').on('click' , function(){
    const num = parseInt($('#checking-balance').text().slice(1));
    const deposit = parseInt($('#checking-amount').val()) + num;
    if(num > parseInt($('#checking-amount').val())  ){
const withdraw = num - parseInt($('#checking-amount').val()) ;
  $('#checking-balance').html('$' + withdraw);
    }
})

})