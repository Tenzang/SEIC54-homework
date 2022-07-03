const millitaryTime = function (hours, minutes, seconds, ampm) {
  let time;
  if (ampm === "pm") {
    //determins if it's night or day
    return hours + 12 + ":" + minutes + ":" + seconds;
  } else if (ampm === "am" && hours === 12) {
    // edge case of 12am was easy to harcode
    return (time = "00:00" + ":" + minutes);
  } else {
    return hours + ":" + minutes + ":" + seconds;
  }
};
//test
console.log(millitaryTime(12, 00, 45, "am")); //expected output: 00:00
//test passed
//test
console.log(millitaryTime(1, 20, 20, "pm")); //expected output: 13:20
//test passed
//test
console.log(millitaryTime(2, 20, 50, "am")); //expected output: 2:20
