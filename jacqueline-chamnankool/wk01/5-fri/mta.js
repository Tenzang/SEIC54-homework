//https://gist.github.com/wofockham/8ac3c1d747f345d89d3d

function planTrip(startLine, startStation, endLine, endStation) {
    //output stuff
    console.log("-".repeat(100));
    let firstJourneyMessage = `You must travel through the following stops on the ${startLine} line: `;
    let transferMessage = "Change at Union Square.";
    let secondJourneyMessage = "Your journey continues through the following stops: ";

    //establish starting and endling train lines
    startLine = getTrainLine(startLine);
    endLine = getTrainLine(endLine);

    //get station positions
    let startStationIndex = startLine.indexOf(startStation);
    let endStationIndex = endLine.indexOf(endStation);
    let startStationPosition = startStationIndex + 1;
    let endStationPosition = endStationIndex + 1;
    //get union sq specifically
    let startUnionSqIndex = getUnionSquare(startLine);
    let endUnionSqIndex = getUnionSquare(endLine);
    let startUnionSqPosition = startUnionSqIndex + 1;
    let endUnionSqPosition = endUnionSqIndex + 1;

    //to keep track of stops
    let totalStationsTraveled = 0;
    let numStationsToTravel = getNumStationsToTravel(startStationPosition, endStationPosition);
    let stationsTraveled = [];

    //checking if the user needs to transfer in the first place
    if (sameLine(startLine, endLine)) { //no transfer necessary
        stationsTraveled = travel(startLine, startStationPosition, endStationPosition, numStationsToTravel);
        firstJourneyMessage += printStationsTraveled(stationsTraveled);
        totalStationsTraveled += stationsTraveled.length;

        console.log(firstJourneyMessage);
    } else { //transfer required
        //from start station to union sq
        numStationsToTravel = getNumStationsToTravel(startStationPosition, startUnionSqPosition);
        stationsTraveled = travel(startLine, startStationPosition, startUnionSqPosition, numStationsToTravel);
        firstJourneyMessage += printStationsTraveled(stationsTraveled);
        totalStationsTraveled += stationsTraveled.length;
        //from union sq to end station
        numStationsToTravel = getNumStationsToTravel(endUnionSqPosition, endStationPosition);
        stationsTraveled = travel(endLine, endUnionSqPosition, endStationPosition, numStationsToTravel);
        secondJourneyMessage += printStationsTraveled(stationsTraveled);
        totalStationsTraveled += stationsTraveled.length;

        console.log(firstJourneyMessage);
        console.log(transferMessage);
        console.log(secondJourneyMessage);
    }

    console.log(`${totalStationsTraveled} stops in total.`);
}

//returns the corresponding array to the train line
function getTrainLine(lineName) {
    //fun fact: Broadway is my home station on the N line back in NY, so I've decided to add it to the array hehe
    let lineN = ["Broadway", "Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
    let lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
    let lineSix = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
    //links the corresponding stations with its train line
    const map = new Map();
    map.set("N", lineN);
    map.set("L", lineL);
    map.set("6", lineSix);

    return map.get(lineName);
}

//this will return the index of the union sq. station for transfers
function getUnionSquare(stations) {
    //iterate through the array of stations in order to find Union Square
    for (let station of stations) {
        if (station === "Union Square") {
            return stations.indexOf(station);
        }
    }
}

//check if the starting and end lines are the same to determine transfer or not
function sameLine(startLine, endLine) {
    return (
        startLine.length === endLine.length && startLine.every(function(station, index) {
            return station === endLine[index];
        })
    )
}

//checking if end station is before or after start station to determine  direction
function determineDirection(startPosition, endPosition) {
    if (startPosition < endPosition) {
        return "forward";
    } else {
        return "backwards";
    }
}

//determines how many stations the user must travel in order go get to destination
function getNumStationsToTravel(startPosition, endPosition) {
    //abs value in case end position is before start in array
    return Math.abs(endPosition - startPosition);
}

function travel(startLine, startStationPosition, endStationPosition, numStationsToTravel) {
    let direction = determineDirection(startStationPosition, endStationPosition);
    let stationsTraveled = [];

    while (numStationsToTravel > 0) {
        if (direction === "forward") {
            stationsTraveled.push(startLine[startStationPosition]);
            startStationPosition++;
        } else {
            startStationPosition--;
            stationsTraveled.push(startLine[startStationPosition-1]);
        }

        numStationsToTravel--;
    }

    return stationsTraveled;
}

function printStationsTraveled(stationsTraveled) {
    let list = "";

    for (let i = 0; i < stationsTraveled.length; i++) {
        list += stationsTraveled[i];

        //punctuation
        if (i !== stationsTraveled.length-1) {
            list += ", ";
        } else {
            list += ".";
        }
    }

    return list;
}

//RESULTS
//same line, going forward
planTrip("N", "Times Square", "N", "23rd"); //=> 3 stops total
//same line, going backwards
planTrip("N", "8th", "N", "34th"); //=> 4 stops total
//different line, going forward to union sq , then backward (homework example)
planTrip("N", "Times Square", "6", "33rd"); //=> 7 stops total
//different line, going forward to union sq , then forward
planTrip("6", "Grand Central", "L", "1st"); //=> 6 stops total
//different line, going backwards to union sq first, then forward
planTrip("L", "1st", "6", "Astor Place"); //=> 3 stops total
//different line, going backwards to union sq first, then backward
planTrip("L", "1st", "6", "Grand Central"); //=> 6 stops total
//me going home :)
planTrip("6", "Grand Central", "N", "Broadway"); //=> 9 stops total
console.log("-".repeat(100));

/* Notes:
    * can only transfer at Union Square
    * check if startLine and endLine is the same in order to determine if need to transfer
    * have to check indexOf() destination station in order to know which direction
    * basically counting how many to union sq first, then again after transfer
    * keep track of position in array for punctuation in printing the list
*/

/* For improvement:
    * input validation
    * reverse array rather than decrementing indices
    * check direction by checking negatives (?)
*/
