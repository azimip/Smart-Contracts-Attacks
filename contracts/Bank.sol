// NOTE: This code is commented so that you don't face compile errors for other contracts, as the version of solidity
// for this code is 0.6.0. Read the last note in the README file to run this one.
//
//// SPDX-License-Identifier: MIT
//pragma solidity ^0.6.0;
//
//contract Bank {
//
//  mapping (address => uint256) public balances;
//  address payable public owner;
//
//  function B4nk() public payable {
//    owner = msg.sender;
//    balances[owner] = msg.value;
//  }
//
//  function invest() public payable {
//    require(msg.value > 0, "Investment amount must be greater than 0");
//    balances[msg.sender] += msg.value;
//  }
//
//  function withdraw() public {
//    require(balances[msg.sender] > 0, "You do not have any balance to withdraw");
//    uint256 balanceToWithdraw = balances[msg.sender];
//    balances[msg.sender] = 0;
//    (bool success, ) = msg.sender.call{value: balanceToWithdraw}("");
//    require(success, "Withdraw failed");
//  }
//
//  function getBalance(address investor) public view returns (uint256) {
//    return balances[investor];
//  }
//
//  function collectFunds() public payable {
//    require(msg.sender == owner, "Only owner can collect funds");
//  }
//}