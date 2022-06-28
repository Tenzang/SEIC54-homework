// # MTA

const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

const directionOfTravel = function (lineStart,stnStart,lineEnd,stnEnd) { // SAME LINE JOURNEYS

    const rangeOfTravel = (lineEnd.indexOf(stnEnd))-(lineStart.indexOf(stnStart));//range between start and end stations

    if(Math.sign(rangeOfTravel) === 1){ // if 1 = positive
        let stnNames = '';
        for(let i = lineStart.indexOf(stnStart); i <= lineEnd.indexOf(stnEnd);i++)//Function to go from index 0 => array.length direction
            if(i === lineEnd.indexOf(stnEnd)){ //  if equal to end of loop add full stop
                stnNames += lineStart[i] + ".";  
            } else {
                stnNames += lineStart[i] + ",";  
            }
        return (stnNames);
    } if (Math.sign(rangeOfTravel) === - 1){ // if -1 negative
        let stnNames = '';
        for(let i = lineStart.indexOf(stnStart); i >= lineEnd.indexOf(stnEnd);i--)//Function to go from array.length => index 0 direction
            if(i === lineEnd.indexOf(stnEnd)){ // if equal to end of loop then add a full stop
                stnNames += lineStart[i] + ".";  
            } else {
                stnNames += lineStart[i] + ",";  
            }
        return (stnNames);
    }
}

const travelAfterUnion = function (lineEnd,stnEnd) { // Used after changing at Union Square, no start arguements as end stn will always be the same line as its union square

        const rangeOfTravel = (lineEnd.indexOf(stnEnd))-(lineEnd.indexOf("Union Square"));  // Range between End station and Union Square
        if(Math.sign(rangeOfTravel) === 1){ // if positive 0 => end of Array direction
            let stnNames = '';
            for(let i = lineEnd.indexOf("Union Square")+1; i <= lineEnd.indexOf(stnEnd);i++) //Added +1 in temporary variable to select stn after or right side of Union square
                if(i === lineEnd.indexOf(stnEnd)){
                    stnNames += lineEnd[i] + ".";  
                } else {
                    stnNames += lineEnd[i] + ",";  
                }
            return (stnNames);
        }if(Math.sign(rangeOfTravel) === - 1){ // if negative End of Array => 0 direction
            let stnNames = '';
            for(let i = lineEnd.indexOf("Union Square") -1; i > lineEnd.indexOf(stnEnd);i--) //Added +1 in temporary variable to select stn after or left side of Union square
            if(i === lineEnd.indexOf(stnEnd) + 1){ // I'm not sure why I added +1 here but it works.....
                stnNames += lineEnd[i] + ".";  
            } else {
                stnNames += lineEnd[i] + ",";  
            }
        return (stnNames);
        }
}

const travelBeforeUnion = function (lineStart,stnStart) { // no End arguments as change destination has to be Union Square

    const rangeOfTravel = (lineStart.indexOf("Union Square"))-(lineStart.indexOf(stnStart));
    if(Math.sign(rangeOfTravel) === 1){ // Positive
        let stnNames = '';
        for(let i = lineStart.indexOf(stnStart); i <= lineStart.indexOf("Union Square")-1;i++) //Function to go from index 0 => array.length direction
            stnNames += lineStart[i] + ",";
            return stnNames;
    } if (Math.sign(rangeOfTravel) === - 1){ // Negative
        let stnNames = '';
        for(let i = lineStart.indexOf(stnStart); i >= lineStart.indexOf("Union Square")+1;i--)//Function to go from array.length => index 0 direction
            stnNames += lineStart[i] + ",";
            return stnNames;
    }
}

const checkStops = function (lineStart,stnStart,lineEnd,stnEnd) { // Counts stops with difference between end and start indices

    if(lineStart !== lineEnd){ // If start and end lines are different then will need to add stops from both for total
        const rangeAfterUnion = (lineEnd.indexOf(stnEnd))-(lineEnd.indexOf("Union Square")); 
        const rangeBeforeUnion = (lineStart.indexOf("Union Square"))-(lineStart.indexOf(stnStart));
        const rangeAll = Math.abs(rangeAfterUnion) + Math.abs(rangeBeforeUnion) + 1; //+1 added to adapt index position to range length, Math.abs added so stops does not become negative
        return (rangeAll);
    } if (lineStart === lineEnd) {
        const range = (lineEnd.indexOf(stnEnd))-(lineStart.indexOf(stnStart) + 1); //+1 added to adapt index position to range length
        return Math.abs(range);
    }
}

const myTrip = function(lineStart,stnStart,lineEnd,stnEnd) { // Main function to construct program
    if(lineStart !== lineEnd){ // *** UNION CHANGE
        return(`You must travel through stops: ${travelBeforeUnion(lineStart,stnStart)} then switch at Union Square to : ${travelAfterUnion(lineEnd,stnEnd)} The total stops are ${checkStops(lineStart,stnStart,lineEnd,stnEnd)}`);
    } else if(lineStart === lineEnd) { // *** SAME LINE NO CHANGE
        return(`You must travel through stops: ${directionOfTravel(lineStart,stnStart,lineEnd,stnEnd)} The total stops are ${checkStops(lineStart,stnStart,lineEnd,stnEnd)}.`);
    }
}

//************
// const lineStartUser = prompt("Which line would you like to start at?");
// const stnStartUser  = prompt("Which station are you starting at?");
// const lineEndUser = prompt("Which line are you arriving at?");
// const stnEndUser = prompt("Which Station are you arriving at?");
// console.log(myTrip(lineStartUser,stnStartUser,lineEndUser,stnEndUser));
//*********** ERROR MESSAGE : You must travel through stops: undefined then switch at Union Square to : undefined The total stops are 1
// I'm am not too sure why it is undefined.

//Hard Coded destinations as had difficulties with prompt()
console.log("This is L6 Astor Place to L6 Grand Central") 
console.log(myTrip(line6,'Astor Place',line6,'Grand Central'));
    console.log("This is L6 23rd to L6 33rd")
console.log(myTrip(line6,'23rd',line6,'33rd'));
    console.log("This is LN Times Square to L6 Astor Place")
console.log(myTrip(lineN,'Times Square',line6,'Astor Place'));
    console.log("This is LN Times Square to L6 Grand Central")
console.log(myTrip(lineN,'Times Square',line6,'Grand Central'));



//Pseudocode

// User plugs in lineStart,StnStart and lineEnd and stnEnd √√
//Arguements then go into directionOfTravel function - Trip can possibly end here √√
//If user needs to go past Unionsquare, they will need to go into UnionChange function √√
    //Need to log once arrive at unionsquare that "Please change at union square" √√
    //Unless LineEnd and LineStart are the same no need to log ^^^^ √√
    //As lineEnd is already given, this will be the new line start for the directionOfTravel function √√
//execute directionOfTravel function √√
