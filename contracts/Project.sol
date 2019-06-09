pragma solidity ^0.5.0;

contract Project{
    string public name;
    string public dueDate;
    uint public amount;
    address public owner;

    constructor(address _owner, string memory _name, string memory _dueDate, uint _amount) payable public{
        name = _name;
        owner = _owner;
        dueDate = _dueDate;
        amount = _amount;
    }
    // function send(address payable receiver, uint payment)payable public{
    // }
    // function killProject() public{
    // }
}