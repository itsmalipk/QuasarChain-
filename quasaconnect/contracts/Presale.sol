// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Presale {
    address public owner;
    uint256 public tokensSold;

    constructor() {
        owner = msg.sender;
    }

    function buyTokens() public payable {
        require(msg.value > 0, "Send ETH to buy tokens");
        tokensSold += msg.value;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdraw() public {
        require(msg.sender == owner, "Not owner");
        payable(owner).transfer(address(this).balance);
    }
}