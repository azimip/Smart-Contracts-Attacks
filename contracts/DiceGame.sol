// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DiceGame {

  uint256 lastHash;

  function roll(uint8 _bet) public returns (bool) {
    require(_bet >= 1 && _bet <= 6, "Invalid bet. Please choose a number between 1 and 6.");
    uint256 blockValue = uint256(blockhash(block.number - 1));

    if (lastHash == blockValue) {
      revert();
    }

    lastHash = blockValue;
    uint256 diceRoll = (blockValue % 6) + 1;

    if (diceRoll == _bet) {
      return true;
    } else {
      return false;
    }
  }
}
