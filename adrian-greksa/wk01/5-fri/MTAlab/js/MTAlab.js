// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```

// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

////////////////////////////////////////WRITE CODE HERE//////////////////////////////////////////////////////////

/////FOR ONE LINE/////
//pseudocode for line N only
// planTrip('N', 'Timesquare', 'N', '8th');

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square, 8th"
// // "5 stops in total."


// define const N as an Array type with all the stops as strings - 6 elements
// define planTrip as a function that takes in 4 arguments, line1, stop1, line2, stop2

// define a variable, listOfStops, that is the string of stops that they must go through to reach the 8th stop
// define a variable, numOfStops, that is a number that represents the number of stops

// use a for LOOP to iterate from the startStop to the endStop (statement condition update)
// in the for loop, update the listOfStops and the numOfStops
// then log the final string with the listofstops and numofstops


////////////////////////////////////////////////////ATTEMPT 1//////////////////////////////////////////////
// const N = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];

// planTrip('N', 'Timesquare', 'N', '8th');

// const planTrip = function (line1, stop1, line2, stop2) {

//     const lines = {
//         'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
//         'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
//         '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
//     }
//     console.log(lines);

//     let listOfStops = [];
//     let totalNumOfStops = 0;

//     const direction = function () {
//         if ( lines[line1].indexOf(stop1) < lines[line2].indexOf(stop2) ) {
//             return i++
//         } else {
//             return i--
//         }
//     }
    
//     for (let i = lines[line1].indexOf(stop1); i <= lines[line1].indexOf(stop2); direction()) {
//         console.log(i);
//     }

    
//     console.log( `You must travel through the following stops on the ${ line1 } line: ${ listOfStops }` )
//     console.log( `${ totalNumOfStops } stops in total.`)

// }


///////////////////////////////////ATTEMPT 2//////////////////////////////////////////////////////////////////////

const planTrip = function (line1, stop1, line2, stop2) {

    console.log(`From Line ${ line1 }, ${ stop1 } to Line ${ line2 }, ${ stop2 }.`);

    // MUST BE LET TO REVERSE IT
    let lines = { 
        'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
        'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
        '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    };

    if ( line1 === line2 ) {

        let indexOfFirstStop = lines[line1].indexOf(stop1);
        let indexOfEndStop = lines[line2].indexOf(stop2);

        // reverse the lines first or after slicing?
        if ( indexOfFirstStop > indexOfEndStop) {
            lines[line1].reverse();
            
            //reassign them because indexes change after reversing
            indexOfFirstStop = lines[line1].indexOf(stop1);
            indexOfEndStop = lines[line2].indexOf(stop2);
        }

        let line1Stops = lines[line1].slice(indexOfFirstStop + 1, indexOfEndStop + 1);
        console.log( `You must travel through the following stops on the ${ line1 } line: ${ line1Stops.join(', ') }` );

        let totalNumOfStops = indexOfEndStop - indexOfFirstStop;
        console.log( `${ totalNumOfStops } stops in total.`);
        

    } else {

        // Reference: ('N', '28th') TO ('L', '8th') // change for each case
        let indexOfFirstStop = lines[line1].indexOf(stop1); // (4)
        let indexOfEndStop = lines[line2].indexOf(stop2); // (5)
        // console.log(indexOfEndStop);

        // if negative then reverse array
        let stopsToUnionSquare = lines[line1].indexOf('Union Square') - indexOfFirstStop; // (2-4=-2)
        // console.log(stopsToUnionSquare);
        if (stopsToUnionSquare < 0) {
            lines[line1].reverse();
            indexOfFirstStop = lines[line1].indexOf(stop1); // from index 4 to index 0
        }

        let stopsFromUnionSquare = indexOfEndStop - lines[line2].indexOf('Union Square');  // (5 - 4 = 1)
        // console.log(stopsFromUnionSquare);
        if (stopsFromUnionSquare < 0) {
            lines[line2].reverse();
            indexOfEndStop = lines[line2].indexOf(stop2); //  does not run
        }

        let line1Stops = lines[line1].slice(indexOfFirstStop + 1, lines[line1].indexOf('Union Square') + 1);
        console.log( `You must travel through the following stops on the ${ line1 } line: ${ line1Stops.join(', ') }` );

        console.log( `Change at Union Square.`); // always change here if switching lines.

        let line2Stops = lines[line2].slice(lines[line2].indexOf('Union Square') + 1, indexOfEndStop + 1);
        console.log( `You must travel through the following stops on the ${ line2 } line: ${ line2Stops.join(', ') }` );
        
        totalNumOfStops = Math.abs(stopsToUnionSquare) + Math.abs(stopsFromUnionSquare); // (6)
        console.log( `${ totalNumOfStops } stops in total.`);

    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SAME LINE TESTING
planTrip('N', 'Times Square', 'N', '8th'); // FORWARDS: 34th, 28th, 23rd, unionsq, 8th. 5 stops.
planTrip('N', '23rd', 'N', 'Times Square'); // BACKWARDS: 28th, 34th, Timesq. 3 stops.
planTrip('6', 'Astor Place', '6', 'Union Square'); // BACKWARDS: Unionsq. 1 stop.

// DIFFERENT LINE TESTING
planTrip('N', 'Times Square', 'L', '1st'); // FORWARDS THEN FORWARDS: 34th, 28th, 23rd, unionsq, (change), 3rd, 1st. 6 stops.
planTrip('N', '28th', 'L', '8th'); // FORWARDS THEN BACKWARDS: 23rd, UnionSq, (Change), 6th, 8th. 4 stops.
planTrip('L', '1st', 'N', '8th'); // BACKWARDS THEN FORWARDS: 3rd, unionsq, (change), 8th. 3 stops.
planTrip('6', 'Astor Place', 'L', '8th'); // BACKWARDS THEN BACKWARDS: unionsq, (change), 6th, 8th. 3 stops. 

// EXTRA CASES TESTING
planTrip('L', '8th', 'L', '1st'); // 6th, unionsq, 3rd, 1st. 4 stops. 
planTrip('N', '23rd', '6', 'Grand Central'); // FORWARDS THEN BACKWARDS: unionsq, (change), 23rd, 28th, 33rd, grandcentral. 5 stops.

// const a = lines[line1].concat(lines[line2]); // WORKS but useless
// first find out line and stop of destination and how to get there.
// if its on the same line then just log the stops and total number of stops.
// if its on a different line then log the stops to union square, log change at union square then log stops to deistination. Log total stops.
// if going backwards then ...