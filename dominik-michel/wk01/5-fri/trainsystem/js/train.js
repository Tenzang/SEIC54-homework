// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```

// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

    const stops={
      N: ["N1","N2","N3","N4", "UnionSquere", "N6"],
      L : ["L1", "L2" ," UnionSquere", "L4", "L5"],
      B :["B1","B2","B3","B4", "UnionSquere", "B6"] /*   6=B    */
      }
     
      let stopCount=0;

  const countStops=function(lines, startStation,finalStation){
      let arrayOfStops= stops[lines]
      let stop= ``;
      let startStopIndex= arrayOfStops.indexOf(startStation);
      let endStopIndex= arrayOfStops.indexOf(finalStation);

      if(startStopIndex<endStopIndex){
          for(let i=startStopIndex +1; i<=endStopIndex;i++){
              stop= stop + arrayOfStops[i] + ', ';
              stopCount++;
          }
      } else {
          for(let i=startStopIndex; i>= endStopIndex; i--){
              stop= stop + arrayOfStops[i] + `, `;
              stopCount++;
          }
      }
      return stop
  }

const planTrip= function(statLine, startStation,finalLine,finalStation){
    stopCount=0;
    if(statLine===finalLine){
      let sipmleTravel=countStops(statLine, startStation,finalLine,finalStation);
      console.log( `You have to Travel on ${statLine} and travel through ${sipmleTravel} and exit on ${ finalStation} for your destination`)
   } else {
       let travelFirstLine= countStops(statLine, startStation);
       console.log(`You have to travel on ${statLine} and travel through ${travelFirstLine}`)
       console.log(`Change at UnionSquere`)
      let travelSecondLine=countStops(finalLine, finalStation);
      console.log(`Your Journey continues on ${finalLine } through the following stops ${travelSecondLine} until you reach your final destination ${finalStation}`)
    }
    console.log(`${stopCount} stops in total`)
}
 planTrip("N","N2","L","L5")


 // if(finalStation===  "N1" || finalStation==="N2" ||finalStation==="N3" || finalStation=== "N4" ||finalStation=== "UnionSquere" ||finalStation=== "N6" ){
    //     var nRouteToSq;
    //     for (let i = stops.N.indexOf(startStation); i < stops.N.length; i++) {
    //         if(stops.N[i]== "N6"){
    //             break;
    //          }
    //          nRouteToSq=stops.N[i]
    //         // console.log( `My ${ i+1 } choice is ${ stops.N[i] }.` );
    //         console.log(nRouteToSq)
    //     }
    // }
    // if(finalStation===  "1" || finalStation==="N2" ||finalStation==="N3" || finalStation=== "N4" ||finalStation=== "UnionSquere" ||finalStation=== "N6" ){
    //     var nRouteToSq;
    //     for (let i = stops.N.indexOf(startStation); i < stops.N.length; i++) {
    //         if(stops.N[i]== "N6"){
    //             break;
    //          }
    //          nRouteToSq=stops.N[i]
    //         // console.log( `My ${ i+1 } choice is ${ stops.N[i] }.` );
    //         console.log(nRouteToSq)
    //     }
    // }
    // if(finalStation===  "B1" || finalStation==="B2" ||finalStation==="B3" || finalStation=== "B4" ||finalStation=== "UnionSquere" ||finalStation=== "B6" ){
    //     var nRouteToSq;
    //     for (let i = stops.B.indexOf(startStation); i < stops.B.length; i++) {
    //         if(stops.N[i]== "N6"){
    //             break;
    //          }
    //          nRouteToSq=stops.N[i]
    //         // console.log( `My ${ i+1 } choice is ${ stops.N[i] }.` );
    //         console.log(nRouteToSq)
    //     }
    // }
    
    