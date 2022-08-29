<template>
	<div id="app">
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/bookings">Train Lines</router-link>
		</nav>
		<router-view />
	</div>
</template>

<style lang="scss">
$color-dark: #1d3557;
$color-mid: #457b9d;
$color-light: #f1faee;
$color-red: #e63946;

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $color-dark;
}

body {
	margin: 0 auto;
	background-color: $color-light;
}

nav {
	display: inline-block;
	width: 100%;
	background-color: $color-dark;

	a {
		display: inline-block;
		font-weight: 500;
		color: $color-light;
		padding: 12px 16px;
		text-decoration: none;
		background-color: $color-mid;
	}

	a:hover {
		background-color: $color-dark;
	}

	a.router-link-exact-active {
		color: $color-dark;
		background-color: $color-light;
	}
}
</style>
