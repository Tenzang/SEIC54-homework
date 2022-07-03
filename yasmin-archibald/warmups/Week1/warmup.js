// const raindrop = {
//   number: function (num) {
//     if (Number.isInteger(num / 3)) {
//       ////|| Number.isInteger(num / 5) || Number.isInteger(num / 7)) { ??? simplify first then iterate later, solve one at a time.
//       return "Pling";
//     } else if (Number.isInteger(num / 5)) {
//       return "Plang";
//     } else if (Number.isInteger(num / 7)) {
//       return "Plong";
//     }
//   },
// };

//console.log(raindrop.number);

// const raindrop = function (num) {
//   // if (Number.isInteger(num / 3) && (Number.isInteger(num / 5)) ){
//   if (Number.isInteger(num / 3)) {
//     console.log("Pling");
//     return "Pling";
//   } else if (Number.isInteger(num / 5)) {
//     console.log("Plang");
//     return "Plang";
//   } else if (Number.isInteger(num / 7)) {
//     console.log("Plong");
//     return "Plong";
//   }
// };

// raindrop(9);

//Answer;

//set up bones
// const raindrops = function (num) {
//   return output;
// };

const raindrops = function (num) {
  let output = "";
  if (num % 3 === 0) {
    // the % tells you what the remainder is of one number by another
    output = output + "Pling"; // output += "Pling" would also work here
  }
  if (num % 5 === 0) {
    output = output + "Plang";
  }
  if (num % 7 === 0) {
    output = output + "Plong";
  }
  if (output === "") {
    output = num;
  }

  return output;
};
console.log(raindrops(3));
console.log(raindrops(5));
console.log(raindrops(1));

//notes you don't need if else statements especially when you want them all to run if the conditions for each we want to run e.g. if something is divisible with more than one if elseif else means that you're ONLY going to run one of the conditions (it doesnt check the rest of the else statements).

//also i got really hung up on the use of the term 'method' when clearly i could've just written a function the way i already know how to.

// // if the last thing if (output === ""){
//     output = num
// }
// // used an ELSE statement instead it wouldnt work because it would only apply to the if above it and not the others, unless you repeated the same else for each. This would be convoluted and messy.

// https://gist.github.com/Tenzang/54c0af891f52437d064204418a558695 (Prompt)
