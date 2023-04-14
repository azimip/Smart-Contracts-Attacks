import { ethers } from "hardhat";

async function main() {
    const diceGameFactory = await ethers.getContractFactory("DiceGame");
    const diceGameContract = await diceGameFactory.deploy();

    const diceGameAttackFactory = await ethers.getContractFactory("DiceGameAttack");
    const diceGameAttackContract = await diceGameAttackFactory.deploy();

    const tx = await diceGameAttackContract.attack(diceGameContract.address);
    const result = await tx.wait();
    console.log(result);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});