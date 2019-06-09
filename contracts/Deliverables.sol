pragma solidity ^0.5.0;

contract Deliverables {
   uint public userDeliverables = 0;

  struct Deliverable {
        uint id;
        string name;
        uint amount;
        bool completed;
    }

  mapping(uint => Deliverable) deliverables;

  function createTask(string memory _name, uint _amount ) public {
    userDeliverables++;
    deliverables[userDeliverables] = Deliverable(userDeliverables, _name, _amount, false);
  }

  function getTask(uint id) public view returns(uint, string memory, bool){
     return (
         id,
         deliverables[id].name,
         deliverables[id].completed
         );
  }


}
