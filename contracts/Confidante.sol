// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Confidante {
  bytes32 private password;

  constructor(bytes32 _password) payable {
    password = _password;
  }

  function withdraw(bytes32 _password) public {
    require(password == _password, "Incorrect password");
    payable(msg.sender).transfer(address(this).balance);
  }

  receive() external payable {
    // Fallback function to accept incoming payments
  }
}
