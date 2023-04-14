import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
async function main() {
  const Simple = await ethers.getContractFactory("Simple");
  const simple = await Simple.deploy();

  await simple.deployed();

  console.log(
    `Simple deployed to ${simple.address}`
  );

  const SimpleAttack = await ethers.getContractFactory("SimpleAttack");
  const simpleAttack = await SimpleAttack.deploy({ value: 1 });

  await simpleAttack.deployed()

  console.log(`Simple contract balance before attack is ${await simple.getBalance(CONTRACT_ADDRESS)}`);

  await simpleAttack.attack(CONTRACT_ADDRESS);

  console.log(`Simple contract balance after attack is ${await simple.getBalance(CONTRACT_ADDRESS)}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
