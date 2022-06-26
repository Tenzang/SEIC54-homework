// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

const nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const lLine = ['8th', '6th', 'Union Square', '3rd', '1st'];
const sixLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

let numStops = 0;
let travelStops = '';

//let lineSame = true;

const planTrip = function(startLine, start, endLine, destination) {
    // Do some of the subway lines first
    // N line has the following stop: Times Square, 34th, 28th, 23rd, Union Square and 8th
    let endlineArr = false;
    let startLineArr = false; 

    if(startLine === 'N') {
        startLineArr = nLine;
    }
    if(startLine === 'L') { 
        startLineArr = lLine;
    }
    if(startLine === '6') {
        startLineArr = sixLine;
    }    
    if(endLine === 'N') {
        endlineArr = nLine; 
    } 
    if(endLine === 'L') { 
        endlineArr = lLine;
    }
    if(endLine === '6') { 
        endlineArr = sixLine;
    }

    if (startLine === endLine) {
        if (startLine === 'N') {
            travelForwardsSameLine(startLineArr, start, destination);
            stopsBetweenStartDestination(startLineArr, start, destination);
            loggingInfoSameLine(start, destination);
        } else if (startLine === '6') {
            travelForwardsSameLine(startLineArr, start, destination);
            stopsBetweenStartDestination(startLineArr, start, destination);
            loggingInfoSameLine(start, destination);
        } else if (startLine === 'L') {
            travelForwardsSameLine(startLineArr, start, destination);
            stopsBetweenStartDestination(startLineArr, start, destination);
            loggingInfoSameLine(start, destination);
        }
    } else {
            travelToUnion(startLineArr, start);
            travelFromUnion(endlineArr, destination);
            stopsBetweenStartDestinationDifferent(startLineArr, start);
            stopsBetweenEndDestination(endlineArr, destination);
            loggingInfoDifferentLine(start, destination);
            //console.log(travelStops);
        }

    numStops = 0;
    travelStops = '';
}

const travelForwardsSameLine = function(startLine, start, destination) {
    // Loop to find the stops between the start station and the destination
    for (let i = startLine.indexOf(start); i < startLine.indexOf(destination); i++) {
        numStops++;
    };
};

const travelBackwardsSameLine = function(startLine, start, destination) {
    // Loop to find the stops between the start station and the destination
    for (let i = startLine.indexOf(start); i < startLine.indexOf(destination); i--) {
        numStops++;
    };
};

const travelToUnion = function(startLine, start) {
    // Loop to find the stops between the start station and the destination
    for (let i = startLine.indexOf(start); i < startLine.indexOf('Union Square'); i++) {
        numStops++;
    };
};

const travelFromUnion = function(startLine, destination) {
    // Loop to find the stops between the start station and the destination
    for (let i = startLine.indexOf('Union Square'); i < startLine.indexOf(destination); i++) {
        numStops++;
    };
};

const loggingInfoSameLine = function(start, destination) {
    console.log(`You are at ${start} and going to ${destination}`);
    console.log(`You must travel through the following stops: ${travelStops}`);
    //console.log('Your journey continues through the following stops: ')
    console.log(`${numStops} stops in total.`);
}

const loggingInfoDifferentLine = function(start, destination) {
    console.log(`You are at ${start} and going to ${destination}`);
    console.log(`You must travel through the following stops: ${travelStops}`);
    //console.log('Your journey continues through the following stops: ')
    console.log('Change at Union Square');
    console.log(`${numStops} stops in total.`);
}

const stopsBetweenStartDestination = function(startLine, start, destination) {
    // Loop to show stops between the start and destination
    for (let i = startLine.indexOf(start) + 1; i < startLine.indexOf(destination); i++) {
        travelStops += startLine[i] + ' ';
    };
}

const stopsBetweenStartDestinationDifferent = function(startLine, start) {
    // Loop to show stops between the start and destination
    for (let i = startLine.indexOf(start) + 1; i < startLine.indexOf('Union Square'); i++) {
        travelStops += startLine[i] + ' ';
    };
}

const stopsBetweenEndDestination = function(startLine, destination) {
    // Loop to show stops between the start and destination
    for (let i = startLine.indexOf('Union Square'); i < startLine.indexOf(destination) + 1; i++) {
        travelStops += startLine[i] + ' ';
    };
}