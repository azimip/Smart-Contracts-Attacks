import { ethers } from "hardhat";

async function main() {
    const bankGameFactory = await ethers.getContractFactory("Bank");
    const bankGameContract = await bankGameFactory.deploy();

    const tx = await bankGameContract.B4nk();
    const result = await tx.wait();
    console.log(result);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
