//make an array for one line then look at the requrements, do not make more lines now

// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th

const nLine = ["Times Square", "34th", "28th", "23th", "Union Square", "8th"];

const planTrip = function (startingStation, line, destinationStation) {
  // starting station = "Times Square" array indecies 0, and destinationStation is array indecies 5.
  // count all stations from starting station up to and including destinationStation
  for (let i = 0; i < line.length; i++) {
    if (line[i] === 0 && line[i] === startingStation) {
      //I want to start counting from whenever the user's starting station comes up in this array and I'm not sure how to reassign i to be the array indecies of the users input starting station so i'm going to do it this way so that we only continue if the user's starting station is nLine[0];
      console.log()
    }
    console.log(line[i]);
  }
};
planTrip("Times Square", nLine, "8th");
nLine.find;
console.log(nLine["startingStation"].find);
//The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// const planTrip = function(startingStation, line, destinationStation){
//
// };
// planTrip

// planTrip (Times Square, nLine, 8th) // console.log should output "You must travel through the following stops on the N line: 34th, 28th, 23th, Union Square."
// "5 stops in total"  // this does NOT include the first stop, but DOES include the last stop

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
