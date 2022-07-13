$(document).ready(function(){

    $('#checking-deposit').on('click', function(){
        let total= parseInt($('#checking-balance').html().replace("$",""))
        let getVal = parseInt($("#checking-amount").val());
         total +=  getVal;
        $("#checking-balance").html( '$'+ total);
        if(total>0){
            $('#checking').removeClass('zero')
        }
    })
    $('#checking-withdraw').on('click', function(event){
        let total= parseInt($('#checking-balance').html().replace("$",""));
        let newSavCheck= parseInt($('#savings-balance').html().replace("$",""));
        let balance=total+newSavCheck;
        let getVal = parseInt($("#checking-amount").val());
        let diff=total-getVal;
        
        if (getVal > balance) {
            event.preventDefault();
            alert(`not enough balance`);
        } else if (getVal <= balance && getVal > total) {
                let total1 = 0;
                $(`#checking`).addClass(`zero`);
                $(`#checking-balance`).html(`$${total1}`);
                let input2 = getVal - total;
                let total2 = newSavCheck - input2;
                $(`#savings-balance`).html(`$${total2}`);
                    if(total2===0){
                        $(`#savings`).addClass(`zero`);
                    }
        } else if (diff <= 0) {
                diff = 0;
                $(`#checking`).addClass(`zero`);
                $(`#checking-balance`).html(`$${diff}`);
        } else {
                $(`#checking-balance`).html(`$${diff}`);  
        };
    })
    
    $('#savings-deposit').on('click', function(){
        let newSavCheck= parseInt($('#savings-balance').html().replace("$",""));
        let getVal = $("#savings-amount").val();
        newSavCheck += parseInt(getVal);
        $("#savings-balance").html( '$'+ newSavCheck);
        if(newSavCheck>0){
            $('#savings').removeClass('zero');
        }
    })
    $('#savings-withdraw').on('click', function(event){
        let total= parseInt($('#checking-balance').html().replace("$",""));
        let newSavCheck= parseInt($('#savings-balance').html().replace("$",""));
        let balance=total+newSavCheck;
        let getVal = $("#savings-amount").val();
        let diff=newSavCheck-getVal;
    
        if (getVal > balance) {
            event.preventDefault();
            alert('Not enough balance')
        } else if (getVal <= balance && getVal > newSavCheck) {
                let total1 = 0;
                $(`#savings`).addClass(`zero`);
                $(`#savings-balance`).html(`$${total1}`);
                let input2 = getVal - newSavCheck;
                let total2 = total - input2;
                $(`#checking-balance`).html(`$${total2}`);
                    if(total2===0){
                        $(`#checking`).addClass(`zero`);
                    }
        } else if (diff <= 0) {
                diff = 0;
                $(`#savings`).addClass(`zero`);
                $(`#savings-balance`).html(`$${diff}`);
        } else {
                $(`#savings-balance`).html(`$${diff}`);
    
        };
    });
    })