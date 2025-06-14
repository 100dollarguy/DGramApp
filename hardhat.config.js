require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545", // default Ganache RPC
      accounts: [
        "0x8c237f82b867e049b892ce0cee503609c7ee3a3514b7fe57a8b5dd1f0d5f5c81"
      ]
    }
  }
};

