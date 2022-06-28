/*
# MTA Lab

## Objectives:
* Apply your knowledge of Javascript to solve a real world problem.
* Get really good at array manipulation.

#### Activity
* Create a program that models a simple subway system.

* The program takes the line and stop that a user is getting on at and the line
and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

```javascript
planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
```

* There are 3 subway lines:
  * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
  * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
  * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
  * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
* Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


#### Hints:
* Work out how you would do it on paper first! Then start to explain that process in Javascript.
* Get the program to work for a single line before trying to tackle multiple lines.
* Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
* Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
* The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
* Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

start dest splice
L[i]
startLine[i]
L.splice(i, -j).join(', ');


*/
// commencing line and stop, destination line and stop

const lines = {
    'L': ['1st', '3rd', 'Union Square', '6th', '8th'],
    '6': ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central'],
    'N': ['8th', 'Union Square', '23rd', '28th', '34th', 'Times Square']
};

const poopyButt = function(startLine, startStop, destLine, destStop) {
    const startLineArray = lines[startLine];
    const destLineArray = lines[destLine];
    const startStopIndex = startLineArray.indexOf(startStop);
    const sameLineDSIndex = startLineArray.indexOf(destStop);
    const diffLineDSIndex = destLineArray.indexOf(destStop);
    const firstMessage = `You must travel through the following stops on the ${startLine} line: `;
    const secondMessage = `Your journey continues through the following stops: `;
    let stopsTotal = 0;
    if (startLine === destLine) {
        if (startStopIndex < sameLineDSIndex) {
          console.log(firstMessage + startLineArray.slice(startStopIndex + 1, sameLineDSIndex + 1).join(', '));
          stopsTotal += startLineArray.slice(startStopIndex + 1, sameLineDSIndex +1).length
        } else {
            console.log(firstMessage + startLineArray.slice(sameLineDSIndex, startStopIndex).reverse().join(', '));
            stopsTotal += startLineArray.slice(sameLineDSIndex, startStopIndex).length;
        }
    } else {
        if (startStopIndex < startLineArray.indexOf('Union Square')) {
          console.log(firstMessage + startLineArray.slice(startStopIndex + 1, startLineArray.indexOf('Union Square') + 1).join(', '));
          console.log(`Change at Union Square.`);
          stopsTotal += startLineArray.slice(startStopIndex + 1, startLineArray.indexOf('Union Square') + 1).length;
        } else {
            console.log(firstMessage + startLineArray.slice(startLineArray.indexOf('Union Square'), startStopIndex).reverse().join(', '));
            console.log(`Change at Union Square.`);
            stopsTotal += startLineArray.slice(startLineArray.indexOf('Union Square'), startStopIndex).length;
        }
        if (destLineArray.indexOf('Union Square') < diffLineDSIndex) {
            console.log(secondMessage + destLineArray.slice(destLineArray.indexOf('Union Square') + 1, diffLineDSIndex + 1).join(', '));
            stopsTotal += destLineArray.slice(destLineArray.indexOf('Union Square') + 1, diffLineDSIndex + 1).length;
        } else {
            console.log(secondMessage + destLineArray.slice(diffLineDSIndex, destLineArray.indexOf('Union Square')).reverse().join(', '));
            stopsTotal += destLineArray.slice(diffLineDSIndex, destLineArray.indexOf('Union Square')).length;
        }
    }
    console.log(`${stopsTotal} stops in total.`);
}

// poopyButt('L', '1st', 'L', '8th');
// poopyButt('L', '8th', 'L', '1st');
// poopyButt('6', 'Astor Place', '6', 'Grand Central');
// poopyButt('6', 'Grand Central', '6', 'Astor Place');
// poopyButt('N', '8th', 'N', 'Times Square');
// poopyButt('N', 'Times Square', 'N', '8th');
// poopyButt('L', '1st', '6', 'Grand Central');
// poopyButt('L', '1st', 'N', '8th');
// poopyButt('N', 'Times Square', '6', 'Grand Central');
// poopyButt('6', 'Grand Central', 'N', '8th');

/*
const sameLine = function(startLine, startStop, destLine, destStop) {
    if (startLine === 'L') {
        console.log('You must travel through the following stops on the L line:' + );
    }
}
*/


/*
///////////////////////////////////////////////
// .join
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");
///////////////////////////////////////////////

///////////////////////////////////////////////
// .indexOf
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
///////////////////////////////////////////////

///////////////////////////////////////////////
// .slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
///////////////////////////////////////////////

///////////////////////////////////////////////
// .reverse
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
///////////////////////////////////////////////

*/