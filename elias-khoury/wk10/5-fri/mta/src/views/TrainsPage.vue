<template>
	<div class="home">
		<div class="box">
			<h1>Hello there!</h1>
			<h2>Welcome to MTA</h2>
			<p>
				If you would like to check out the train times, <br />
				please click <router-link to="/bookings">here</router-link>
			</p>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'TrainsPage',
	components: {},
};
</script>

<style lang="scss">
$color-dark: #1d3557;
$color-mid: #457b9d;
$color-light: #f1faee;
$color-red: #e63946;
.home {
	height: 90vh;

	.box {
		margin-top: 10vh;
		padding: 50px;
		background-color: $color-mid;
		width: 50%;
		margin-right: auto;
		margin-left: auto;
		color: $color-light;
		border-radius: 5px;
		box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
	}

	a {
		color: $color-dark;
		text-decoration: none;
	}
}
</style>
