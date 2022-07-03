// # Time Converter
// Given a time in **12-hour AM/PM** format, convert it to military (**24-hour**) time.

// **Note:**
// - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// **Example:**
// ``` JS
// timeConvert('12:01:00PM') // => '12:01:00'
// timeConvert('12:01:00AM') // => '00:01:00'
// timeConvert('07:05:45PM') // => '19:05:45'
// ```
// ### Bonus:
// - Give yourself a pat on the back.

const timeConvert = function( time ){
    let hours = time.slice(0, 2);

    hours = Number(hours);

    if (hours ===12) hours = 0;

    if (time[8] === 'P') {
        hours +=12;
    }
        let prefix = "";

    if (hours < 10) prefix = '0';
    return prefix + hours + time.slice(2, 8);  
};

timeConvert('12:01:00PM') // => '12:01:00'
timeConvert('12:01:00AM') // => '00:01:00'
timeConvert('07:05:45PM') // => '19:05:45'


// const timeConvert = function(time) {
//     let hours = time.substring(0, 2);

//     hours = Number(hours);

//     if (hours === 12) hours = 0;

//     if (time[8] === 'P') {
//         hours += 12;
//     }

//     let prefix = '';
//     if (hours < 10) prefix = '0';

//     return prefix + hours + time.substring(2, 8);
// }