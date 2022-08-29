<template>
	<div class="train">
		<div class="outerBox">
			<div class="box">
				<h3>Begin Line</h3>
				<select v-model="beginLine">
					<option value="lLine">L-Line</option>
					<option value="nLine">N-Line</option>
					<option value="sixthLine">Sixth-Line</option>
				</select>
			</div>
			<div class="box" v-if="beginLine === 'lLine'">
				<h3>Starting Stop</h3>
				<h4>L-Line</h4>
				<select v-model="beginStop">
					<option value="1st">1st</option>
					<option value="3rd">3rd</option>
					<option value="Union Square">Union Square</option>
					<option value="6th">6th</option>
					<option value="8th">8th</option>
				</select>
			</div>
			<div class="box" v-if="beginLine === 'nLine'">
				<h3>Starting Stop</h3>
				<h4>N-Line</h4>
				<select v-model="beginStop">
					<option value="timeSquare">timeSquare</option>
					<option value="34th">34th</option>
					<option value="28th">28th</option>
					<option value="23rd">23rd</option>
					<option value="Union Square">Union Square</option>
					<option value="8th">8th</option>
				</select>
			</div>
			<div class="box" v-if="beginLine === 'sixthLine'">
				<h3>Starting Stop</h3>
				<h4>Sixth-Line</h4>
				<select v-model="beginStop">
					<option value="grandCentral">Grand Central</option>
					<option value="33rd">33rd</option>
					<option value="28th">28th</option>
					<option value="23rd">23rd</option>
					<option value="Union Square">Union Square</option>
					<option value="astorPlace">Astor Place</option>
				</select>
			</div>
		</div>
		<div class="outerBox">
			<div class="box">
				<h3>End Line</h3>
				<select v-model="endLine">
					<option value="lLine">L-Line</option>
					<option value="nLine">N-Line</option>
					<option value="sixthLine">Sixth-Line</option>
				</select>
			</div>
			<div class="box" v-if="endLine === 'lLine'">
				<h3>End Stop</h3>
				<h4>L-Line</h4>
				<select v-model="endStop">
					<option value="1st">1st</option>
					<option value="3rd">3rd</option>
					<option value="Union Square">Union Square</option>
					<option value="6th">6th</option>
					<option value="8th">8th</option>
				</select>
			</div>
			<div class="box" v-if="endLine === 'nLine'">
				<h3>End Stop</h3>
				<h4>N-Line</h4>
				<select v-model="endStop">
					<option value="timeSquare">timeSquare</option>
					<option value="34th">34th</option>
					<option value="28th">28th</option>
					<option value="23rd">23rd</option>
					<option value="Union Square">Union Square</option>
					<option value="8th">8th</option>
				</select>
			</div>
			<div class="box" v-if="endLine === 'sixthLine'">
				<h3>End Stop</h3>
				<h4>Sixth-Line</h4>
				<select v-model="endStop">
					<option value="grandCentral">Grand Central</option>
					<option value="33rd">33rd</option>
					<option value="28th">28th</option>
					<option value="23rd">23rd</option>
					<option value="Union Square">Union Square</option>
					<option value="astorPlace">Astor Place</option>
				</select>
			</div>
		</div>
		<div class="answer">
			<h2 v-ifx="beginLine === endLine">{{ result1 }}</h2>
			<h2 v-ifx="beginLine !== endLine">{{ result2 }}</h2>

			<h2>{{ stopsCount }} stops</h2>
		</div>
		<button @click="planTrip">Find times</button>
	</div>
</template>
<script>
export default {
	name: 'BookTrain',

	data: function () {
		return {
			beginLine: 'lLine',
			beginStop: '1st',
			endLine: 'lLine',
			endStop: '8th',
			stopsCount: 0,
			result1: '',
			result2: '',
			trainLine: {
				lLine: [`1st`, `3rd`, `Union Square`, `6th`, `8th`],
				nLine: [`timeSquare`, `34th`, `28th`, `23rd`, `Union Square`, `8th`],
				sixthLine: [`grandCentral`, `33rd`, `28th`, `23rd`, `Union Square`, `astorPlace`],
			},
		};
	},
	methods: {
		stopStation: function (lines, beginStop, endStop) {
			let linesArray = this.trainLine[lines];
			let stops = ``;
			let startStopIndex = linesArray.indexOf(beginStop);
			let endStopIndex = linesArray.indexOf(endStop);

			if (startStopIndex < endStopIndex) {
				for (let i = startStopIndex + 1; i <= endStopIndex; i++) {
					stops = stops + linesArray[i] + `, `;
					this.stopsCount++; // from 0 (the value of this.stopsCount) the array keeps adding
				}
			} else {
				for (let i = startStopIndex - 1; i >= endStopIndex; i--) {
					stops = stops + linesArray[i] + `, `;
					this.stopsCount++;
				}
			}

			return stops;
		},
		planTrip: function (beginLine, beginStop, endLine, endStop) {
			beginLine = this.beginLine;
			beginStop = this.beginStop;
			endLine = this.endLine;
			endStop = this.endStop;
			this.stopsCount = 0;
			if (beginLine === endLine) {
				let travel1 = this.stopStation(beginLine, beginStop, endStop);
				this.result1 = `
						You must travel through the following stops on ${beginLine}: ${travel1}.`;
				console.log(`You must travel through the following stops on the ${beginLine}: ${travel1}.`);
			} else {
				let travel2 = this.stopStation(beginLine, beginStop, `Union Square`);
				let travel3 = this.stopStation(endLine, `Union Square`, endStop);
				this.result2 = `You must travel through the following stops on the ${beginLine}: ${travel2}.
                Change at Union Square.
                Your journey continues through the following stops: ${travel3}.`;
			}
		},
	},
};
</script>
<style lang="scss">
$color-dark: #1d3557;
$color-mid: #457b9d;
$color-light: #f1faee;
$color-red: #e63946;
.train {
	height: 90vh;
	max-width: 960px;
	margin: 0 auto;
	.outerBox {
		background-size: contain;
		margin: 20px;
		border-radius: 5px;
		box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
	}
	.box {
		margin-top: 20px;
		padding: 25px;
		background-color: $color-mid;
		width: 25%;
		display: inline-block;
		margin: 20px;
		color: $color-light;
		border-radius: 5px;
		box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
		height: 150px;
		vertical-align: top;

		select {
			padding: 5px;
			display: inline-block;
			box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
		}
	}

	label {
		display: inline-block;
	}

	a {
		color: $color-dark;
		text-decoration: none;
	}

	button {
		padding: 8px 16px;
		background-color: $color-mid;
		color: $color-light;
		border-radius: 5px;
		font-weight: 500;
		letter-spacing: 0.8px;
		border: none;
		box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
	}
}
</style>
