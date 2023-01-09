<template>
	<div>
		<b-navbar toggleable="lg" variant="info" type="dark" fill>
			<b-navbar-brand class="ml-4">
				<b>{{ title }}</b>
			</b-navbar-brand>
		</b-navbar>
	</div>
</template>

<script>
export default {
	name: "Header",
	props: {
		title: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
b {
	margin-left: 10px;
}

li {
	display: inline-block;
	margin: 0 10px;
}

p {
	color: white;
	background: aqua;
}
</style>
