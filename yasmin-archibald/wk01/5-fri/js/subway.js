const linesArray = [
  //1st is nLine 2nd is lLine 3rd is 6line
  ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  ["8th", "6th", "Union Square", "3rd", "1st"],
  ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
];
const whichLine = function (lineName, aFunction) {
  if (lineName === "nLine") {
    return linesArray[0];
  } else if (lineName === "lLine") {
    return linesArray[1];
  } else {
    return linesArray[2];
  }
};
const stops = function (lineName, pointAStation, pointBStation) {
  let line = whichLine(lineName);
  if (line.indexOf(pointAStation) < line.indexOf(pointBStation)) {
    return line.indexOf(pointBStation) - line.indexOf(pointAStation); // for forward trips
  } else {
    return line.indexOf(pointAStation) - line.indexOf(pointBStation); //for reverse trips
  }
};

const travelThrough = function (lineName, pointAStation, pointBStation) {
  let line = whichLine(lineName);
  if (line.indexOf(pointAStation) < line.indexOf(pointBStation)) {
    return line.indexOf(pointBStation) - line.indexOf(pointAStation) - 1;
  } else if (line.indexOf(pointAStation) > line.indexOf(pointBStation)) {
    return line.indexOf(pointAStation) - line.indexOf(pointBStation) - 1;
  } // b goes first bc when going forward a will always be the smaller number, so this prevents the stops from being in the negatives for forward trips // however i can use this to show the correct number for reverse trips by swapping them
};

const myTrip = function (lineName, pointAStation, pointBStation) {
  let travelPast = travelThrough(lineName, pointAStation, pointBStation);
  let stop = stops(lineName, pointAStation, pointBStation);
  return (
    "You travel from " +
    pointAStation +
    " to " +
    pointBStation +
    " on " +
    lineName +
    "." +
    " You will travel past " +
    travelPast +
    " stations. " +
    stop +
    " stops in total to reach your destination."
  );
};

console.log(myTrip("nLine", "8th", "34th")); //expected output, travel past 3 stations // 4 stops

console.log(myTrip("nLine", "Union Square", "28th")); //expected output travel past 1 station // 2 stops

console.log(myTrip("nLine", "34th", "Union Square")); //expected output travel past 2 stations // 3 stops

console.log(myTrip("lLine", "6th", "3rd")); //expected output travel past 1 2 stops in total
console.log(myTrip("lLine", "3rd", "6th"));

console.log(myTrip("6Line", "Astor Place", "33rd")); //expected output past 3 4 stops total
