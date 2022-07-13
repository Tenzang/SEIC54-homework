// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// ```javascript
//planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// ---------------------------------------------- RESULT ----------------------------------------------

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```

// ---------------------------------------------- RESULT ----------------------------------------------

// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

    const N = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
    const L = ['8th', '6th', 'Union Square', "3rd", '1st'];
    const six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

// ---------------------------------- Basic Functions -----------------------------------

// N line system
// originally did this functions for 3 lines then remembered the DRY method so instead of useing:
//N.indexOf(stop), L.indexOf(stop), six.indexOf(stop)
// just added the line input instead which I should of done if i read the top instructions in the beginning.

const start = function (line,stop) { //Displays the name 
    const start = line.indexOf(stop)
    return start;
}

const destination =  function(line,stop) { //Displays the name
    const destination = line.indexOf(stop)
    return destination;
}

//Tested the variables of N, L and 6 lines so sas you comment one and un comment the other 
//it will show that the stop numbers on each line section works

// const startStation = start(N,`Times Square`);
// const endStation = destination(N,`Union Square`);

const startStation = start(L,`8th`); 
const endStation = destination(L,`Union Square`);

// const startStation = start(six,`Grand Central`);
// const endStation = destination(six,`Union Square`);

console.log(startStation); //<--- testing out display start station
console.log(endStation); //<--- testing out display end station

// intended to print out the value but instead got the numbers

// ---------------------------------- Basic Functions -----------------------------------

// ---------------------------------- Count Functions -----------------------------------

//Tried to loop the numbers but couldn't do it for hours
//Realised that because the index are numbered, you could just math the variable.indexOf

const countStop = function(start,end) {
    const totalStop = start - end;
    const totalStop2 = Math.abs(start - end);
    if (totalStop < 0) {
        return `${totalStop2} total stops`
    } else {
        return `${totalStop} total stops`
    }
}

//This sorta works at the moment but keeps outputing negatives 
// eg. TS - US = -4 total stops
// e.g US - TS = 4 total stops
// Had to research how to get rid of negative numbers (Stack Overflow)
// used Mathabs() - it converts negative no. to positive
// used ( something < 0 ) - to check if its a negative number

console.log(countStop(startStation,endStation));

// ---------------------------------- Count Functions -----------------------------------

// ---------------------------------- Union Square -----------------------------------

// All train intercepts at Union square
// Check if it needs to transfer
// Check direction / destination > (start = going) --->

//Still in the process of building conditional statements of Union Square exchange function

const UnionSquare = function (Destination) {
    if(N.indexOf(4) === L.indexOf(2) || N.indexOf(2) === six.indexOf(4)) {
        return `change at Union Square`
    } else if (L.indexOf(2) === N.indexOf(4) || L.indexOf(2) === six.indexOf(4)) {
        return `change at Union Square`
    } else if (six.indexOf(4) === N.indexOf(4) || six.indexOf(4) === L.indexOf(2)) {
        return `change at Union Square`
    }
}

// ---------------------------------- Union Square -----------------------------------

// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

// ---------------------------------- Failed Coding Attempt -----------------------------------

// const stops = 0;
// const travel = function (start,stop) {
//     const start = start;
//     const end = stop;
    
//     if (startStation <= endStation) {
//         for(let i= startStation; i <= endStation; i++)
//         stop = stops + 
//     }

//Coudn't get this loop to work

// ---------------------------------- Failed Coding Attempt -----------------------------------
