// vault contract abi
exports.VALUT_ABI = [];
// vault contact address
exports.VAULT_ADDRESS = "temp value";

exports.USDC_ADDRESS = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
exports.USDT_ADDRESS = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
exports.DAI_ADDRESS = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";

exports.PRIVATE_KEY =
  "ded63e20bc39904168ab4e4100f8da0a80a75a6e704b2a1953a7516880fbee8b";
// vault contract abi
exports.ORACLE_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "usdcAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "usdcAggregatorAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "priceFeedAddress",
        type: "address",
      },
    ],
    name: "getPriceFromAggregator",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vaultAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "aTokenAddresses",
        type: "address[]",
      },
    ],
    name: "getUSDCPriceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vaultAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "aTokenAddresses",
        type: "address[]",
      },
    ],
    name: "getUSDPriceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "valueHolder",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "aTokenAddresses",
        type: "address[]",
      },
    ],
    name: "getUSDValueOf",
    outputs: [
      {
        internalType: "uint256",
        name: "usdValue",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20Address",
        type: "address",
      },
      {
        internalType: "address",
        name: "aggregatorAddress",
        type: "address",
      },
    ],
    name: "setAggregatorAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usdcAddress",
        type: "address",
      },
    ],
    name: "setUSDCaddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// vault contact address
exports.ORACLE_ADDRESS = "0x33B2d557B000aD6b2cbc69e05E8C2dEcf967Acc7";
