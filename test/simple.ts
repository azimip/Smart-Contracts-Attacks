const { expect } = require("chai");
const { ethers } = require("hardhat");

const getBalance = ethers.provider.getBalance;

describe("SimpleAttack", function () {
  it("attacks", async () => {
    const [owner, user] = await ethers.getSigners();

    const Simple = await ethers.getContractFactory("Simple");
    const simple = await Simple.deploy();
    await simple.deployed();

    const SimpleAttack = await ethers.getContractFactory("SimpleAttack");
    const simpleAttack = await SimpleAttack.deploy({ value: 1 });
    await simpleAttack.deployed();

    await simpleAttack.attack(simple.address);

    expect(await getBalance(simple.address)).to.equal(1);
  });
});
