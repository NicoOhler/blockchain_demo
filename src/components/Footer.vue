<template>
	<div>
		<b-card class="footer" bg-variant="info">
			<a :href="link"> {{ text }} </a>
		</b-card>
	</div>
</template>

<script>
// todo white space below footer
export default {
	name: "Footer",
	props: {
		text: String,
		link: String,
	},
};
</script>

<style scoped>
.footer {
	position: absolute;
	bottom: 0;
	width: 100%;
	text-align: center;
	font-size: large;
	color: azure;
	height: 3.3em; /* Footer height */
}

a:link,
a:visited {
	color: azure;
}
</style>
