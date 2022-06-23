//  //Rain Drops

//  function raindrops (number){
//     if (number%7 === 0 && number%5 === 0 && number%3 === 0  ) {console.log("Pling Plang Plong");}
//     else if (number%7 === 0 && number%5 === 0 ) {console.log("Plang Plong");
//         }
//     else if (number%7 === 0 && number%3 === 0 ) {console.log("Pling Plong");}
//     else if (number%5 === 0 && number%3 === 0 ) {console.log("Pling Plang");}
//     else if (number%5 === 0) {console.log("Plang");}
//     else if (number%7 === 0) {console.log("Plong");}
//     else if (number%3 === 0) {console.log("Pling");}
//     else {return number);


// }  


// raindrops(6);

// //


// function ranidrops (number, beats){
//     beats = ['Beep','Boop','Bop']
//     number = [3,5,7];
//     beatsnumber = beats + number
//     for(i=0;i<)
// }

///

const raindrops = function (num){
    let output = '';
    if (num % 3 === 0){
        output = output + 'Pling';
    }
    if (num % 5 === 0){
        output = output + 'Plang';
    }
    if (num % 7 === 0){
        output = output + 'Plong';
    }
    if (output === ''){
        output = num;}
    return output;
}

console.log(raindrops(3));
console.log(raindrops(1));
