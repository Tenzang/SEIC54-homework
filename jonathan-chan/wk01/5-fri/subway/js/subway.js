const nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
const lLine = ['8th', '6th', 'Union Square', '3rd', '1st']
const sixLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

//test choo chooooooooooooooooooo
// console.log(planTrip(nLine, 'Times Square', lLine, '8th'))
console.log (nLine)
//chooooooooooooooooooooooooooooo

function checkStart (startLine, startStation) {
    const start = startLine.indexOf(startStation);
    return start;
};

function checkEnd (endLine, endStation){
    const end = endLine.indexOf(endStation);
    return end;
};

function startToUnionSquare (startLine, startStation, endLine, endStation) {
    const s = checkStart(startLine,startStation);
    const newLine1 = [];

    if (startStation === 'Union Square') {
        return newLine1;
    }
    if (startLine === nLine) {
        if (s < 5) {
            newLine1.push(...startLine.slice(s,4));
        }  else {
            newLine1.push(...startLine.slice(5,s+1));
            newLine1.reverse();
        }
    }
    if (startLine === lLine) {
        if (s < 3) {
            newLine1.push(...startLine.slice(s,2));
        }  else {
            newLine1.push(...startLine.slice(3,s+1));
            newLine1.reverse();
        }
    }
    if (startLine === sixLine) {
        if (s < 5) {
            newLine1.push(...startLine.slice(s,4));
        }  else {
            newLine1.push(...startLine.slice(5,s+1));
            newLine1.reverse();
        }
    }          
    return newLine1
};

function endToUnionSquare (startLine, startStation, endLine, endStation) {
    const e = checkEnd(endLine, endStation);
    const endLine1 = [];

    if (endStation === 'Union Square') {
        return endLine1;
    }
    if (endLine === nLine) {
        if (e < 5) {
            endLine1.push(...endLine.slice(e,4));
            endLine1.reverse();
        }  else {
            endLine1.push(...endLine.slice(5,e+1));
        }
    }
    if (endLine === lLine) {
        if (e < 3) {
            endLine1.push(...endLine.slice(e,2));
            endLine1.reverse();
        }  else {
            endLine1.push(...endLine.slice(3,e+1));
        }
    }
    if (endLine === sixLine) {
        if (e < 5) {
            endLine1.push(...endLine.slice(e,4));
            endLine1.reverse();
        }  else {
            endLine1.push(...endLine.slice(5,e+1));
        }
    }
    return endLine1
};

function planTrip (startLine, startStation, endLine, endStation) {
    const journeyStart = startToUnionSquare(startLine, startStation);
    const journeyEnd = endToUnionSquare(startLine, startStation, endLine, endStation);
    let totalJourney = startToUnionSquare(startLine, startStation);
    const startName = [];
    const endName = [];
    //start destination name
    if (startLine === nLine) {
        startName.push('N')
    }
    if (startLine === lLine) {
        startName.push('L')
    }
    if (startLine === sixLine) {
        startName.push('6')
    }
    //end destination line name
    if (endLine === nLine) {
        endName.push('N')
    }
    if (endLine === lLine) {
        endName.push('L')
    }
    if (endLine === sixLine) {
        endName.push('6')
    }
    //checks to see if youre at the same station
    if (startLine.indexOf(startStation) === endLine.indexOf(endStation) && startLine === endLine) {
        return `You are already at your destination`
    }
    //check to see if youre starting at the intersection
    if (startStation === 'Union Square') {
        return `You are already at ${startStation}. Take the following stops on the ${endLine}: ${journeyEnd.join(', ')}.  ${journeyEnd.length} stops in total.`
    } else {
        totalJourney.push('Union Square')
        totalJourney.push(journeyEnd, )
        return `Travel the following stops on the ${startName} Line: ${journeyStart.join(', ')}. Change at Union Square. Travel the following stops on the ${endName} Line: ${journeyEnd.join (', ')}. ${(totalJourney.length+journeyEnd.length)-1} stops in total.`
    }

};
