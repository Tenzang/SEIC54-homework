$(document).ready(function(){
    
    
        // var check_numeric = function(input_value){
        //     if (isNaN(input_value)){
        //         alert("Not a number");
        //         return false;
        //     }
        //     else if (input_value <= 0 ){
        //         alert("Must be a positive number")
        //         return false;
        //     }
        //     else {
        //         return true; 
        //     }
        // }
        //checking deposit- balance:
        let checking_deposit = $('#checking-deposit');
        $('#checking-deposit').on('click', function(){
        
        let checking_amount = $('#checking-amount').val();

        
            let newCheckingAmount = parseFloat(checking_amount);

            let checking_balance = $('#checking-balance').html();
            let newCheckingbalance = parseFloat(checking_balance);
    
            let finalDeposit = newCheckingAmount + newCheckingbalance;
            $('#checking-balance').html(finalDeposit);
        

        });

        ///checking withdraw- balance:

        let checking_withdraw = $('#checking-withdraw');
        $('#checking-withdraw').on('click', function(){
        
        let checkingWithdrawAmount = $('#checking-amount').val();
        let newCheckingWithdrawAmount = parseFloat(checkingWithdrawAmount);

        let checkingWithdrawBalance = $('#checking-balance').html();
        let newCheckingWithdrawbalance = parseFloat(checkingWithdrawBalance);

        let checkBalance = newCheckingWithdrawbalance - newCheckingWithdrawAmount;
        

        if ( checkBalance < 0){
                $('#checking').addClass('zero');
                alert ('insufficient Amount');
            }else{
                $('#checking-balance').html(checkBalance);
                
            }
            
        

    });

        // saving deposit- balance:
        
        let savings_deposit = $('#savings-deposit');
        $('#savings-deposit').on('click', function(){
        
        let savings_amount = $('#savings-amount').val();
        let newSavingsAmount = parseFloat(savings_amount);

        let savings_balance = $('#savings-balance').html();
        let newSavingsbalance = parseFloat(savings_balance);

        let finalSavingsDeposit = newSavingsAmount + newSavingsbalance;
        $('#savings-balance').html(finalSavingsDeposit);

        });

        //saving withdraw- balance:

        let savings_withdraw = $('#savings-withdraw');
        $('#savings-withdraw').on('click', function(){
        
        let savingsWithdrawAmount = $('#savings-amount').val();
        let newSavingsWithdrawAmount = parseFloat(savingsWithdrawAmount);

        let savingsWithdrawBalance = $('#savings-balance').html();
        let newSavingsWithdrawbalance = parseFloat(savingsWithdrawBalance);

        let finalWithdraw = newSavingsWithdrawbalance - newSavingsWithdrawAmount;
        

        if ( finalWithdraw <= 0){
            $('#savings').addClass('zero');
            // alert ('insufficient Amount');
        }else{
            $('#savings-balance').html(finalWithdraw);
            
        }

    });

        let checkingWithdraw = $('#checking-withdraw');
        $('#checking-withdraw').on('click', function(){
        let newWithdraw = $('#checking-amount').val();
        let newCheckingWithdraw = parseFloat(newWithdraw);

        let remainSavingAmount = $('#savings-balance').html();
        let remainNewAmount = parseFloat(remainSavingAmount);

        let remainBalance = remainNewAmount - newCheckingWithdraw;

        

        if(remainBalance < 0 ){
           $('#savings').addClass('zero');
           alert ('insufficient Amount');
        }else{
            $('#savings-balance').html(remainBalance);
        }
        

        });


        //get the currenyt c


    //checking >>savings amount



        //$('#checking-deposit').on('click', function(){
        // let checking_amount = $('#checking-amount').val();
        // let newCheckingAmount = parseFloat(checking_amount);

        

        // let checking_balance = $('#checking-balance').html();
        // let newBalance = parseFloat(checking_balance);

        // let totalDiposite = newBalance + newCheckingAmount;

       

        // $('#checking-balance').html() = totalDiposite.toFixed(2);


//Checking part

//    let checking_deposit= document.getElementById('checking-deposit');

//    checking_deposit.addEventListener('click', function(){
//     let checkingAmount = document.getElementById('checking_amount').value;
//     let newCheckingAmount = parseFloat(checkingAmount);

//     let checking_balance = document.getElementById('checking-balance').innerHTML;

//     let totalChecking = parseFloat(checking_balance);

//     let totalDiposite = totalChecking+newCheckingAmount;

//     document.getElementById('checking-balance').innerHTML= totalDiposite;

//    });









       


       

        
       


  
    
    


// });
//let diposite_btn = document.getElementById("diposite-btn");

// diposite_btn.addEventListener('click', function(){
//     let input_diposite = document.getElementById("input-diposite").value;

//     let inputNewInput = parseFloat(input_diposite);

//     let total_diposite = document.getElementById("total-diposite").innerHTML;

//     let totalNewDiposite = parseFloat(total_diposite);

//     let totalDiposite = inputNewInput + totalNewDiposite;

//     document.getElementById("total-diposite").innerHTML = totalDiposite.toFixed(2);

//     let balance_update = document.getElementById("balance").innerHTML;

//     let newBalance = parseFloat(balance_update);

//     let finalBalance = newBalance + totalDiposite;

//     document.getElementById("balance").innerHTML = finalBalance.toFixed(2);    

});
