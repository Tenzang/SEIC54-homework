   

const trainLines = {
    lLine: [`1st`, `3rd`, `unionSquare`, `6th`, `8th`],
    nLine: [`timeSquare`, `34th`, `28th`, `23rd`, `unionSquare`, `8th`],
    sixthLine: [`grandCentral`, `33rd`, `28th`, `23rd`, `unionSquare`, `astorPlace`]
};


const lLinePlan = function (){ // produce an array for lLine
    let x = trainLines.lLine;
    for (let i = 0; i <= x.length; i++) {
        return x; 
    }
    
}
console.log(lLinePlan());



const nLinePlan = function (){ // produce an array for nLine
    let x = trainLines.nLine;
    for (let i = 0; i < x.length; i++) {
        return x; 
    }
    
}
console.log(nLinePlan());



const sixthLinePlan = function (){ // produce an array for nLine
    let x = trainLines.sixthLine;
    for (let i = 0; i < x.length; i++) {
        return x; 
    }
    
}
console.log(sixthLinePlan());




const planTrip = function(lineDepart, stopDepart, lineArrive, stopArrive) { // for lLine

// lineDepart = lLinePlan().indexOf(`unionSquare`);

if (lineDepart === `lLine` && stopDepart.indexOf() < trainLines.lLine.indexOf(`unionSquare`)) {
    return `bitch`;
}



};

console.log(planTrip(`lLine`, `unionSquare`, ` `, `` ))




// indexOf is super important to use