console.log("Is this thing on?");

// Exercises: Variables
// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// The Age Calculator
// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
// The Geometrizer
// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function tellFortune(jobTitle, geoLocation, partnerName, numberChildren) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partnerName + ' ' + ' with ' + numberChildren + ' kids.';
    console.log(future);
}

Output= `you will be a${jobTitle} in ${geoLocation} and married to ${partnerName} with ${numberChildren}children`;


console.log(Output);


const currentYear= 2022;
const birthYear= 2002;

const ageBeforeBirthday= currentYear- birthYear;
const ageAfterBirthday= ageBeforeBirthday -1;

console.log(`They are either ${ ageBeforeBirthday } or ${ ageAfterBirthday }`);


const radius= 1;
const circumference= 2 * radius * Math.PI; //diameter * pi

console.log(`Thecircumference is ${circumference}`);
const area= Math.PI * radius * radius;// pi * radius^2
console.log(`The area is ${area}`);


const currentTemperature= 20; // celsius
const fahrenheit = currentTemperature * 1.8 + 32;
console.log(`${currentTemperature}c is ${fahrenheit}f`);




function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

//tellFortune('bball player', 'spain', 'Shaq', 3);
//tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
//tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);

// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(puppyAge) {
    const doggyAge= 'your doggie is' ${puppyAge} * 7 'in dog years!.';
    console.log(future);
}