// migrating the appropriate contracts
var MyCompleteERC721Token = artifacts.require("MyCompleteERC721Token");
var SquareVerifier = artifacts.require("./verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = async function(deployer, network) {
  if (network === 'development')
  {
  await deployer.deploy(MyCompleteERC721Token);
  }
  await deployer.deploy(SquareVerifier);
  const squareVerifier = await SquareVerifier.deployed();
  await deployer.deploy(SolnSquareVerifier, squareVerifier.address);

};


// My Successful Migration
/*
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6addd3


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x498992ba85382a850e400ed2dd16c3bcba2482c993bdb24d8dafee6bb98e1e6c
   > Blocks: 2            Seconds: 21
   > contract address:    0x4618E7ec12F924B4E2f6C4AE116f9500EC6c78B7
   > block number:        4952082
   > block timestamp:     1566411259
   > account:             0x137EB8DEC479a6D66B6d7868315956EfAf12aAc1
   > balance:             14.263013552005000001
   > gas used:            261393
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00522786 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00522786 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x2c2ec53cb062eaf7424f466584e89429c56aa7a631b1ec4c01899272db6ff5de
   > Blocks: 1            Seconds: 25
   > contract address:    0x1CF887dABBFf881e3A7a7CefbCCBCD5C5E5fe9F2
   > block number:        4952085
   > block timestamp:     1566411304
   > account:             0x137EB8DEC479a6D66B6d7868315956EfAf12aAc1
   > balance:             14.237901512005000001
   > gas used:            1213579
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02427158 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xbc4fd44248522c86c0a391a7b01089194644eb4c4c8b636fb25d39411372b34a
   > Blocks: 0            Seconds: 5
   > contract address:    0x4ef4C3D4Cb62783196bEf272474042Ea3270F5B5
   > block number:        4952086
   > block timestamp:     1566411319
   > account:             0x137EB8DEC479a6D66B6d7868315956EfAf12aAc1
   > balance:             14.154142852005000001
   > gas used:            4187933
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.08375866 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.10803024 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.1132581 ETH

askariam (master *) eth-contracts
$ 





https://rinkeby.opensea.io/accounts/0x877c58b35660053f2da630f94acd9343f8d8e555  //Buyer Account
https://rinkeby.opensea.io/accounts/0x137eb8dec479a6d66b6d7868315956efaf12aac1  //Owner Account


*/
