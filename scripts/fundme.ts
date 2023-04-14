import { ethers } from "hardhat";

async function main() {
    const fundMeFactory = await ethers.getContractFactory("FundMe");
    const fundMeContract = await fundMeFactory.deploy();

    const fundMeAttackFactory = await ethers.getContractFactory("FundMeAttack");
    const fundMeAttackContract = await fundMeAttackFactory.deploy();

    const oldOwner = await fundMeContract.owner()
    console.log("oldOwner:", oldOwner);

    // change the owner to a random address
    const tx = await fundMeAttackContract.attack(fundMeContract.address, ethers.Wallet.createRandom().address);
    await tx.wait();

    const newOwner = await fundMeContract.owner()
    console.log("newOwner:", newOwner);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});