// PART 1 - Practice Problems
//
const squareNumber = function(number) {
    const numberSquared = number * number;
    console.log(`The result of squaring the number ${ number } is ${ numberSquared }.`)
    return numberSquared;
}
squareNumber(3);

//Good Job!

const halfNumber = function(number) {
    const half = number / 2
    console.log(`Half of ${ number } is ${ half }`);
    return half;
}
halfNumber(3);

//Great Job!

const percentOf = function(num1, num2) {
    const percentage = num1 / num2 * 100;
    console.log(`${ num1 } is ${ percentage }% of ${ num2 }.`)
    return percentage;
}
percentOf(4,8);

//You're good!

const areaOfCircle = function(radius) {
    const area = radius * radius * Math.PI;
    areaRounded = Math.ceil(area);
    console.log(`The area for a circle with radius ${ radius } is ${ areaRounded }.`);
    return areaRounded;
}
areaOfCircle(2);

//You're getting the hang of this!

const anyCalc = function(number) {
    const numberHalved = number / 2;
    const numberSquared2 = numberHalved * numberHalved;
    const areaOfCircle2 = Math.PI * numberSquared2 * numberSquared2;
    const whatPercentage = areaOfCircle2 / numberSquared2 * 100;
    console.log(whatPercentage + '%');
}
anyCalc(1);

//Good Job
