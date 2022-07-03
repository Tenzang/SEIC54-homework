// # Prize Picker

// Write a function in JS that, will *(pseudo)* randomly select a prize from a prize pool!

// Your function should:
// - Look at the following array of prizes.
// - Select one at random.
// - **Return** the prize selected.

// ```JS
// const prizes = [ "🚗 new car", "🌴 holiday", "🥁 drum machine" ];
// ```
// *Hint: investigate* `Math` *methods...*

// ### Example:
// ```JS
// randomPrize(); // => "You win a 🚗 new car!"
// ```

// ### Bonus:
// - Have your function accept a prize pool as an argument.
// - The function should use the provided prize pool to generate a prize.
// ### Double Bonus:
// - Have your function remove the prize selected from provided prize pool.
// - If no prizes are available, return: `"❌ No prizes left"`

const prizePool = [ "🚗 new car", "🌴 holiday", "🥁 drum machine"]

const randomPrize = function (prizes) {
    if (prizes.length === 0 ) return "❌ No prizes left";

    const prizeIndex = Math.floor(Math.random() * prizes.length);

    const prizeDrawn = prizes.splice(prizeIndex, 1);

    return prizeDrawn[0];
};

console.log(randomPrize());