// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Charity {

  mapping(address => uint) balances;

  constructor(uint _initialSupply) public {
    balances[msg.sender] = _initialSupply;
  }

  function transfer(address _to, uint _value) public returns (bool) {
    require(balances[msg.sender] - _value >= 0);
    balances[msg.sender] -= _value;
    balances[_to] += _value;
    return true;
  }

  function balanceOf(address _owner) public view returns (uint balance) {
    return balances[_owner];
  }

  function withdraw(uint _amount) public returns (bool) {
    require(balances[msg.sender] >= _amount);
    balances[msg.sender] -= _amount;
    msg.sender.transfer(_amount);
    return true;
  }
}