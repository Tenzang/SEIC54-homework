const lines = [
  (nLine = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]),
];
const reverseLines = [
  (nLine = ["8th", "Union Square", "23rd", "28th", "34th", "Times Square"]),
];

const planTrip = function (lines, pointAStation, pointBStation) {
  if (lines[0].indexOf(pointAStation) < lines[0].indexOf(pointBStation)) {
    return myTrip(lines, pointAStation, pointBStation);
  } else {
    return myReverseTrip(lines, pointAStation, pointBStation);
  }
};

const reverseStops = function (pointAStation, pointBStation) {
  return (
    reverseLines[0].indexOf(pointBStation) -
    reverseLines[0].indexOf(pointAStation)
  );
};
const stops = function (pointAStation, pointBStation) {
  return lines[0].indexOf(pointBStation) - lines[0].indexOf(pointAStation);
};

const travelThrough = function (pointAStation, pointBStation) {
  return lines[0].indexOf(pointBStation) - lines[0].indexOf(pointAStation) - 1; // b goes first bc when going forward a will always be the smaller number, so this prevents the stops from being in the negatives for forward trips
};

const reverseTravelThrough = function (pointAStation, pointBStation) {
  return (
    reverseLines[0].indexOf(pointBStation) -
    reverseLines[0].indexOf(pointAStation) -
    1
  );
};

const myReverseTrip = function (reverseLines, pointAStation, pointBStation) {
  return (
    "You travel from " +
    pointAStation +
    " to " +
    pointBStation +
    " on " +
    reverseLines +
    "." +
    " You will travel past " +
    reverseTravelThrough(pointAStation, pointBStation) +
    " stations. " +
    reverseStops(pointAStation, pointBStation)
  );
};
// Test case 1 reverse Dusty is traveling from Union Square to 34th // expected output "You will travel from Union Square to 34th on nLineRev. You will travel past 2 stations. 3 stops in total to reach your destination"
console.log(
  "Reverse test 1 " + myReverseTrip("nLineRev", "Union Square", "34th")
);
const myTrip = function (lines, pointAStation, pointBStation) {
  return (
    "You travel from " +
    pointAStation +
    " to " +
    pointBStation +
    " on " +
    lines +
    "." +
    " You will travel past " +
    travelThrough(pointAStation, pointBStation) +
    " stations. " +
    stops(pointAStation, pointBStation) +
    " stops in total to reach your destination."
  );
};

// test case 1
console.log("Test one " + myTrip("nLine", "Times Square", "34th")); //expected output "you travel from times square to 34th on nline. You travel through 0 stops. 1 stops in total to reach your destination"

// const stops = function (pointAStation) {
//   return "this is an indexOf test " + lines[0].indexOf(pointAStation);
// };

// test case 2: Ben travels from times square to 8th // expected output "you travel from Times Square to 8th on nLine. You travel through 4 stations. 5 stops in total"
console.log("test two " + myTrip("nLine", "Times Square", "8th"));

//test case 3: Jacklyn travels from 8th to 34th // expected output "You travel from 8th to 34th on nLine. You travel through 3 stations. 4 stops in total"
console.log(
  "!!test three plan trip test 1 " + planTrip("nLine", "8th", "34th")
);

//test case 5: Boo travels from 34th to union square // expected output "You travel from 34th to Union Square on nLine. You travel through 2 stations. 3 stops in total"
console.log("test five " + myTrip("nLine", "34th", "Union Square"));
