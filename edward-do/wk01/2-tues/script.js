const squareNumber = function(num1) {
    result = num1 ** 2;
    console.log(`The result of squaring the number ${num1} is ${result}.`);
    return result;
}

const halfNumber = function(num1) {
    result = num1 / 2;
    console.log(`Half of ${num1} is ${result}.`);
    return result;
}

const percentOf = function(num1, num2) {
    result = num1 / num2 * 100;
    console.log(`${num1} is ${result}% of ${num2}.`)
    return result;
}

const areaOfCircle = function(radius) {
    result = radius * radius * Math.PI;
    console.log(`The area for a circle with radius ${radius} is ${result.toFixed(2)}.`);
    return result;
}

const bonus = function(num1) {
    resultHalf = halfNumber(num1);
    resultSquare = squareNumber(resultHalf);
    resultArea = areaOfCircle(resultSquare);
    resultFinal = percentOf(resultArea, resultSquare);
    return resultHalf, resultSquare, resultArea, resultFinal;
}

const DrEvil = function(amount) {
    if (amount > 999999) {
        console.log(`${amount} dollars (pinky)`)
    } else {
        console.log(`${amount} dollars`);
    }
}

/* not my work
const mixUp = function(stringA, stringB) {
    const sliceA = stringA.slice(0,2), sliceB = stringB.slice(0,2);
    return (sliceB + stringA.substring(2) + " " + sliceA + stringB.substring(2));
}

const fixStart = function(string) {
    var c = s.charAt(0);
    var outputStr = '';
    // literate through the entire string pushing letters into a new string unless it is the first letter
    for (var i = 0; i < s.length; i++) {
      // if the letter is the first letter AND we are not checking the first letter
      if (s[i] === c && i !== 0) outputStr += '*'
      else outputStr += s[i]
    }
    return outputStr;
}

function verbing(word) {
    if (word.length < 3) return word;
    if (word.slice(-3) == 'ing') {
      return word + 'ly';
    } else {
      return word + 'ing';
    }
}

function notBad(sentence) {
    const notIndex = sentence.indexOf('not');
    const badIndex = sentence.indexOf('bad');
    if (notIndex == -1 || badIndex == -1 || badIndex < notIndex) return sentence;
    return sentence.slice(0, notIndex) + 'good' + sentence.slice(badIndex + 3);
}
not my work */ 