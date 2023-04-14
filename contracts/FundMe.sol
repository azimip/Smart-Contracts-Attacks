// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundMe {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function withdraw() public {
        require(msg.sender == owner, "caller is not the owner");
        owner.transfer(address(this).balance);
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function changeOwner(address _owner) public {
        if (tx.origin != msg.sender) {
            owner = payable(_owner);
        }
    }

    receive() external payable {}
}
