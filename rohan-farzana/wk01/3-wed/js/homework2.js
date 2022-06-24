
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript. 
// You'll have to remember your pre-work, or do some googling to figure this out.

// const maxOfTwoNumbers= function(numOne,numTwo){
//     if( numOne > numTwo ){
        
//         console.log(`the largest one is ${numOne} and the smallest one is ${numTwo} `); 
//     } else{
//         console.log(`the largest one is ${numTwo} and the smallest one is ${numOne} `);
//     }
// }
// maxOfTwoNumbers(300,6);


const maxOfTwoNumbers=function (num,num1){
    if (num>num1){
        return `${num} is the largest than ${num1}`;
    }else if (num1>num){
        return `${num1} is the latgest than ${num}`;
    }
}
console.log(maxOfTwoNumbers(100,5));    


// Define a function maxOfThree that takes three numbers as arguments and 
// returns the largest of them.

let theThreeNumbers=function(a,b,c){
    
    if( a<b && c<b ){
        return `number ${b} is the largest one`;
    }else if (c<a){
        return `number ${a} is the largest one`;
    }else{
        return `number ${c} is the largest one`;
    }
}

console.log(theThreeNumbers(12,56,45));
console.log(theThreeNumbers(20,56,45));
console.log(theThreeNumbers(12,20,45));






// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelCheck= function(chr){
    if(chr=="a" ||chr=="e" || chr=="i" || chr=="o" ||chr=="u"){
    return true
 }
    return false
 }

console.log(vowelCheck("a"));
console.log(vowelCheck("b"));
console.log(vowelCheck("e"));






 