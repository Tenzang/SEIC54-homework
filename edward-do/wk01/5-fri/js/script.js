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
    const sameLineStopsA = startLineArray.slice(startStopIndex + 1, sameDestStopIndex +1);
    const sameLineStopsB = startLineArray.slice(sameDestStopIndex, startStopIndex);
    const firstStops = startLineArray.slice(startStopIndex + 1, startLineArray.indexOf('Union Square') + 1);
    const secondStopsA = startLineArray.slice(startLineArray.indexOf('Union Square'), startStopIndex); 
    const secondStopsB = destLineArray.slice(destLineArray.indexOf('Union Square') + 1, diffDestStopIndex + 1);
    const secondStopsC = destLineArray.slice(diffDestStopIndex, destLineArray.indexOf('Union Square'));
    let stopsTotal = 0;

    if (startLine === destLine) {
        if (startStopIndex < sameDestStopIndex) {
          console.log(`${firstMessage + sameLineStopsA.join(', ')}.`);
          stopsTotal += sameLineStopsA.length;
        } else {
            console.log(`${firstMessage + sameLineStopsB.reverse().join(', ')}.`);
            stopsTotal += sameLineStopsB.length;
        }
    } else {
        if (startStopIndex < startLineArray.indexOf('Union Square')) { 
          console.log(`${firstMessage + firstStops.join(', ')}.`);
          console.log(changeAtUS);
          stopsTotal += firstStops.length;
        } else {
            console.log(`${firstMessage + secondStopsA.reverse().join(', ')}.`);
            console.log(changeAtUS);
            stopsTotal += secondStopsA.length;
        }
        if (destLineArray.indexOf('Union Square') < diffDestStopIndex) { 
            console.log(`${secondMessage + secondStopsB.join(', ')}.`);
            stopsTotal += secondStopsB.length;
        } else {
            console.log(`${secondMessage + secondStopsC.reverse().join(', ')}.`); 
            stopsTotal += secondStopsC.length;
        }
    }
    console.log(`${stopsTotal} stops in total.`);
};

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