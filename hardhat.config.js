require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545", // default Ganache RPC
      accounts: [
        "0x933af111242248d33a6e31965b49d9ae875f53794a3b469c7bd44cd1ac3c11eb"
      ]
    }
  }
};

