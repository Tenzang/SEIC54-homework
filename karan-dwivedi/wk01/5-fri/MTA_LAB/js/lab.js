const nStops = ["Times Square", "34th", "28th", "23rd", "Union Square", "3rd", "1st"];

const planTrip = function(lineOn,stopOn,lineOff,stopOff){
// will call / loop through all the functions with if / else statements
// 
};

// if lineOn = N. Call this function, else if line on = 6, call this function. else if line on = L, call this function. 

// function NStartingJourneys(stopOn,stopOff)
// let stopOn;
// let stopOff;
// var startingStop = 0
// var totalStops = difference b/w index of starting stop and ending stop
//console.log(totalStops)
// for (i=0;i<nStops.length;i++){
    //var totalStops = 
    break;

//}

// function to calculate number of stops if getting on any stop from line N

const journeysFromN = function(stopOn,stopOff){
    var stopOnIndex = (nStops.indexOf(stopOn));
    var stopOffIndex = (nStops.indexOf(stopOff));
    var totalStops = Math.abs(stopOnIndex - stopOffIndex);
    return totalStops;
}
console.log(journeysFromN("Times Square","23rd"));


//Will have three 
const initialJourney = function (lineOn, allStops, stopOn){
const journeyStops = //will this be a function?
    console.log("You must travel through the following stops ${totalStops}, ${stop on} and change at Union Square. Your journey continues through ${moreStops}. You have ${totalStops}in total" )
}

//out of the above we need to find:
//1. totalStops 
//2. Stop on / Last stop / Change stop(Union Square)
//3. Additional stops after changing
//4. find Total Stops

// 4. Finding Total Stops 

const totalStops = function(lineOn,stopOn,lineOff,stopOff){
    if (lineOn === "N" && stopOn === "Times Square")
    var firstStop = nstops[0];}
    if (stopOff === "34th");{
        console.log("You will travel two stops");
    }
        else{
            console.log("undefined stops")
        }
    }
}

planTrip('N', 'Times Square', 'N', '8th');


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



