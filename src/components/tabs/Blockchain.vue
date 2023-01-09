<template>
	<div>
		<b-card :style="isBlockchainValid" class="mx-3 mb-2">
			<h4>Blockchain: {{ blockchain.blockchainID }}</h4>
			<h5>Last Hash: {{ blockchain.lastHash }}</h5>
			<div class="horizontalScroll" id="scrollbar">
				<Block class="blockMargin" v-for="block in blockchain.blocks" :key="block.blockID" :blockID="block.blockID" :blockchainID="blockchainID" :showPrevHash="true" :showData="showData" :showTransactions="showTransactions" :showCoinbase="showCoinbase" />
			</div>
		</b-card>
	</div>
</template>

<script>
import Block from "./Block.vue"

export default {
	name: "Blockchain",
	props: {
		blockchainID: Number,
		showTransactions: Boolean,
		showCoinbase: Boolean,
		showData: Boolean,
	},
	components: {
		Block,
	},
	data() {
		return {
			blockchain: this.$store.getters.getBlockchain(this.blockchainID),
		};
	},
	computed: {
		isBlockchainValid: function() {
			return "background-color: #" + (this.blockchain.valid ? "DFF0D8" : "fadcdc");
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
	/*text-align: left;*/
	margin: 2% 0px 0px 5%;
}

.blockMargin{
	margin: 0px -20px 0px -30px;
}

.horizontalScroll {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	padding: 0px 0px 15px 0px;
	margin: 20px 0px 0px 0px;
	overflow-x: auto;
}

#scrollbar::-webkit-scrollbar-track {
	/*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);*/
	border-radius: 10px;
	margin-left: 10px;
	margin-right: 10px;
}

#scrollbar::-webkit-scrollbar {
	width: 12px;
}

#scrollbar::-webkit-scrollbar-thumb {
	border-radius: 10px;
	/*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);*/
	background-color: #555;
}
</style>
