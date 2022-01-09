const Funner = artifacts.require("Funner.sol");

module.exports = function(deployer) {
    deployer.deploy(Funner, 1000000); 
};