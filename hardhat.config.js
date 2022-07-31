/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

module.exports = {
    solidity: {
        version: "0.8.13",
        settings: {
            optimizer: {
                enabled: true,
                runs: 2000,
            },
        },
    },
    namedAccounts: {
        deployer: {
            default: [0],
        },
    },

    networks: {
        bscTestnet: {
            chainId: 97,
            blockConfirmations: 6,
            url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            accounts: ["0xe894460fde4438162500f600738102f881edc5fb284fc45f1e5d60c33dcb4ae6"],
        },
    },
}
