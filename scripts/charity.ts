import { ethers } from "hardhat";

async function main() {
    const charityFactory = await ethers.getContractFactory("Charity");
    const charityContract = await charityFactory.deploy(100);
    const deployerAddress = await charityContract.signer.getAddress();

    const oldBalance = await charityContract.balanceOf(deployerAddress);
    console.log("oldBalance:", oldBalance.toString());

    const tx = await charityContract.transfer(ethers.Wallet.createRandom().address, 101);
    tx.wait()

    const newBalance = await charityContract.balanceOf(deployerAddress);
    console.log("newBalance:", newBalance.toString());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
