const HelloContract = artifacts.require("Hello");


module.exports = function(deployer) {
  deployer.deploy(HelloContract)
}