require("@nomiclabs/hardhat-waffle")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/TSUOAM33lBkDYnZP4L7nUBQz7suSuoFw",
      accounts: [ 'e2bcbc5fbe85e7365cdb356f25c323d2fe38229b890a7311c60fa74a60f92e73' ]
    }
  }
};
