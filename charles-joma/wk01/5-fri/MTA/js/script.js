// 3 Subway lines 

// N line stops = Times Sqaure, 34th, 28th, 23rd, Union Square and 8th

// L line stops = 8th, 6th, Union Square, 3rd and 1st

// 6 line stops = Grand central, 33rd, 28th, 23rd, Union Square and Astor place

// L , N and ^ all interset at Union square (stops will be an array/s)

//Number of stops must be printed in order aswell as the printed in order
/*
const line = function(getOnLine){
    if( getOnLine === 'N' || getOnLine === 'L' || getOnLine === '6'){
        return getOnLine;
    }
}
*/
const lineLN6 = 
    {
        lineL: [' Times Square ' , ' 34th ', ' 28th ', ' 23rd ', ' Union Square ', ' 8th '],
        lineN: [' Grand central ', ' 33rd ', '28th ', ' 23rd ', ' Union Square ',' Astor place '],
        line6: [' 8th ', ' 6th ', ' Union Square ', ' 3rd ', ' 1st '],
    }



//===================W O R K S===========================//
//I will have to edit these to return the correct number of stops
const numberOfStopsLineN = function(starLine, startDestination, endLine, endDestination){
    const stopsLineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
    let numberOfStops = 0;
    for(let i = 0; i < stopsLineN.length; i++){
        numberOfStops += 1
        if(stopsLineN[i] === endDestination){
            break
        }
    }
    return numberOfStops - 1
}

//I will have to edit these to return the correct number of stops
const numberOfStopsLineL = function(startLine, startDestination, endLine, endDestination){
    const stopsLineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
    let numberOfStops = 0;
    for(let i = 0; i < stopsLineL.length; i++){
        numberOfStops += 1
        if(stopsLineL[i] === endDestination){
            break
        }
    }
    return numberOfStops - 1
}

//I will have to edit these to return the correct number of stops , Edit them, make the similar to the destination functions, 
const numberOfStopsLine6 = function(startLine, startDestination, endLine, endDestination){
    const stopsLine6 = ['Grand central', '33rd', '28th', '23rd', 'Union Square','Astor place'];
    let numberOfStops = 0;
    for(let i = 0; i < stopsLine6.length; i++){
        numberOfStops += 1
        if(stopsLine6[i] === endDestination){
            break
        }
    }
    return numberOfStops - 1
}

//=======================================================//

//=================W O R K S==============================//


const destinationLineN = function(N,leaveStation,N2,destinationStation ){
    const stopsLineN = [' Times Square ', ' 34th ', ' 28th ', ' 23rd ', ' Union Square ', ' 8th '];
    let journey = [];
    if( N === N2 ){
        for(let i = 0; i < stopsLineN.length; i++){
            if(stopsLineN[ i-1 ] === destinationStation)
            break
            journey.push(stopsLineN[i - 2])
        }
        return `On line N, you will travel through stops ${journey} a total of ${numberOfStopsLineN(N, leaveStation, N2, destinationStation)}`
    }
}

const destinationLineL = function(L,leaveStation, L2, destinationSation){
    const stopsLineL = [' 8th ', ' 6th ', ' Union Square ', ' 3rd ', ' 1st '];
    let journey = []
    if( L === L2){
        for(let i = 0; i < stopsLineL.length; i++){
            if(stopsLineL[ i-1 ] === destinationSation)
            break
            journey.push(stopsLineL[i - 2])
        }
        return `On line L, you will travel through stops ${journey} a total of ${numberOfStopsLineL(L,leaveStation, L2, destinationSation )} stops`
    }
}

//===========================/////////

//===========================/////////


//Now, if the startling line[i] is different to the ending index 
    //Loop through endline index , until 

    //Make the first loop , loop throught until the index of Union Square and then break
        //Then loop through the second array until youve read the indexOf the line desitnation

// So if the index of the destination line is the same as the start line (So if its on the same line);
    // loop through that same lines array
        //while the end stops/destination is != the index[i] of that stops[line], 
        // so eg, while  you are looping through the N array, while the indexOf lineNstops != indexOf lineNstops[i] "("N","Times Square","N",'Union square)" , keep looping through
            // When it is , 
            //for loop ,if the i of the for loop is not the same index
            // + the [i] of items to a new array ? and name it pastStops
            //
            // +1 to the iterator and keep looping






/*   END FUNCTION WILL LOOK SOMTHING LIKE THIS
const start = function(line, stop){
    const stopsLineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
    const stopsLineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
    const stopsLine6 = ['Grand central', '33rd', '28th', '23rd', 'Union Square','Astor place'];
    if(line === "N"){
        if(stop === 'Times Square' || stop === '34thOnN'|| stop ==='28thOnN' || stop ==='23rdOnN' || stop ==='Union Square' || stop === '8thOnN'){
            return ` On Line: ${line}, You will travel through stops: ${stopsLineN}, a total of ${numberOfStopsLineN()} stops`
        }
        return `Pick an appropiate line`
    } else if(line === "L"){
        if(stop === '8thOnL' || stop ===  '6thOnL' || stop === 'Union Square' || stop ===  '3rdOnL' || stop === '1stOnL'){
            return `On Line: ${line}, You will travel through stops: ${stopsLineL}, a total of ${numberOfStopsLineL()} stops `
        }
        return `Pick an appropiate line`
    } else if(line === "6"){
        if(stop === 'Grand central' || stop ==='33rdOn6' || stop === '28thOn6' || stop === '23rdOn6' || stop === 'Union Square' || stop === 'Astor place'){
            return `On Line ${line}, You will travel through stops: ${stopsLine6}, a total of ${numberOfStopsLine6()} stops `
        }
        return `Pick an appropiate line`
    } else {
        return `Unfortunetly you cannot get on at the stop from that line`
    }
}


*/ 


//console.log(start("6", '33rdOn6'))
//========================================================//


//console.log(numberOfStopsLineN(stopsLineN,"Times Square",stopsLineN,"23rd"))
//console.log(numberOfStopsLineL("L","8th", "L" ,"Union Square"))
//console.log(numberOfStopsLine6("6","Grand central","6","23rd"))// 

//console.log(destinationLine6("lineL","Times Square","23rd"))
//console.log(destinationLineN("N","34th","N","Union Square"))
//console.log(destinationLineL("L","8th","L","3rd"))
//startRedo()




/*
const lineN = function(line, end){
    const stopsLineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
    const stopsLineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
    const stopsLine6 = ['Grand central', '33rd', '28th', '23rd', 'Union Square','Astor place'];
    let stop = 0;
    for(let i = 0; i < stopsLineN.length; i++){
        if(~stopsLineN.indexOf(end)){
            let stop = ~stopsLineN.indexOf(end)
            return stop
        }
    }
}

console.log(lineN("N","Times Square"))
*/


//If You enter N, Times Square, L, 8thOnL
//Loop through Nline array 
//if the index of Nline array === Union Square on L
// 

//CREATE NEW ARRAY WITH THE INPUTS OF THE USER. LOOP THROUGH THE LINE ARRAT AND PRINT THE LINES THAT ARE PUSHED INTO THE NEW ARRAY ?

//MAYEB BE USE SPLICE ??

//




//   W O R K I N G =======B U T==========M A D E=========R E D U N D A N T====================//
/*
const numberOfStopsLineN = function(){
    const stopsLineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
    let numberOfStops = 0;
    for(let i = 0; i < stopsLineN.length; i++){
        numberOfStops += 1
    }
    return numberOfStops
}

//I will have to edit these to return the correct number of stops
const numberOfStopsLineL = function(){
    const stopsLineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
    let numberOfStops = 0;
    for(let i = 0; i < stopsLineL.length; i++){
        numberOfStops += 1
    }
    return numberOfStops
}

//I will have to edit these to return the correct number of stops , Edit them, make the similar to the destination functions, 
const numberOfStopsLine6 = function(startLine, startDestination, endLine, endDestination){
    const stopsLine6 = ['Grand central', '33rd', '28th', '23rd', 'Union Square','Astor place'];
    let numberOfStops = 0;
    for(let i = 0; i < stopsLine6.length; i++){
        numberOfStops += 1
        if(stopsLine6[i] === endDestination){
            break
        }
    }
    return numberOfStops - 1
} 
*/


