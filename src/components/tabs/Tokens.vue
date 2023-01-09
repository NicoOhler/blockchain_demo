<template>
	<div>
		<Distributed :showData="false" :showTransactions="true" :showCoinbase="showCoinbase"/>
	</div>
</template>

<script>
import Distributed from "./Distributed.vue"

export default {
	name: "Tokens",
	props: {
		showCoinbase: Boolean,
	},
	components: {
		Distributed,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
