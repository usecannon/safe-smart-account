var GnosisSafeFactory = artifacts.require("./GnosisSafeFactory.sol");
var GnosisSafeWithDescriptionsFactory = artifacts.require("./GnosisSafeWithDescriptionsFactory.sol");
var DailyLimitExceptionFactory = artifacts.require("./exceptions/DailyLimitExceptionFactory.sol");
var WhitelistExceptionFactory = artifacts.require("./exceptions/WhitelistExceptionFactory.sol");
var LastResortExceptionFactory = artifacts.require("./exceptions/LastResortExceptionFactory.sol");

module.exports = function(deployer) {
    deployer.deploy(GnosisSafeFactory);
    deployer.deploy(GnosisSafeWithDescriptionsFactory);
    deployer.deploy(DailyLimitExceptionFactory);
    deployer.deploy(WhitelistExceptionFactory);
    deployer.deploy(LastResortExceptionFactory);
};