usePlugin("@nomiclabs/buidler-waffle");




const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const KOVAN_PRIVATE_KEY = process.env.KOVAN_PRIVATE_KEY || "";
const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("deploy-RoobeeFarm", "Deploys the RoobeeFarm contract", async () => {
  const RoobeeFarm = await ethers.getContractFactory("RoobeeFarm");
  const roobeeFarm = await RoobeeFarm.deploy();
  await roobeeFarm.deployed();
  console.log("RoobeeFarm deployed to:", roobeeFarm.address);
});

task("init RoobeeFarm", "initializes RoobeeFarm's params")
    .addParam(roobee)

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
module.exports = {
  // This is a sample solc configuration that specifies which version of solc to use
  solc: {
    version: "0.6.8",
  },
};
