const planTrip = function(startLine, startStop, destLine, destStop) {
    const lines = {
        'L': ['1st', '3rd', 'Union Square', '6th', '8th'],
        '6': ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central'],
        'N': ['8th', 'Union Square', '23rd', '28th', '34th', 'Times Square']
    };
    const startLineArray = lines[startLine];
    const destLineArray = lines[destLine];
    const startStopIndex = startLineArray.indexOf(startStop);
    const sameDestStopIndex = startLineArray.indexOf(destStop);
    const diffDestStopIndex = destLineArray.indexOf(destStop);
    const firstMessage = `You must travel through the following stops on the ${startLine} line: `;
    const secondMessage = `Your journey continues through the following stops: `;
    const changeAtUS = `Change at Union Square.`;
    const sameLineStopsA = startLineArray.slice(startStopIndex + 1, sameDestStopIndex +1); // slices the array of stops on a line if the destination is also on the same line, based on the index position of the starting stop and the destination stop, to ouput the stops of the journey until the destination, excluding the starting stop 
    const sameLineStopsB = startLineArray.slice(sameDestStopIndex, startStopIndex);
    const firstStops = startLineArray.slice(startStopIndex + 1, startLineArray.indexOf('Union Square') + 1); // outputs the array of stops on the starting line from the starting stop until Union Square, where passangers will need to change lines
    const secondStopsA = startLineArray.slice(startLineArray.indexOf('Union Square'), startStopIndex); // outputs the array of stops on the destination line from Union Square until the destination stop
    const secondStopsB = destLineArray.slice(destLineArray.indexOf('Union Square') + 1, diffDestStopIndex + 1);
    const secondStopsC = destLineArray.slice(diffDestStopIndex, destLineArray.indexOf('Union Square'));
    let stopsTotal = 0;
    if (startLine === destLine) {
        if (startStopIndex < sameDestStopIndex) { // if the index of the starting stop is less than the index of the destination stop on the same line, the passengers will be moving 'forward' on the line and thus the array stays in the same order
          console.log(`${firstMessage + sameLineStopsA.join(', ')}.`);
          stopsTotal += sameLineStopsA.length; // sums the array of stops
        } else {
            console.log(`${firstMessage + sameLineStopsB.reverse().join(', ')}.`); // the array of stops is reversed if the index of the starting stop is larger than the index of the destination stop on the same line because passangers will be moving 'backwards' on the line/array
            stopsTotal += sameLineStopsB.length;
        }
    } else {
        if (startStopIndex < startLineArray.indexOf('Union Square')) { // moving 'forward'
          console.log(`${firstMessage + firstStops.join(', ')}.`); // logs the stops on the starting line until Union Square
          console.log(changeAtUS); // change at Union Square
          stopsTotal += firstStops.length;
        } else {
            console.log(`${firstMessage + secondStopsA.reverse().join(', ')}.`); // otherwise, they are moving 'backwards' on the starting line
            console.log(changeAtUS);
            stopsTotal += secondStopsA.length;
        }
        if (destLineArray.indexOf('Union Square') < diffDestStopIndex) { // if they're moving 'forwards' on the destination line
            console.log(`${secondMessage + secondStopsB.join(', ')}.`);
            stopsTotal += secondStopsB.length;
        } else {
            console.log(`${secondMessage + secondStopsC.reverse().join(', ')}.`); // if they're moving 'backwards' on the destination line
            stopsTotal += secondStopsC.length;
        }
    }
    console.log(`${stopsTotal} stops in total.`);
}

// tests
// planTrip('L', '1st', 'L', '8th');
// planTrip('L', '8th', 'L', '1st');
// planTrip('6', 'Astor Place', '6', 'Grand Central');
// planTrip('6', 'Grand Central', '6', 'Astor Place');
// planTrip('N', '8th', 'N', 'Times Square');
// planTrip('N', 'Times Square', 'N', '8th');
// planTrip('L', '1st', '6', 'Grand Central');
// planTrip('L', '1st', 'N', '8th');
// planTrip('N', 'Times Square', '6', 'Grand Central');
// planTrip('6', 'Grand Central', 'N', '8th');