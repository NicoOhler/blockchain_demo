<!-- https://www.youtube.com/watch?v=_160oMzblY8&list=WL&index=1 -->
<template>
	<div id="app">
		<Header title="Blockhain Demo" />
		<div class="content">
			<b-tabs content-class="mt-3" title="asdasd" align="right">
				<b-tab title="Hash">
					<Hash />
				</b-tab>
				<b-tab title="Block">
					<Block :blockchainID="1" :blockID="1" :showPrevHash="false" :showData="true" :showTransactions="false" :showCoinbase="false" />
				</b-tab>
				<b-tab title="Blockchain">
					<Blockchain :blockchainID="1" :showData="true" :showTransactions="false" :showCoinbase="false" />
				</b-tab>
				<b-tab title="Distributed">
					<Distributed :showData="true" :showTransactions="false" :showCoinbase="false" />
				</b-tab>
				<b-tab title="Tokens">
					<Tokens :showCoinbase="false" />
				</b-tab>
				<b-tab title="Coinbase" active>
					<Coinbase />
				</b-tab>
			</b-tabs>
		</div>
		<Footer link="https://karl-systems.com/" text="© Nico Ohler 2021"/>
	</div>
</template>

<script>
import Hash from "./components/tabs/Hash.vue";
import Block from "./components/tabs/Block.vue";
import Blockchain from "./components/tabs/Blockchain.vue";
import Distributed from "./components/tabs/Distributed.vue";
import Tokens from "./components/tabs/Tokens.vue";
import Coinbase from "./components/tabs/Coinbase.vue";

import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import { mapActions } from "vuex";

export default {
	name: "App",
	components: {
		Hash,
		Block,
		Blockchain,
		Distributed,
		Tokens,
		Coinbase,
		Footer,
		Header,
	},
	methods: {
		...mapActions(["setMiningDifficulty", "initializeState"]),
	},
	created() {
		this.$store.dispatch("initializeState");
		//this.$store.dispatch("setMiningDifficulty", 4);
	},
};
</script>

<style>
#app {
	position: relative;
	min-height: 100vh;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	place-items: center;
}

.content {
	padding-bottom: 4em; /* Footer height */
}
</style>
