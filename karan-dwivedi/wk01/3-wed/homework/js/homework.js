

const twoNumbers = function (a,b){
    if(a>b){
        return a;
    }
    if(b>a){
        return b;
    }
}

console.log(twoNumbers(5,6));

//****************************************

//MAX THREE ****

const maxThree = function (e,f,g){
    if (e>f && e>g){
        return e;
    }
    {
    if (f>e && f>g)
            return f;
        }
    if (g>e && g>f){
        return g;
    }
}

console.log(maxThree(7,8,9));

//****************************************

//CHARACTERS ****


const char = function(h){
    const vowels = ['a','e','i','o','u'];
    if (vowels.includes(h)) {
        return 'vowel';
    }
    else {
        return 'false';
    }
}

console.log(char('k'));
console.log(char('l'));
console.log(char('m'));
console.log(char('e'));

//****************************************

//SUM_ARRAY AND MULTIPLY_ARRAY ****


const sumArray = function(array){
    let total=0;
    for ( i = 0; i < array.length; i++){
        total = total + array[i];
    }
    return total;
    
}
    
console.log(sumArray([1,2,3,4]));

//

const multiplyArray = function(array1){
    let total=1;
    for ( i = 0; i < array1.length; i++){
        total = total * array1[i];
    }
    return total;
    
}
console.log(multiplyArray([1,2,3,4]));


//**************--BONUS---*******************

//REVERSE STRINGS ****

const reverse = function (aString){
var a = aString.split("")
var reverseA = a.reverse()
var joinA = reverseA.join("")
return joinA

}

console.log(reverse("Palindrome"));

//**************--BONUS2---*******************

//FIND LONGEST WORD ****


