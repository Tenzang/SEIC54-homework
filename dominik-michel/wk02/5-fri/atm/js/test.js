$(document).ready(function(){



    $('#checking-deposit').on('click', depositMoney)
    $('#savings-deposit').on('click',depositMoney)
    
    function depositMoney(){
        let total= parseInt($(this).siblings('.balance').html().replace("$",""))
        let getVal = parseInt($(this).siblings("#amount").val());
        total +=  getVal;
        $(this).siblings(".balance").html( '$'+ total);
          if(total>0){
           $('.account').removeClass('zero')
    }
}
$('#checking-withdraw').on('click',drawMoney)
$('#savings-withdraw').on('click',drawMoney)

function drawMoney(event){
    let total= parseInt($(this).siblings('.balance').html().replace("$",""))
    let getVal = parseInt($(this).siblings("#amount").val());
    let balance=parseInt($('#checking-balance').html().replace("$",""))+parseInt($('#savings-balance').html().replace("$",""));
    
    let diff=total-getVal;
    total -=  getVal;
    $(this).siblings(".balance").html( '$'+ total);
    console.log(total)
      if(total>0){
       $('.zero').removeClass('account')
    }
    if (getVal > balance) {
                event.preventDefault();
                alert(`not enough balance`);
            } else if (getVal <= balance && getVal > total) {
                    let total1 = 0;
                    $(`#checking`).addClass(`zero`);
                    $(`.balance`).html(`$${total1}`);
                    let input2 = getVal - total;
                    let total2 = total - input2;
                    $(`.balance`).html(`$${total2}`);
                        if(total2===0){
                            $(this).addClass(`zero`);
                        }
            } else if (diff <= 0) {
                    diff = 0;
                    $(`.account`).addClass(`zero`);
                    $(`.balance`).html(`$${diff}`);
            } else {
                    $(`.-balance`).html(`$${diff}`);  
            };

} 

// $('#checking-withdraw').on('click', function(event){
//     let total= parseInt($('#checking-balance').html().replace("$",""));
//     let newSavCheck= parseInt($('#savings-balance').html().replace("$",""));
//     let balance=total+newSavCheck;
//     let getVal = parseInt($("#amount").val());
//     let diff=total-getVal;
    
//     if (getVal > balance) {
//         event.preventDefault();
//         alert(`not enough balance`);
//     } else if (getVal <= balance && getVal > total) {
//             let total1 = 0;
//             $(`#checking`).addClass(`zero`);
//             $(`#checking-balance`).html(`$${total1}`);
//             let input2 = getVal - total;
//             let total2 = newSavCheck - input2;
//             $(`#savings-balance`).html(`$${total2}`);
//                 if(total2===0){
//                     $(`#savings`).addClass(`zero`);
//                 }
//     } else if (diff <= 0) {
//             diff = 0;
//             $(`#checking`).addClass(`zero`);
//             $(`#checking-balance`).html(`$${diff}`);
//     } else {
//             $(`#checking-balance`).html(`$${diff}`);  
//     };
// })
// $('#savings-withdraw').on('click', function(event){
//     let total= parseInt($('#checking-balance').html().replace("$",""));
//     let newSavCheck= parseInt($('#savings-balance').html().replace("$",""));
//     let balance=total+newSavCheck;
//     let getVal = $("#amount").val();
//     let diff=newSavCheck-getVal;
    
//     if (getVal > balance) {
//         event.preventDefault();
//         alert('Not enough balance')
//     } else if (getVal <= balance && getVal > newSavCheck) {
//             let total1 = 0;
//             $(`#savings`).addClass(`zero`);
//             $(`#savings-balance`).html(`$${total1}`);
//             let input2 = getVal - newSavCheck;
//             let total2 = total - input2;
//             $(`#checking-balance`).html(`$${total2}`);
//                 if(total2===0){
//                     $(`#checking`).addClass(`zero`);
//                 }
//     } else if (diff <= 0) {
//             diff = 0;
//             $(`#savings`).addClass(`zero`);
//             $(`#savings-balance`).html(`$${diff}`);
//     } else {
//             $(`#savings-balance`).html(`$${diff}`);

//     };
// });
})