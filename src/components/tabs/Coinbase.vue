<template>
	<div>
		<Tokens :showCoinbase="true" />
	</div>
</template>

<script>
import Tokens from "./Tokens.vue";

export default {
	name: "Coinbase",
	components: {
		Tokens,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
	text-align: center;
}
</style>
