<template>
	<div class="container">
		<b-card :bg-variant="isValid" class="mx-3">
			<b-form-group>
				<b-input-group prepend="Block:" class="mx-auto m-2"> <b-form-input v-model="block.blockID" type="number" /> </b-input-group>
				<b-input-group prepend="Nonce:" class="mx-auto m-2"> <b-form-input ype="number" v-model="block.nonce" @keyup="computeHash" /> </b-input-group>
				<CoinbaseTransaction v-if="showCoinbase" class="mx-auto m-2" :currency="currency" :blockID="blockID" :blockchainID="blockchainID" />
				<b-form-textarea v-if="showData" class="mx-auto m-2" v-model="block.text" placeholder="Insert data here" rows="6" max-rows="12" @keyup="computeHash" />
				<div v-if="showTransactions">
					<Transaction v-for="transaction in block.transactions" :key="transaction.transactionID" :currency="currency" :transactionID="transaction.transactionID" :blockID="blockID" :blockchainID="blockchainID" :showCoinbase="showCoinbase" />
				</div>
				<b-input-group v-if="showPrevHash" prepend="Prev:" class="mx-auto m-2">
					<b-form-input class="mx-auto" v-model="block.prevHash" @keyup="computeHash" />
				</b-input-group>
				<b-input-group prepend="Hash:" class="mx-auto m-2">
					<b-form-input readonly class="mx-auto" v-model="block.hash" />
				</b-input-group>
				<div class="centered">
					<b-button @click="mine" variant="primary">Mine</b-button>
				</div>
			</b-form-group>
		</b-card>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Transaction from "../transactions/Transaction.vue";
import CoinbaseTransaction from "../transactions/CoinbaseTransaction.vue";

export default {
	name: "Block",
	props: {
		showPrevHash: Boolean,
		showData: Boolean,
		showTransactions: Boolean,
		showCoinbase: Boolean,
		singleBlock: Boolean,
		blockID: Number,
		blockchainID: Number,
	},
	components: { Transaction, CoinbaseTransaction },
	data() {
		return {
			block: this.$store.getters.getBlockByID(this.blockID, this.blockchainID),
			currency: this.$store.getters.getCurrency,
		};
	},
	methods: {
		...mapActions(["mine", "computeHash"]),
		mine() {
			this.$store.dispatch("mine", { blockID: this.block.blockID, blockchainID: this.blockchainID });
		},
		computeHash() {
			this.$store.dispatch("computeHash", { blockID: this.block.blockID, blockchainID: this.blockchainID, currentlyMining: false });
		},
	},
	computed: {
		...mapGetters({
			getBlockByID: "getBlockByID",
		}),
		isValid: function() {
			return this.block.valid ? "success" : "danger";
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centered {
	margin: 10px 0px -5px 0px;
	display: block;
	text-align: center;
}

.container {
	width: 35vw;
}
</style>
