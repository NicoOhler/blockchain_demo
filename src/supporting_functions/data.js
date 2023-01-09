// todo proper inital values
let data = {
	prefix: "0000",
	currency: "$",
	majorityHash: "00003391562fd6665f6c9bac18bd02d1f382369b13533d49e9005c836160a27a",
	blockchains: [
		{
			blockchainID: 1,
			lastHash: "00003391562fd6665f6c9bac18bd02d1f382369b13533d49e9005c836160a27a",
			valid: true,
			blocks: [
				{
					blockID: 1,
					nonce: 55678,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "000004a06050bfb742cb2eecdd9707a8b40c0472d31325c705067076d4e043f1",
					prevHash: "0000000000000000000000000000000000000000000000000000000000000000",
					valid: true,
				},
				{
					blockID: 2,
					nonce: 36384,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "0000f48aa210df502b87fc9ccb3410af9f8cb73c2c4106e3ac2b287af370c370",
					prevHash: "000004a06050bfb742cb2eecdd9707a8b40c0472d31325c705067076d4e043f1",
					valid: true,
				},
				{
					blockID: 3,
					nonce: 346038,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "0000d6ab5c415831e818a3bb710cea6acf152d7fcbded013ea00a2552bf93112",
					prevHash: "0000f48aa210df502b87fc9ccb3410af9f8cb73c2c4106e3ac2b287af370c370",
					valid: true,
				},
				{
					blockID: 4,
					nonce: 85993,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "00001164ab45f5b891462f8052a04088c2c170cab48216048c14e6f80ba727e8",
					prevHash: "0000d6ab5c415831e818a3bb710cea6acf152d7fcbded013ea00a2552bf93112",
					valid: true,
				},
				{
					blockID: 5,
					nonce: 7366,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "00003391562fd6665f6c9bac18bd02d1f382369b13533d49e9005c836160a27a",
					prevHash: "00001164ab45f5b891462f8052a04088c2c170cab48216048c14e6f80ba727e8",
					valid: true,
				},
			],
		},
		{
			blockchainID: 2,
			lastHash: "6d551089e2e4545662705fa3f9f3abccf6d32f92d46636d5f0ff7565562202b0",
			valid: true,
			blocks: [
				{
					blockID: 1,
					nonce: 55678,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					hash: "000004a06050bfb742cb2eecdd9707a8b40c0472d31325c705067076d4e043f1",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Fraud", to: "Fraud" },
						{ transactionID: 2, amount: 10.0, from: "Fraud", to: "Fraud" },
						{ transactionID: 3, amount: 66.66, from: "Fraud", to: "Fraud" },
					],
					prevHash: "0000000000000000000000000000000000000000000000000000000000000000",
					valid: true,
				},
				{
					blockID: 2,
					nonce: 36384,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "FraudFraudFraudFraudFraudFraudFraudFraudFraudFraudFraudFraudFraudFraudFraudFraud" + "FraudFraudFraudFraudFraudFraudFraudFraudFraudFraudFraudFraudFraudFraudFraudFraud",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "ed3d7458553130cf4ee1f2c8a0a7ada1f24c1cca75e68d87bd77e48f072405af",
					prevHash: "8ba5b6d44112e9c87b9f6e49670ea9227bb67a3a3cdd550ec8b4be0f8a98c905",
					valid: false,
				},
				{
					blockID: 3,
					nonce: 512,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "8ba5b6d44112e9c87b9f6e49670ea9227bb67a3a3cdd550ec8b4be0f8a98c905",
					prevHash: "ed3d7458553130cf4ee1f2c8a0a7ada1f24c1cca75e68d87bd77e48f072405af",
					valid: false,
				},
				{
					blockID: 4,
					nonce: 80449,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "a88a05b5fc6a4dec3b52624a729c7a34f2038ce30c05b863b4f654868beed004",
					prevHash: "8ba5b6d44112e9c87b9f6e49670ea9227bb67a3a3cdd550ec8b4be0f8a98c905",
					valid: false,
				},
				{
					blockID: 5,
					nonce: 512,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "6d551089e2e4545662705fa3f9f3abccf6d32f92d46636d5f0ff7565562202b0",
					prevHash: "a88a05b5fc6a4dec3b52624a729c7a34f2038ce30c05b863b4f654868beed004",
					valid: false,
				},
			],
		},
		{
			blockchainID: 3,
			lastHash: "00003391562fd6665f6c9bac18bd02d1f382369b13533d49e9005c836160a27a",
			valid: true,
			blocks: [
				{
					blockID: 1,
					nonce: 55678,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "000004a06050bfb742cb2eecdd9707a8b40c0472d31325c705067076d4e043f1",
					prevHash: "0000000000000000000000000000000000000000000000000000000000000000",
					valid: true,
				},
				{
					blockID: 2,
					nonce: 36384,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "0000f48aa210df502b87fc9ccb3410af9f8cb73c2c4106e3ac2b287af370c370",
					prevHash: "000004a06050bfb742cb2eecdd9707a8b40c0472d31325c705067076d4e043f1",
					valid: true,
				},
				{
					blockID: 3,
					nonce: 346038,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "0000d6ab5c415831e818a3bb710cea6acf152d7fcbded013ea00a2552bf93112",
					prevHash: "0000f48aa210df502b87fc9ccb3410af9f8cb73c2c4106e3ac2b287af370c370",
					valid: true,
				},
				{
					blockID: 4,
					nonce: 85993,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "00001164ab45f5b891462f8052a04088c2c170cab48216048c14e6f80ba727e8",
					prevHash: "0000d6ab5c415831e818a3bb710cea6acf152d7fcbded013ea00a2552bf93112",
					valid: true,
				},
				{
					blockID: 5,
					nonce: 7366,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "00003391562fd6665f6c9bac18bd02d1f382369b13533d49e9005c836160a27a",
					prevHash: "00001164ab45f5b891462f8052a04088c2c170cab48216048c14e6f80ba727e8",
					valid: true,
				},
			],
		},
		{
			blockchainID: 4,
			lastHash: "00003391562fd6665f6c9bac18bd02d1f382369b13533d49e9005c836160a27a",
			valid: true,
			blocks: [
				{
					blockID: 1,
					nonce: 55678,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "000004a06050bfb742cb2eecdd9707a8b40c0472d31325c705067076d4e043f1",
					prevHash: "0000000000000000000000000000000000000000000000000000000000000000",
					valid: true,
				},
				{
					blockID: 2,
					nonce: 36384,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "0000f48aa210df502b87fc9ccb3410af9f8cb73c2c4106e3ac2b287af370c370",
					prevHash: "000004a06050bfb742cb2eecdd9707a8b40c0472d31325c705067076d4e043f1",
					valid: true,
				},
				{
					blockID: 3,
					nonce: 346038,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "0000d6ab5c415831e818a3bb710cea6acf152d7fcbded013ea00a2552bf93112",
					prevHash: "0000f48aa210df502b87fc9ccb3410af9f8cb73c2c4106e3ac2b287af370c370",
					valid: true,
				},
				{
					blockID: 4,
					nonce: 85993,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "00001164ab45f5b891462f8052a04088c2c170cab48216048c14e6f80ba727e8",
					prevHash: "0000d6ab5c415831e818a3bb710cea6acf152d7fcbded013ea00a2552bf93112",
					valid: true,
				},
				{
					blockID: 5,
					nonce: 7366,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "00003391562fd6665f6c9bac18bd02d1f382369b13533d49e9005c836160a27a",
					prevHash: "00001164ab45f5b891462f8052a04088c2c170cab48216048c14e6f80ba727e8",
					valid: true,
				},
			],
		},
		{
			blockchainID: 5,
			lastHash: "00003391562fd6665f6c9bac18bd02d1f382369b13533d49e9005c836160a27a",
			valid: true,
			blocks: [
				{
					blockID: 1,
					nonce: 55678,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "000004a06050bfb742cb2eecdd9707a8b40c0472d31325c705067076d4e043f1",
					prevHash: "0000000000000000000000000000000000000000000000000000000000000000",
					valid: true,
				},
				{
					blockID: 2,
					nonce: 36384,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "0000f48aa210df502b87fc9ccb3410af9f8cb73c2c4106e3ac2b287af370c370",
					prevHash: "000004a06050bfb742cb2eecdd9707a8b40c0472d31325c705067076d4e043f1",
					valid: true,
				},
				{
					blockID: 3,
					nonce: 346038,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "0000d6ab5c415831e818a3bb710cea6acf152d7fcbded013ea00a2552bf93112",
					prevHash: "0000f48aa210df502b87fc9ccb3410af9f8cb73c2c4106e3ac2b287af370c370",
					valid: true,
				},
				{
					blockID: 4,
					nonce: 85993,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "00001164ab45f5b891462f8052a04088c2c170cab48216048c14e6f80ba727e8",
					prevHash: "0000d6ab5c415831e818a3bb710cea6acf152d7fcbded013ea00a2552bf93112",
					valid: true,
				},
				{
					blockID: 5,
					nonce: 7366,
					coinbase: {
						amount: 100.0,
						to: "Pikachu",
					},
					text: "asdasd",
					transactions: [
						{ transactionID: 1, amount: 25.0, from: "Pringles", to: "Emma" },
						{ transactionID: 2, amount: 10.0, from: "Emma", to: "Pikachu" },
						{ transactionID: 3, amount: 66.66, from: "Pikachu", to: "Pringles" },
					],
					hash: "00003391562fd6665f6c9bac18bd02d1f382369b13533d49e9005c836160a27a",
					prevHash: "00001164ab45f5b891462f8052a04088c2c170cab48216048c14e6f80ba727e8",
					valid: true,
				},
			],
		},
	],
};

module.exports = {
	getData() {
		return data;
	},
};
