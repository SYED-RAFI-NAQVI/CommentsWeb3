require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      allowUnlimitedContractSize: true,

      url: "https://eth-goerli.g.alchemy.com/v2/9k3LHOzyxo-4E1YnwqX9TtRzO97S6kMt",
      accounts: [
        "978d05d5292881ac27ef7ba7007e70e1a43d49c7e595efac522a1c1a76fdda2b",
      ],
    },
  },
};
