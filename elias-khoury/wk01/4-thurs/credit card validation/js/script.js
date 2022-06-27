


const card1 = `9812-1253-1213-2223`;
const card2 = `a923-3211-9c01-1112`;
const card3 = `1111-1111-1111-1110`;


const sumChecker = function(x){
    let sum = String.values(x);
    let total = 0;
        for (let i = 0; i < sum.length; i++) {
            total += sum[i];
        }
        return total;
};



const cardValidator = function(cardnumber) {
    
    let cardnumber1 = cardnumber.replace(/-/g, "");
        for (let i = 0; i < cardnumber1.length; i++) {
            if (cardnumber1.length !== 16 ){
                console.log (`bugger off (not 16 digits)`);
            } else {
              console.log ( `correct card number length`);
            }
        }
      

    let cardnumber2 = Array.from(String(cardnumber1), Number);
    console.log(cardnumber2);
        let total = 0;
        for (let i = 0; i < cardnumber2.length; i++) {
            total += cardnumber2[i];
            }
            if (total > 16 && total === isNAN) {
                console.log(`wooo`)
            } else {
                console.log('bugger off mate')
            } 

    // function sumChecker(cardnumber2){
    //     let sum = String.values(cardnumber2);
    //     let total = 0;
    //         for (let i = 0; i < sum.length; i++) {
    //             total += sum[i];
                
    //         }
    //         console.log(total);
    //         console.log('gello')

    //     if ( sumChecker(cardnumber2) < 16) {
    //         return `fook off`;
    //     }
    //     console.log('gello')
};
    


console.log(cardValidator(card1));



