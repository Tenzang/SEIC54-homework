//
//   _____ ______   _________  ________         
//  |\   _ \  _   \|\___   ___\\   __  \                                        
//  \ \  \\\__\ \  \|___ \  \_\ \  \|\  \                                       
//   \ \  \\|__| \  \   \ \  \ \ \   __  \      
//    \ \  \    \ \  \   \ \  \ \ \  \ \  \     
//     \ \__\    \ \__\   \ \__\ \ \__\ \__\    
//      \|__|     \|__|    \|__|  \|__|\|__|    
//                                                                                                                                                                                                                            
//   ________  ________  ________        ___  _______   ________ _________   
//  |\   __  \|\   __  \|\   __  \      |\  \|\  ___ \ |\   ____\\___   ___\ 
//  \ \  \|\  \ \  \|\  \ \  \|\  \     \ \  \ \   __/|\ \  \___\|___ \  \_| 
//   \ \   ____\ \   _  _\ \  \\\  \  __ \ \  \ \  \_|/_\ \  \       \ \  \  
//    \ \  \___|\ \  \\  \\ \  \\\  \|\  \\_\  \ \  \_|\ \ \  \____   \ \  \ 
//     \ \__\    \ \__\\ _\\ \_______\ \________\ \_______\ \_______\  \ \__\
//      \|__|     \|__|\|__|\|_______|\|________|\|_______|\|_______|   \|__|
//
//                                                            
//                                                                             auth: tom_bryson     
///////////////////////////////////////////////////////////////////////////////################
////                                                                                    /////// 
////              -=Create a program that models a simple subway system=-               ///////
////                                                                                    ///////
///////////////////////////////////////////////////////////////////////////////################



const trainLines = { //===> Storing the stops as array-values, the lines as keys of the trainLines object.
    N: ['Times Square', '34th', 'N28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    Six: ['Grand Central', '33rd', 'Six28th', '23rd', 'Union Square', 'Astor Place']
}

const intersectStation = 'Union Square';


/////////////////Important --------
const getTrainArrayFromString = function(line_num) {
    let line;
    Object.keys(trainLines).forEach(key => {
        if (key === line_num) {
            line = trainLines[key];
        } 
    });
    return line;
}

// Use this function if more than 1 line is used
const getStationsToTraveled = function (line1, start, end) {
    let stations = [];
    let currentLine = getTrainArrayFromString(line1);
    let startIndex = currentLine.indexOf(start);
    let endIndex = currentLine.indexOf(end);
    if (startIndex > endIndex) { //===> if the starting station has a higher index REVERSE
        for (let i = startIndex-1; i > 0; i--) {
            stations.push(currentLine[i]);
            if (currentLine[i] === end)
                return stations;
        }
    } 
    else if (startIndex < endIndex) { //===> If the starting station has a lower index FORWARD
        for (let i = startIndex+1; i < currentLine.length; i++) {
            stations.push(currentLine[i]);
            if (currentLine[i] === end)
                return stations;
        } 
    } 
    else { //===> If the starting station is Union Square
        return 0;
    }
}

const getStringOfStations = function(stations) {
    let stationsString = '';
    for (let i = 0; i < stations.length; i++) {
        if (i === 0) {
            stationsString = stations[i];
        } else {
            stationsString = stationsString.concat(', ', stations[i]);
        }
    }
    return stationsString;
}



const planTrip = function(line1, start, line2, end) {

    //TO DO
    //Check if Line 1 = Line 2
    //If true, work out the count for each stations and then add them together
    if(line1 === line2) {
        let stations = getStationsToTraveled(line1, start, end);
        console.log(getStringOfStations(stations));
        console.log(`Good morning, Your trip today will include a total of ${ stations.length } stops.`);
    }
    else {
        // Different Lines - Intersect is Union Square
        // First line
        let firstLineStations = getStationsToTraveled(line1, start, intersectStation);
        // firstLineStations.pop(); // Get rid of intersection double up
        // Second line 
        let secondLineStations = getStationsToTraveled(line2, intersectStation, end);
        let allStations = firstLineStations.concat(secondLineStations);
        console.log(getStringOfStations(allStations));
        console.log(`Good morning, Your trip today will include a total of ${ allStations.length } stops.`);
    }
}  


planTrip('N', 'N28th', 'L', '1st'); ///========> THE POSITIVE DIRECTION (FORWARDS) TRIP
//Should Read '23rd', 'Union Square', '8th',
planTrip('N', '8th', 'N', 'N28th'); ///========> the NEGATIVE DIRECTION (BACKWARDS) TRIP
//Should Read 'Union Square', '23rd', 'N28th'
//distanceDirection('Union Square', 'Times Square');
//Should Read '23rd', 'N28th', '34th', 'Times Square',

//distanceDirection('N', 'N28th', 'N', 'N28th'); ////==========> NO MOVEMENT