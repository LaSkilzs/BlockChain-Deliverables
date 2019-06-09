pragma solidity ^0.5.0;

contract Deliverables{
    address payable contractor;
    string public task;
    uint public earliest;
    uint public payment;
    bool public status;

    constructor(string memory _task, uint _earliest, uint _payment, bool _status) payable public {
      task = _task;
      earliest = now + _earliest;
      payment = _payment;
      status = _status;
    }

    // function claimPayment(address payable contractor) payable public{
    //     // confirm project completed
    //     // update complete bool
    //     // send out payment to contractor
    // }
}