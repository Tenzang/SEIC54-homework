// const simonSays = function (str) {
//   const simonResponse = [
//     "Sure",
//     "Woah, chill out!",
//     "Fine, be that way",
//     "whatever",
//   ];
//   let last = str.charAt(str.length - 1);
//   if (last === "?") {
//     console.log(simonResponse[0]);
//   } else if (last === "!") {
//     console.log(simonResponse[1]);
//   } else if (str === "Simon" || str === "simon") {
//     console.log(simonResponse[2]);
//   } else {
//     console.log(simonResponse[3]);
//   }
// };
// simonSays("woah!!");

// Loden's code
const simonSays = function (phrase) {
  if (phrase[phrase.length - 1] === "? ") {
    //phrase.eundswith() also works???
    // the -1 is accounting for 0 being the beggining indedx number so string length is always 1 number higher than the array index nunmber of the last indicies //this is how you access the final element of an array or the last character in a string!
    response = "sure";
  } else if (phrase.trim()) {
    //phrase === "" has a potential bug if the user inputs an empty strring with a bunch of spaces
    response = "Fine. Be that way!";
  } else if (phrase === phrase.toUpperCase()) {
    //i had misread the question, there's no ! for yelling, it's for all caps! whoops
    response = "Whoah, chill out!";
  }
  return response;
};
