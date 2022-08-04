




const lineLN6 = {
        lineL: ['Times Square' , ' 34th ', ' 28th ', ' 23rd ', ' Union Square ', ' 8th '],
        lineN: [' Grand central ', ' 33rd ', '28th ', ' 23rd ', ' Union Square ',' Astor place '],
        line6: [' 8th ', ' 6th ', ' Union Square ', ' 3rd ', ' 1st '],
}



const numberOfStops = function(startLine,startStop,endStop){
    let lines = lineLN6[startLine]
    let journey = []
    let stops = ``;
    let indexToStartStop = lines.indexOf(startStop)
    let indexToEndAt = lines.indexOf(endStop)

    if( startStop === endStop ){
        for(let i = 0; i < lines; i++){
            stops++
            if(lines[ i-1 ] === endStop)
            break
            journey.push(lines[i - 2])
        }
        return `On line L, you will travel through stops ${journey} a total of ${stops} `
    }
}

console.log(numberOfStops("lineL","Times Square","8th"))


//====================================================================================================================================//




const destinationLineN = function(N,leaveStation,N2,destinationStation ){
    const stopsLineN = [' Times Square ', ' 34th ', ' 28th ', ' 23rd ', ' Union Square ', ' 8th '];
    let journey = [];
    if( N === N2 ){
        for(let i = 0; i < stopsLineN.length; i++){
            if(stopsLineN[ i-1 ] === destinationStation)
            break
            journey.push(stopsLineN[i - 2])
        }
        return `On line N, you will travel through stops ${journey} a total of ${numberOfStops(N, N2, destinationStation)}`
    }
}


const destinationLineL = function(L,leaveStation, L2, destinationSation){
    const stopsLineL = [' 8th ', ' 6th ', ' Union Square ', ' 3rd ', ' 1st '];
    let journey = []
    if( L === L2){
        for(let i = 0; i < stopsLineL.length; i++){
            if(stopsLineL[i -1] === destinationSation)
            break
            journey.push(stopsLineL[i - 1])
        }
        return journey //numberOfStops(L, L2, destinationSation )`
    }
}


const destinationLine6 = function(six,leaveStation, sixTwo, destinationStation){
    const stopsLine6 = ['Grand central ', '33rd ', '28th ', '23rd ', 'Union Square ','Astor place '];
    let journey = [];
    if( six === sixTwo){
        for(let i = 0; i < stopsLine6.length; i++){
            if(stopsLine6[i - 1] === destinationStation)
            break
            journey.push(stopsLine6[i - 2])
        }
        return `On line 6, You will travell through stops ${journey}, a total of ${numberOfStops(six,sixTwo,destinationStation)} stops`
    }
}



const letsGo = function(startLine, startStop, endLine, endStop){
    const arrayTolLoopThrough = lineLN6[startLine]

    if( startLine === lineLN6.lineN ){
        destinationLineN(startLine,startStop,endLine,endStop);
        let firstrip = numberOfStops(startLine, startStop, endStop);
    }
}

//console.log(letsGo(lineLN6["lineL"],"Times Square","lineN","8th"));