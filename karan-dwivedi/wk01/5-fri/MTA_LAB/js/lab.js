const nStops = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const lStops = ["8th", "6th", "Union Square", "3rd", "1st"];
const sixStops = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];


const planTrip = function(lineOn,stopOn,lineOff,stopOff){

};

// "7 stops in total." - 

// SMALLER FUNCTIONS TO GET JOURNEYS FROM N,L AND 6

const journeysFromN = function(stopOn,stopOff){
    var stopOnIndex = (nStops.indexOf(stopOn));
    var stopOffIndex = (nStops.indexOf(stopOff));
    var totalStopsFromN = Math.abs(stopOnIndex - stopOffIndex);
    return totalStopsFromN;
}
const journeysFromL = function(stopOn,stopOff){
    var stopOnIndex = (lStops.indexOf(stopOn));
    var stopOffIndex = (lStops.indexOf(stopOff));
    var totalStopsFromL = Math.abs(stopOnIndex - stopOffIndex);
    return totalStopsFromL;
}
const journeysFromSix = function(stopOn,stopOff){
    var stopOnIndex = (sixStops.indexOf(stopOn));
    var stopOffIndex = (sixStops.indexOf(stopOff));
    var totalStopsFromSix = Math.abs(stopOnIndex - stopOffIndex);
    return totalStopsFromSix;
}

const journeyFromNOn = function(stopOn){
    varStopOnIndex = (nStops.indexOf(stopOn));
    varTotalStopsFromNOn = Math.abs(varStopOnIndex - 4);
    return varTotalStopsFromNOn;
}

const journeyFromNOff = function(stopOff){
    varStopOffIndex = (nStops.indexOf(stopOff));
    varTotalStopsFromNOff = Math.abs(varStopOffIndex - 4);
    return varTotalStopsFromNOff;
}
const journeyFromLOn = function(stopOn){
    varStopOnIndex = (lStops.indexOf(stopOn));
    varTotalStopsFromLOn = Math.abs(varStopOnIndex - 2);
    return varTotalStopsFromLOn;
}

const journeyFromLOff = function(stopOff){
    varStopOffIndex = (lStops.indexOf(stopOff));
    varTotalStopsFromLOff = Math.abs(varStopOffIndex - 2);
    return varTotalStopsFromLOff;
}
const journeyFromSixOn = function(stopOn){
    varStopOnIndex = (sixStops.indexOf(stopOn));
    varTotalStopsFromSixOn = Math.abs(varStopOnIndex - 4);
    return varTotalStopsFromSixOn;
}

const journeyFromSixOff = function(stopOff){
    varStopOffIndex = (sixStops.indexOf(stopOff));
    varTotalStopsFromSixOff = Math.abs(varStopOffIndex - 4);
    return varTotalStopsFromSixOff;
}
// TOTAL TRIPS FUNCTION - BIGGER FUNCITON CALLING SMALLER FUNCTIONS 

const totalStops = function (lineOn,stopOn,lineOff,stopOff){
    if(lineOn === "N" && lineOff ==="N"){
        return (journeysFromN(stopOn, stopOff));
    } // This can be shorter if we say both are equal, will clean this up later.
        else if(lineOn === "L" && lineOff ==="L"){
            return (journeysFromL(stopOn, stopOff));
        }
        else if(lineOn === "6" && lineOff ==="6"){
            return "You are travelling a total of " + journeysFromSix(stopOn, stopOff) + " stops";
        }
        else if(lineOn === "6" && lineOff ==="N"){
            return "You are travelling a total of " + ( journeyFromSixOn(stopOn) + journeyFromNOff(stopOff) ) + " stops";
        }
        else if(lineOn === "6" && lineOff ==="L"){
            return "You are travelling a total of " + ( journeyFromSixOn(stopOn) + journeyFromLOff(stopOff) ) + " stops";
        }
        else if(lineOn === "N" && lineOff ==="L"){
            return "You are travelling a total of " + ( journeyFromNOn(stopOn) + journeyFromLOff(stopOff) ) + " stops";
        }
        else if(lineOn === "N" && lineOff ==="6"){
            return "You are travelling a total of " + ( journeyFromNOn(stopOn) + journeyFromSixOff(stopOff) ) + " stops";
        }
        else if(lineOn === "L" && lineOff ==="6"){
            return "You are travelling a total of " + ( journeyFromLOn(stopOn) + journeyFromSixOff(stopOff) ) + " stops";
        }
        else if(lineOn === "L" && lineOff ==="N"){
            return "You are travelling a total of " + ( journeyFromLOn(stopOn) + journeyFromNOff(stopOff) ) + " stops";
        }
        
    };

    console.log(totalStops("6","Grand Central", "6", "Union Square"));
    console.log(totalStops("6","33rd", "N", "Times Square"));
    console.log(totalStops("N","Times Square", "L", "8th"));
    console.log(totalStops("L","1st", "6", "23rd"));



    
    

//
// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."

// "Change at Union Square."

// "Your journey continues through the following stops: 23rd, 28th, 33rd."

// planTrip('L', '1st', 'N', '8th');
// planTrip('6', 'Times Square', '6', '33rd');
// planTrip('N', 'Union Square ', '6', 'Times Square');


// VERY USEFUL METHOD FOR NUMBER OF STOPSS!!! find http://speakingjs.com/es5/ch12.html#string_prototype_methods:~:text=backward.%20It%20returns%20the%20position-,where,-searchString%20has%20been%20found%20or 


// in operator - if station N is in input, then call function x
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

//USEFUL FOR TRAINS LAB - SPLITTING

//> 'a,  b,c, d'.split(',')  // string
// [ 'a', '  b', 'c', ' d' ]
// > 'a,  b,c, d'.split(/,/)  // simple regular expression
// [ 'a', '  b', 'c', ' d' ]
// > 'a,  b,c, d'.split(/, */)   // more complex regular expression
// [ 'a', 'b', 'c', 'd' ]
// > 'a,  b,c, d'.split(/, */, 2)  // setting a limit
// [ 'a', 'b' ]
// > 'test'.split()  // no separator provided
// [ 'test' ]


//USEFUL FOR TRAINS EXAMPLE - SPLITTING

// different properties while accesing arrays - This could be useful for the subway line system
// THink of Splice , shift, join etc. 

// let amazingFrenchAuthorsNew = [ 
//     "Alexandre Dumas", "Gustave Flaubert", "Voltaire", "Marcel Proust"
// ];

// amazingFrenchAuthorsNew.pop();

// console.log(amazingFrenchAuthorsNew);

// amazingFrenchAuthorsNew.push("Marceloooo");

// console.log(amazingFrenchAuthorsNew);


// amazingFrenchAuthorsNew.reverse();

// console.log(amazingFrenchAuthorsNew);


// amazingFrenchAuthorsNew.shift();

// console.log(amazingFrenchAuthorsNew);

// amazingFrenchAuthorsNew.unshift("Marcellooo");

// console.log(amazingFrenchAuthorsNew);

// amazingFrenchAuthorsNew.join();

// console.log(amazingFrenchAuthorsNew);



// const practiceJoin = [1,2,3,4,5];

// console.log(practiceJoin.join());


// let months = ["January", "February", "March", "April", "Monday", "Tuesday"];

// const days = months.splice(4,2);

// console.log (days)



