console.log(`poop`);

const maxOfTwoNumbers = function(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};

const maxOfThree = function(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(maxOfThree(80085, 420, 69));
console.log(maxOfThree(420, 1337, 69));
console.log(maxOfThree(420, 69, 80085311));

const vowelCheck = function(letter) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            return true;
        }
    }
    return false;
}

console.log(vowelCheck('e'));
console.log(vowelCheck('f'));

const sumArray = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArray([1,2,3,4]));

const multiplyArray = function(array) {
    let sum = 1;
    for (let i = 0; i < array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}

const reverseString = function(string) {
//    return string.split("").reverse().join("");
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

console.log(reverseString('generalAssembly'));

const findLongestWord = function(str) {
    let strSplit = str.split(' '); // .split splits a string entered as the paramater into an array of separate strings
    let longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

const filterLongWords = function(arr, i) {
    i = i.length, filter = [];
    for (var j = 0, len = arr.length; j < len; j++) {
        if(arr[j].length > i) {
            filter.push(arr[j]);
        }
    }
    return filter;
}

console.log(filterLongWords(['coriander', 'luck', 'bob', 'sphincter'], 4));