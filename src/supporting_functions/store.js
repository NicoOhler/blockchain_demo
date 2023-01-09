import Vue from "vue";
import Vuex from "vuex";
//import sha256Hash from "./supporting_functions/sha256";
import { sha256, sha224 } from "js-sha256";
import data from "./data";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: { data: {} },
	getters: {
		getBlockByID: (state) => (blockID, blockchainID) => {
			return state.data.blockchains[blockchainID - 1].blocks[blockID - 1];
		},
		getBlockchain: (state) => (blockchainID) => {
			return state.data.blockchains[blockchainID - 1];
		},
		getAllBlockchains(state) {
			return state.data.blockchains;
		},
		getTransaction: (state) => (blockID, blockchainID, transactionID) => {
			return state.data.blockchains[blockchainID - 1].blocks[blockID - 1].transactions[transactionID - 1];
		},
		getCoinbase: (state) => (blockID, blockchainID) => {
			return state.data.blockchains[blockchainID - 1].blocks[blockID - 1].coinbase;
		},
		getMajorityHash(state) {
			return state.data.majorityHash;
		},
		getCurrency(state) {
			return state.data.currency;
		},
	},
	mutations: {
		setPrefix(state, prefix) {
			state.data.prefix = prefix;
		},
		incrementNonce(state, { blockID, blockchainID }) {
			state.data.blockchains[blockchainID - 1].blocks[blockID - 1].nonce++;
		},
		resetNonce(state, { blockID, blockchainID }) {
			state.data.blockchains[blockchainID - 1].blocks[blockID - 1].nonce = 0;
		},
		updateHash(state, { blockID, blockchainID, hash }) {
			state.data.blockchains[blockchainID - 1].blocks[blockID - 1].hash = hash;
		},
		updatePrevHash(state, { blockID, blockchainID, hash }) {
			state.data.blockchains[blockchainID - 1].blocks[blockID - 1].prevHash = hash;
		},
		updateBlockValid(state, { blockID, blockchainID }) {
			state.data.blockchains[blockchainID - 1].blocks[blockID - 1].valid = state.data.blockchains[blockchainID - 1].blocks[blockID - 1].hash.startsWith(state.data.prefix);
		},
		updateLastHash(state, { blockchainID, hash }) {
			state.data.blockchains[blockchainID - 1].lastHash = hash;
		},
		updateMajorityHash(state, hash) {
			state.data.majorityHash = hash;
		},
		updateBlockchainValid(state, blockchainID) {
			let isValid = true;

			if (state.data.blockchains[blockchainID - 1].lastHash == state.data.majorityHash) {
				for (let block of state.data.blockchains[blockchainID - 1].blocks) {
					if (!block.valid) {
						isValid = false;
					}
				}
			} else isValid = false;

			state.data.blockchains[blockchainID - 1].valid = isValid;
		},
	},
	actions: {
		initializeState(context) {
			//context.commit("initialize", data.getData());
			context.state.data = data.getData();
		},
		setMiningDifficulty(context, numberOfLeadingZeros) {
			let prefix = "";
			for (let index = 0; index < numberOfLeadingZeros; index++) {
				prefix += "0";
			}
			context.commit("setPrefix", prefix);
		},
		mine(context, { blockID, blockchainID }) {
			context.state.data.blockchains[blockchainID - 1].blocks[blockID - 1].valid = false;
			context.commit("resetNonce", { blockID: blockID, blockchainID: blockchainID });

			while (!context.state.data.blockchains[blockchainID - 1].blocks[blockID - 1].valid) {
				context.commit("incrementNonce", { blockID: blockID, blockchainID: blockchainID });
				context.dispatch("computeHash", { blockID: blockID, blockchainID, currentlyMining: true });
				context.commit("updateBlockValid", { blockID: blockID, blockchainID: blockchainID });
			}

			/*console.log("Done mining #" + id + " - new hash " + context.state.data.blockchains[id - 1].hash);*/
			context.dispatch("updateFollowingBlocks", { blockID: blockID, blockchainID: blockchainID });
		},
		// todo nonce change hash bug
		computeHash(context, { blockID, blockchainID, currentlyMining }) {
			let block = context.state.data.blockchains[blockchainID - 1].blocks[blockID - 1];

			/* longer data to hash ==> less performant
			let str = block.blockID + "-" + block.nonce + "-" + block.text + "-" + block.prevHash + "-";
			for (let t of block.transactions) {
				str += t.transactionID + "-" + t.amount + "-" + t.from + "-" + t.to + "-";
			}*/
			let str = block.blockID + block.nonce + block.text + block.prevHash;
			for (let t of block.transactions) {
				str += t.transactionID + t.amount + t.from + t.to;
			}

			//let hash = sha256Hash.hash(str); 	// local sha256 implementation
			let hash = sha256(str); // npm install js-sha256

			//console.log("Calculated new hash: " + hash + " for #" + id)
			context.commit("updateHash", { blockID, blockchainID, hash });

			if (!currentlyMining) context.dispatch("updateFollowingBlocks", { blockID: blockID, blockchainID: blockchainID });
		},
		updateFollowingBlocks(context, { blockID, blockchainID }) {
			context.commit("updateBlockValid", { blockID: blockID, blockchainID: blockchainID });
			if (blockID < context.state.data.blockchains[blockchainID - 1].blocks.length) {
				context.commit("updatePrevHash", { blockID: blockID + 1, blockchainID: blockchainID, hash: context.state.data.blockchains[blockchainID - 1].blocks[blockID - 1].hash });
				context.dispatch("computeHash", { blockID: blockID + 1, blockchainID: blockchainID, currentlyMining: false });
			} else {
				context.commit("updateLastHash", { blockchainID: blockchainID, hash: context.state.data.blockchains[blockchainID - 1].blocks[blockID - 1].hash });
				context.dispatch("computeMajorityHash");
				context.commit("updateBlockchainValid", blockchainID);
			}
		},
		computeMajorityHash(context) {
			let lastHashes = [];
			let currentHash = "";
			let currentCount = 0;
			let maxCount = 0;
			let maxHash = "";

			context.state.data.blockchains.forEach((blockchain) => {
				lastHashes.push(blockchain.lastHash);
			});

			for (let i = 0; i < lastHashes.length; i++) {
				currentHash = lastHashes[i];
				currentCount = 0;

				for (let j = 0; j < lastHashes.length; j++) if (lastHashes[j] === currentHash) currentCount++;
				if (currentCount > maxCount) {
					maxCount = currentCount;
					maxHash = currentHash;
				}
			}
			//console.log("New lastHash is: " + maxHash);
			context.commit("updateMajorityHash", maxHash);
		},
	},
});
