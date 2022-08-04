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
