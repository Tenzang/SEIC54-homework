const lines = {
    lineL: ['Times Square' , ' 34th ', ' 28th ', ' 23rd ', ' Union Square ', ' 8th '],
    lineN: [' Grand central ', ' 33rd ', '28th ', ' 23rd ', ' Union Square ',' Astor place '],
    line6: [' 8th ', ' 6th ', ' Union Square ', ' 3rd ', ' 1st '],
}

const loopThroughStops = function(startLine, startStop, endLine, endStop){
    let numberOfStops = 0;

    let journey = [];

    let lineSelect = lines[startLine];

    let startSelect = lines[startLine].indexOf(startStop)

    let endLineSelect  = lines[endLine];

    let endSelect = lines[endLine].indexOf(endStop);

if(startLine === lines.lineL || lineSelect === lines.lineN || lineSelect === lines.line6)
    for(let i = startSelect; i <= lineSelect.length; i++){
        journey.push(lineSelect[i])
        numberOfStops++
        break
    } 
    if(startStop != endStop){
        for(let i = endLineSelect.length-1; i >= endSelect; i--){
            journey.push(endLineSelect[i])
            numberOfStops++

        }
    }
    return `You Must Travel through the Following stops on ${startLine}: ${journey}in order to get to${endStop} \nUnion Square being your change over \nMaking the journey a total of ${numberOfStops} stops`
}

console.log(loopThroughStops("line6"," 3rd ","lineL"," 34th "))

/*
console.log(lineSelect)
    console.log(startSelect)
    console.log(endLineSelect)
    console.log(endSelect)
    */