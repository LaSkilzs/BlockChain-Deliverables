pragma solidity ^0.5.0;

contract Project {
  string public name;
  uint public dueDate;
  uint public amount;

  constructor(string memory _name, uint _dueDate, uint _amount) public{
    name = _name;
    dueDate = _dueDate;
    amount = _amount;
    }
}