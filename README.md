# Smart Contracts and Attacks on Them

This project explores different attacks on smart contracts and demonstrates how to deploy and run corresponding contracts. 

## Prerequisites

Before running the project, ensure that you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Metamask](https://metamask.io/)

## Installation

To install Hardhat, run the following command in your terminal:

```
npm install hardhat -g
```


## Running the Project

To run the project, first install the npm dependencies:

```
npm install
```

Then, you first need to start a test network by running the following command:

```
npx hardhat node
```


After running this command, you will be provided with some accounts. Copy one of these accounts' private key and import it into Metamask by clicking on "Import Account" and adding the private key.

You can then deploy each of the attacks and their corresponding contracts using the following command:

```
npx hardhat run scripts/<name of script> --network localhost

```

Additionally, there is a test case example for one of the attacks. This test can be run using the following command:


```
npx hardhat test
```


## Important Note:
In case the code didn't compile successfully, you can initialize a new hardhat project using:
```
npx hardhat
```

And copy the content of hardhat.config.js file and test, scripts, and contracts folders to that project. That will solve the dependency problems.

