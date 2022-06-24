//1. maxOfTwoNumbers
const maxOfTwoNumbers = function (num1,num2) {
    if (num1 > num2) {      //If num1 is larger return
        return(num1);

    }else{                  //Else returns num 2
        return (num2);
    }
};

console.log(maxOfTwoNumbers(15,10));
console.log(maxOfTwoNumbers(40,50));
//---------------------------------------------------------
//2. maxOfThree
const maxOfThree = function (num1,num2,num3) {
    if (num1 >= num2 && num1 >= num3){          // If Num 1 is larger then all
        return(num1);
    }else if(num2 >= num1 && num2 >= num3){     // If Num 2 is larger than all
        return(num2);
    }else if(num3 >= num1 && num3 >= num2){     // If Num 3 is larger than all
        return(num3);
    }      
};

console.log(maxOfThree(1,2,3))
console.log(maxOfThree(67,2,3))
console.log(maxOfThree(1,20,5))
//---------------------------------------------------------
//3. Vowel Verifier

const isVowel = function(letter) {
   const Upper = letter.toUpperCase();
   console.log(Upper);
    if (Upper === "A" || Upper === "E" || Upper === "I" || Upper === "O" || Upper === "U"){ // IF equal to vowel
        return("True");
    }else{ // if not vowel
        return("False");
    }
};

console.log(isVowel("a"));
console.log(isVowel("E"));
console.log(isVowel("p"));
//---------------------------------------------------------
//4. sumArray & multiplyArray

const myList = [1,2,3,4]; //

let a = 0; 
const sumArray = function (list) { // Loop to add each index on each other
    for(let i = 0; i < list.length; i++){
        a = a + list[i];
    }
    return(a);
}

console.log(sumArray(myList));

let b = 1; //1 is put on as 0* List[i] will result to 0
const multiplyArray = function (list) { //loop to multiply each index on each other
    for(let i = 0; i < list.length; i++){
        b *= list[i];
    }
    return(b);
}

console.log(multiplyArray(myList));
//---------------------------------------------------------
//BONUS 5. reverseString

const reverseString = function (words) {
        let reversed = "";
    for(let i = words.length - 1; i >= 0; i--) { // - As it will show up undefined in list at the start of array
        reversed += words[i]; //Adds on each reversed char in the empty variable "reversed"
    }
    return(reversed);
};

console.log(reverseString("Chorizo"))
//---------------------------------------------------------
// BONUS 6. findLongestWord

myList2 = ["cow", "cheese", "milk"];

// Sorry Loden :( this one stumped me.


//---------------------------------------------------------
//BONUS 7. filterLongWords

const myList3 = ["cow", "cheese", "milk"];
const i = 4;

const filterLongWords = function (myList3) {
    return myList3.length > i;// if length over 4 it will not return
  }
  const longOnly = myList3.filter(filterLongWords); //.filter targets each index in array with function
  console.log(longOnly);



