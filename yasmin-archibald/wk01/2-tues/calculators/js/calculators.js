const squareNumber = function (num) {
  const result = num * num;
  console.log(`The result of squaring ${num} is ${result}`);
  return result;
};

squareNumber(4);

const halfNumber = function (num) {
  const result = num / 2;
  console.log(`Half of ${num} is ${result}`);
  return result;
};

halfNumber(4);

const percentOf = function (num1, num2) {
  const result = (num1 / num2) * 100;
  console.log(`${num1} is ${result}% of ${num2}`);
  return result;
};

percentOf(1, 4);
//attempting to control the order of operations with brackets. Assuming that brackes within brackets will make the deepest bracket the first thing to calculate then the rest.

const areaOfCircle = function (radius) {
  const area = Math.PI * radius * radius;
  const areaRoundedToTwo = area.toFixed(2);
  console.log(
    `The area for a circule with a radius ${radius} is ${areaRoundedToTwo}`
  );
  return areaRoundedToTwo;
};
// result of two from the homework question: 12.566370614359172.
//12.566370614359172
areaOfCircle(2);
/* const area = Math.PI * radius * radius; */

// pt 2
// 1. First halve the num and store the result. 2. Then squareNumber(num) that result and store that.
// 3. Then perform areaOfCircle with the result of 2 as the radius. Then calculate what percentage that area is
// of the squared result.

const megaFunction = function (num) {
  const halvedNum = halfNumber(num);
  const squaredNum = squareNumber(halvedNum);
  const circledNum = areaOfCircle(squaredNum);
  const percentedNum = percentOf(squaredNum, circledNum);
  //console.log(`This is result after it was halved and squared, then made the radius of a circle, that radius was used to calculate the area, then that area was calculated against the squared result. `)
  console.log(`Result = ${percentedNum}`);
};
megaFunction(2);
// ??? not sure // also do i need to go into all other functions
//and make them return a number as well as console.logging it.
//I suspected this but ye.

//DR Evil

const drEvil = function (num) {
  const dollars = " dollars";
  const numDollars = num + dollars;
  if (num === 1_000_000) {
    console.log(`${numDollars} pinkie`);
    return `${numDollars} pinkie`;
  } else {
    console.log(numDollars);
    return numDollars;
  }
};

drEvil(1_000_000);

//Mix-Up

//dyslexia simulator

const mixUp = function (string1, string2) {
  firstString = string1;
  firstTwoString = firstString.substring(0, 2); //takes from position 0 and gives two total letters
  secondString = string2;
  secondTwoString = secondString.substring(0, 2);
  headlessString1 = string1.slice(2); //takes the first two off of a string
  headlessString2 = string2.slice(2);
  console.log(
    secondTwoString + headlessString1 + " " + firstTwoString + headlessString2 // adding them all back together
  );
};

mixUp("yasmin", "archibald");

//Fix-start

const fixStart = function (string) {
  const firstLetter = string.substring(0, 1); //substring starts at indices 0, and is going to give me a total one character from the string
  const firstLetterSlicedString = string.slice(1);
  const restOfString = firstLetterSlicedString.replaceAll(firstLetter, "*");

  console.log(firstLetter + restOfString);
};

fixStart("babble");

// Verbing (Unfinished)

const Verbing = function (string) {
  if (string.length >= 3) {
    const stringLastThree = string.slice(3); // this works on it's own but the next line screws it up
    //this is broken and i don't know why
    if (stringLastThree === "ing") {
      console.log(p.replaceAll("ing", "ly"));
    }
  }
  //const lastThreeLetters = function
};
Verbing("Yasmin");
