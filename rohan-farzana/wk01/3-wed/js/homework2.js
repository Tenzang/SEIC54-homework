
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript. 
// You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers= function(numOne,numTwo){
    if( numOne > numTwo ){
        
        console.log(`the largest one is ${numOne} and the smallest one is ${numTwo} `); 
    } else{
        console.log(`the largest one is ${numTwo} and the smallest one is ${numOne} `)
    }
}
maxOfTwoNumbers(300,6);

// Define a function maxOfThree that takes three numbers as arguments and 
// returns the largest of them.

let theThreeNumbers=function(a,b,c){
    
    if( a<b && c<b ){
        return b;
    }else if (c<a){
        return output=a;
    }else{
        return output=c;
    }
}

let theNumbers= [ ];
 for( let i=0; i<3; i++){
    theNumbers[i]=prompt(`enter number`);
 }
 console.log(`largest number is ${theNumbers}`);

//  Define a function sumArray and a function multiplyArray that sums and multiplies 
//  (respectively) all the numbers in an array of numbers. For example, 
//  sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24

let sumArray =[ 3,7,1,2];
for (let i=0; i<sumArray.length; i++){
    additionToBe= sumArray[i];
    
}


console.log(additionToBe[3,7,1,2])


function multiNumber(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
}

console.log(multiNumber([3,7,1,2]));


//3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelCheck= function(chr){
    if(chr=="a" ||chr=="e" || chr=="i" || chr=="o" ||chr=="u"){
    return true
 }
    return false
 }

console.log(vowelCheck("a"));
console.log(vowelCheck("b"));
console.log(vowelCheck("e"));






 