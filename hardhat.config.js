require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545", // default Ganache RPC
      accounts: [
        "0x862ab19f4e41a1dd51b76c380b0fbe76a1d926fbc5d25d0bf0ba425aeb165ad3"
      ]
    }
  }
};

