<template>
	<div class="distributed">
		<h3>Majority Hash: {{ getMajorityHash }}</h3>
		<Blockchain v-for="blockchain in getAllBlockchains" :key="blockchain.blockchainID" :blockchainID="blockchain.blockchainID" :showData="showData" :showTransactions="showTransactions" :showCoinbase="showCoinbase" />
	</div>
</template>

<script>
import Blockchain from "./Blockchain.vue";
import { mapGetters } from "vuex";

export default {
	name: "Distributed",
	props: { showTransactions: Boolean, showCoinbase: Boolean, showData: Boolean },
	components: {
		Blockchain,
	},
	computed: {
		...mapGetters({
			getAllBlockchains: "getAllBlockchains",
			getMajorityHash: "getMajorityHash",
		}),
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	text-align: center;
}

.distributed {
	margin: 0px 0px 10px 0px;
}
</style>
