var Project = artifacts.require("./Project.sol");
var Deliverables = artifacts.require("./Deliverables.sol");

module.exports = function(deployer) {
  var name = "Sample Project";
  var dueDate = 7119;
  var amount = 10000;
  deployer.deploy(Project, name, dueDate, amount);
  deployer.deploy(Deliverables);
};
