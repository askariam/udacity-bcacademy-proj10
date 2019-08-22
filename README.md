# Project 8 (10): Udacity Blockchain Capstone

This project is developoed as part of Udacity Blockchain Developer Nanodegree Program. In this project, I implemented Tracable ERC721 Mintable Contract that is compatible with OpenSea market place. I was able to list the tokens in the market place and purchase them using different account. This project simulates real estate market place.

## Setup Project for Review

To setup the project for review.
1. Download/Clone the Project.
2. Install ganache-cli if not installed.
3. Install Truffle if not installed.
4. Install all dependencies (npm packages).
```
npm install
```
5. Start ganache.
```
ganache-cli -m "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"
```
6. cd to directory 'eth-contracts'
7. Compile the smart contracts in another terminal window. For the compilation to work I configured compilers object in truffle.js file.

```
truffle compile
```

8. After compilation completes, migrate/deploy the smart contracts locally:

```
truffle migrate
```

9. Test the smart contracts:

```
truffle test
```

10. Make sure the 15 tests should pass.
11. I generated proofs using ZoKrates.
12. I deployed the contracts on Rinkeby network.
13. I minted 10 tokens using the script meint.js.
14. I listed 5 of these for sale.
15. I purchased these 5 tokens (using another account).

## Account Addresses
I used two Rinkeby Accounts for this project:
1. Owner Address: 0x137eb8dec479a6d66b6d7868315956efaf12aac1
2. Buyer Address (used to purchase listed real estates): 0x877c58b35660053f2da630f94acd9343f8d8e555
3. ZoKrates Address (Verifier Contract): 0x1CF887dABBFf881e3A7a7CefbCCBCD5C5E5fe9F2
4. ERC721 Contract Address: 0x4ef4C3D4Cb62783196bEf272474042Ea3270F5B5

## OpenSea StoreFront & Etherscan Links:
1. For the Owner: [Owner StoreFront](https://rinkeby.opensea.io/accounts/0x137eb8dec479a6d66b6d7868315956efaf12aac1)
2. For the Buyer: [Buyer StoreFront](https://rinkeby.opensea.io/accounts/0x877c58b35660053f2da630f94acd9343f8d8e555) 
3. Etherscan: [Etherscan Contract Link](https://rinkeby.etherscan.io/address/0x4ef4C3D4Cb62783196bEf272474042Ea3270F5B5)

## ABIs
All the ABIs of the contracts can be found after executing the command : 
```
truffle compile —-all
```
Under the directory

## Versions

* Truffle v5.0.19 (core: 5.0.19)
* Node v10.15.3
* Web3 v1.0.0-beta.37
* Solidity v0.4.24 (solc-js)
* Ganache CLI v6.4.3 (ganache-core: 2.5.5)


## Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
