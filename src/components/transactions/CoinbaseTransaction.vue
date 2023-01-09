<template>
	<div>
		<b-form-group>
			<b-input-group>
				<b-input-group-prepend class="coinbase-margin-right" is-text>Coinbase: </b-input-group-prepend>
				<b-input-group-prepend is-text>{{ currency }}</b-input-group-prepend>
				<b-form-input :id="numericID" v-model="coinbase.amount" @keyup="computeHash" />
				<b-input-group-prepend is-text>To</b-input-group-prepend>
				<b-form-input v-model="coinbase.to" />
			</b-input-group>
		</b-form-group>
	</div>
</template>

<script>
import { mapActions } from "vuex";
import AutoNumeric from "autonumeric";

export default {
	name: "CoinbaseTransaction",
	props: {
		blockID: Number,
		blockchainID: Number,
		currency: String,
	},
	mounted() {
		new AutoNumeric("#" + this.numericID);
	},
	data() {
		return {
			coinbase: this.$store.getters.getCoinbase(this.blockID, this.blockchainID),
			numericID: "numericCoinbase" + this.blockchainID + this.blockID,
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
.coinbase-margin-right {
	margin: 0px 5% 0px 0px;
}
</style>
