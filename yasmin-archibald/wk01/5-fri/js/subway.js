<<<<<<< HEAD
const allLines = {
  nLine: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lLine: ["8th", "6th", "Union Square", "3rd", "1st"],
  "6Line": [
    "Grand Central",
    "33rd",
    "28th",
    "23rd",
    "Union Square",
    "Astor Place",
  ],
};
const travelThroughArray = function (
  //incomplete, needs to output the array as a string instead toString() would be useful probably
  lineName,
  pointAStation,

  pointBStation
) {
  let line = allLines[lineName];
  let pointAIndex = line.indexOf(pointAStation);
  let pointBIndex = line.indexOf(pointBStation);
  let totalArrNumForward = line.indexOf(pointBStation);
  let totalArrNumBackward = line.indexOf(pointAStation); //this doesnt use the index number of the last thing, just the total length // aka doesnt start from 0
  if (pointAIndex < pointBIndex) {
    return line.slice(pointAIndex + 1, totalArrNumForward);
  }
  return line.slice(pointBIndex + 1, totalArrNumBackward).reverse();
  
  //console.log(testFunction("nLine", "Times Square", "Union Square")) //expected output
  //times sq = 0 U sq = 4 theres 3 stations unaccounted for between them so stops - 1 is the number
  //
}; // slice() turns part of an array into another array // if pointALine === pointBLine use .indexOfPointAStation and indexOfPointBStation
// console.log(
//   "test!!!!!!!!!!!!",
//   travelThroughArray("nLine", "Times Square", "Union Square")
// );
// console.log(
//   "test in REVERSE this time!!! ",
//   travelThroughArray("nLine", "Union Square", "Times Square")
// );

const stops = function (lineName, pointAStation, pointBStation) {
  let line = allLines[lineName];

  if (line.indexOf(pointAStation) < line.indexOf(pointBStation)) {
    return line.indexOf(pointBStation) - line.indexOf(pointAStation); // for forward trips
  } else {
=======
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
>>>>>>> f2a6c541b80e9033846401493e637621ab378dff
    return line.indexOf(pointAStation) - line.indexOf(pointBStation); //for reverse trips
  }
};

<<<<<<< HEAD
const areThereTwoLines = function (
  pointALineName,
  pointAStation,
  pointBLineName,
  pointBStation
) {
  if (pointALineName === pointBLineName) {
    return stops(pointALineName, pointAStation, pointBStation);
  } else {
    return (
      stops(pointALineName, pointAStation, "Union Square") +
      stops(pointBLineName, "Union Square", pointBStation)
    );
  }
};

const myTrip = function (
  pointALineName,
  pointAStation,
  pointBLineName,
  pointBStation
) {
  let stop = areThereTwoLines(
    pointALineName,
    pointAStation,
    pointBLineName,
    pointBStation
  );

  if (pointALineName === pointBLineName) {
    let travelThrough = travelThroughArray(
      pointALineName,
      pointAStation,
      pointBStation
    );
    return (
      "You travel from " +
      pointAStation +
      " to " +
      pointBStation +
      " on " +
      pointALineName +
      "." +
      " You will travel past " +
      travelThrough +
      ". " +
      stop +
      " stops in total to reach your destination."
    );
  } else {
    let travelThroughLine1 = travelThroughArray(
      pointALineName,
      pointAStation,
      "Union Square"
    );
    let travelThroughLine2 = travelThroughArray(
      pointBLineName,
      "Union Square",
      pointBStation
    );
    return (
      "You travel from " +
      pointAStation +
      " to Union Square on " +
      pointALineName +
      ". You will travel past " +
      travelThroughLine1 +
      ". Then you travel from Union Square to " +
      pointBStation +
      " on " +
      pointBLineName +
      ". You will travel past " +
      travelThroughLine2 +
      ". " +
      stop +
      " stops in total to reach your destination."
    );
  }
};

console.log(myTrip("nLine", "8th", "nLine", "34th")); //expected output, travel past ["Union Square" "23rd", "28th"]// 4 stops

console.log(myTrip("nLine", "Union Square", "nLine", "28th")); //expected output travel past ["23rd"] // 2 stops

console.log(myTrip("nLine", "34th", "nLine", "Union Square")); //expected output travel past ["28th", "23rd"] stations // 3 stops

console.log(myTrip("lLine", "6th", "lLine", "3rd"));

//expected output travel past ["Union Square"] 2 stops total

console.log(myTrip("lLine", "3rd", "lLine", "6th"));
//expected output travel past ["Union Square"] 2 stops total

console.log(
  "this one has a bug that I could fix by using anothe if else thing that detetects an empty array and doesn't use it or something like that",
  myTrip("6Line", "Astor Place", "nLine", "34th")
);
// expected output Astor to 34th. Go from Astor place to union square on 6line travel through [Union Square], then from Union Square on nline to 34th on nLine travel past [23rd, 28th] 4 stops in total
//travel through
//weird one

console.log(myTrip("6Line", "Grand Central", "nLine", "Times Square"));
// // expected output // You travel from Grand Central to Union Square on 6Line. Then you travel from Union Square to Times Square on nLine. You will travel past ["33rd","28th","23rd",] + ["34th", "28th", "23rd"]. 8 stops in total to reach your destination.

console.log(myTrip("lLine", "3rd", "6Line", "23rd")); //expected output 2 stops
=======
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
>>>>>>> f2a6c541b80e9033846401493e637621ab378dff
