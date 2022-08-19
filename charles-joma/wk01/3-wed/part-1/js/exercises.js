

//============================maxOfTwoNumbers===========================//

const maxOfTwoNumbers = function(n1, n2){
    let largerNumber;

    if(n1 > n2){
        largerNumber = n1
        return largerNumber
    } else {
        largerNumber = n2
        return `${largerNumber} is the larger number of the two`
    }
}

console.log(maxOfTwoNumbers(0 , 65));


//============================Max of Three===================================//

const maxOfThree = function(n1, n2, n3){
    let BigNumber;
    if(n1 > n2 && n1 > n3){
        BigNumber = n1;
        return `${BigNumber} is The largest of the three`
    } else if(n2 > n1 && n2 > n3){
        BigNumber = n2;
        return `${BigNumber} is The largest of the three`
    } else {
        BigNumber = n3;
        return `${BigNumber} is The largest of the three`
    }
}

console.log(maxOfThree(2,45,99));

//====================================Vowel=======================================//

const isVowel = function(Character){
    const vowels = ['a','e','i','o','u']
    for( let i = 0; i < vowels.length; i++){
        if(Character === vowels[i]){
            return `True, ${Character} is indeed a vowel`
        } else {
            return `False ${Character} aint no vowel `
        }
    }
}

console.log(isVowel('c'));


//===================================Sum Array, Multiple Array==============================================//


const sumArray = function(array){
    const reduceArray = array.reduce((prevValue, currValue) => prevValue + currValue);
    return `The sum total of this Array is ${reduceArray}`
}

const multipleArray = function(array){
    const reduceArray2 = array.reduce((a, b) => a * b)
    return `The sum total of this Array is ${reduceArray2}`
}

console.log(sumArray([6,7,3,8,4]));
console.log(multipleArray([2,5,7,4]));




//======================================Reverse String==========================================================//

const reverseString = function(string){
    const stringSplit = string.split("");
    const stringReversed = stringSplit.reverse();
    const stringJoined = stringReversed.join('');
    
    return stringJoined
}

console.log(reverseString("Hello"));





//=======================================Find Longest Word======================================================//
//========Understand .sort() in use but i could not explain it to someone so really i dont understand========================//
const findLongestWord = function(arr){
    let longestWord= "";
    let arraySorted = arr.sort((a, b) => b.length - a.length )
    longestWord = arraySorted[0]
    return longestWord
}

console.log(findLongestWord(["Hello", "hadsgcuadsvfcidasbiuad", "HelloThree"]));


//======================================Filter Long Words===========================================================//
//===This logs teh longest string but i cant figure out, how to compare it to the number atm=============================//
const filterLongWord = function(arr,number){
    let longerThanI = "";
    for(let i = 0; i < arr.length; i++){
        if( arr[i].length > longerThanI.length){
            console.log(arr[i])
            if( arr[i].length > number){
                longerThanI += arr[i]
            }
        }
    }
    console.log(longerThanI)
}


filterLongWord(["Hello", "dshfbshbduiudvsi", "HelloThree"], 5);