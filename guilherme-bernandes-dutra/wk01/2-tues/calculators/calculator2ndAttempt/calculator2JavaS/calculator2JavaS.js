// The Calculator.
//Pt.1

const squareNumber = function (num1) {
    result= num1 * num1;
    return ['the result of squaring the number ' + num1 +  ' is ' + result + '.']

}

const halfNumber = function (dividenum) {
    result = dividenum / 2;
    return [ 'half of ' + dividenum + ' is '+ result ]; 
};

const percentageOf = function (number, percentage) {
    result= ((number / 100) * percentage);
    return [ result + ' is ' + number +'%' + ' of ' + percentage + '.'];
};

const areaOfCircle = function (radius) {
    result= (( radius * radius ) * Math.PI)
    return [ "the area for a cirucs with the radius " + radius + ' is ' + result + '.'];

};


//Part 2.

const complicatedEquation = function (numba) {
    const result1 =  numba / 2; 
    
    const result2 = result1 * result1;
    
    const result3 = ((result2 * result2) * math.PI);

    const finalResult = ((result3 / 100) * result2);

};








// // Time Converter.

// const timeConvert = function(time) {
//     let hours = time.slice(0, 2);

//     hours= Number(hours);

//     if (hours === 12) hours = 0;

//     if (time[8] ==- 'P') {
//         hours += 12;
    
//     }
//     let prefix = '';
//     if ( hours< 10) prefix = '0';

//     return prefix + hours + time.slice(2, 8);
// }

// console.log(timeConvert('12:01:00PM')); // => '12:01:00'
// console.log(timeConvert('12:01:00AM')); // => '00: 01: 00'
// console.log(timeConvert ('07:05:45PM')); //=> '19:05:45'