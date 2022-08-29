const trainLines = {
	lLine: [`1st`, `3rd`, `Union Square`, `6th`, `8th`],
	nLine: [`timeSquare`, `34th`, `28th`, `23rd`, `Union Square`, `8th`],
	sixthLine: [`grandCentral`, `33rd`, `28th`, `23rd`, `Union Square`, `astorPlace`],
};

// ---------------------------- stop array calculator and bringerer ------------------------------------

let stopsCount = 0;
const stopStation = function (lines, beginStop, endStop) {
	let linesArray = trainLines[lines];
	let stops = ``;
	let startStopIndex = linesArray.indexOf(beginStop);
	let endStopIndex = linesArray.indexOf(endStop);

	if (startStopIndex < endStopIndex) {
		//for the train stop to move forward // so if the start stop is less on the array than the end stop
		for (let i = startStopIndex + 1; i <= endStopIndex; i++) {
			// +1 to the starStopIndex so it doesnt include the inital stop
			stops = stops + linesArray[i] + `, `;
			stopsCount++; // from 0 (the value of stopsCount) the array keeps adding
		}
	} else {
		//if the startstop is towards the end of the array and the endstop is towards the front
		for (let i = startStopIndex - 1; i >= endStopIndex; i--) {
			// for the train stop to move backward
			stops = stops + linesArray[i] + `, `;
			stopsCount++;
		}
	}
	return stops;
};

/* --------TEST 1------- */ console.log(stopStation(`lLine`, `1st`, `8th`)); /* ----------------------- */

const planTrip = function (beginLine, beginStop, endLine, endStop) {
	stopsCount = 0;
	if (beginLine === endLine) {
		let travel1 = stopStation(beginLine, beginStop, endStop);
		console.log(`You must travel through the following stops on the ${beginLine}: ${travel1}.`);
	} else {
		let travel2 = stopStation(beginLine, beginStop, `Union Square`);
		console.log(`You must travel through the following stops on the ${beginLine}: ${travel2}.`);
		console.log(`Change at Union Square.`);

		let travel3 = stopStation(endLine, `Union Square`, endStop);
		console.log(`Your journey continues through the following stops: ${travel3}.`);
	}
	console.log(`${stopsCount} stops in total.`);
};

/* -----FINAL FUNCTION--------- */ planTrip(`lLine`, `1st`, `nLine`, `23rd`); /* ----------------------- */

console.log(`-----------------------------`);
console.log(`-----------------------------`);
console.log(`who needs sleep anyways??`);
