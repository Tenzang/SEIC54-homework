// # Beach Planner

// Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of day you can go to the beach.

// With the following forecast:
// ```
// monday: the temperature is 20 and there is 12mm of rain
// tuesday: the temperature is 25 and there is 6mm of rain
// wednesday: the temperature is 27 and there is 24mm of rain
// thursday: the temperature is 32 and there is 65mm of rain
// friday: the temperature is 18 and there is 2mm of rain
// saturday: the temperature is 26 and there is 0mm of rain
// sunday: the temperature is 27 and there is 14mm of rain
// ```

// ### Examples:
// ``` JS
// planTrip(25, 30); 
// // => "tuesday, wednesday, saturday and sunday"

// planTrip(18, 65); 
// // => "monday, tuesday, wednesday, thursday, friday, saturday and sunday"

// planTrip(0, 0); 
// // => "saturday"

// planTrip(-1, -1); 
// // => "No days suitable."
// ```

// *Hint: Find a way to store your data (array, object, ...)*

// ### Bonus:
// - Consider a way to make your function accept the forecast for a coming week as a third parameter.
// - The function should refer to this forecast when it evaluates suitable beach days. ⛱️ 


const week = [
    { name: 'monday', temp: '20', rain: 12 },
    { name: 'tuesday', temp: '25', rain: 6 },      
    { name: 'wednesday', temp: '27', rain: 24 },
    { name: 'thursday', temp: '32', rain: 65 },
    { name: 'friday', temp: '18', rain: 2 },      
    { name: 'saturday', temp: '26', rain: 0 },    
    { name: 'sunday', temp: '27', rain: 14 } 
]

const planTrip = function( minTemp, maxRain ){
    const days = [];
    for(i=0; i< week.length; i++) {
        const day = week[i];
        if (day.temp>=minTemp && day.rain <= maxRain) {
            days.push(day.name);
        }
    }
        if (days.length < 1) 
        return "No days suitable.";
        let endPhrase = "";

        if (days.length > 1) {
            endPhrase = " and " + days.pop();
        }
        return days.join(", ") + endPhrase;
}
console.log(planTrip(25, 30));

