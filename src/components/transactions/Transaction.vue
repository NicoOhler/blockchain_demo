<template>
	<div>
		<b-form-group >
			<b-input-group >
				<b-input-group-prepend is-text>{{ currency }}</b-input-group-prepend>
				<b-form-input :id="numericID" v-model="transaction.amount" @keyup="computeHash" />
				<b-input-group-prepend is-text>From</b-input-group-prepend>
				<b-form-input type="text" v-model="transaction.from" @keyup="computeHash" />
				<b-input-group-prepend is-text>To</b-input-group-prepend>
				<b-form-input v-model="transaction.to" />
			</b-input-group>
		</b-form-group>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import AutoNumeric from "autonumeric";

export default {
	name: "Transaction",
	props: {
		transactionID: Number,
		blockID: Number,
		blockchainID: Number,
		currency: String,
		showCoinbase: Boolean,
	},
	mounted() {
		new AutoNumeric("#" + this.numericID);
	},
	data() {
		return {
			transaction: this.$store.getters.getTransaction(this.blockID, this.blockchainID, this.transactionID),
			numericID: "numericTransaction" + this.blockchainID + this.blockID + this.transactionID + (this.showCoinbase ? "coinbase" : "token"),
		};
	},
	methods: {
		...mapActions(["computeHash"]),
		computeHash() {
			this.$store.dispatch("computeHash", { blockID: this.blockID, blockchainID: this.blockchainID, currentlyMining: false });
		},
	},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
