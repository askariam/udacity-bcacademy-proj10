
// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const Verifier = artifacts.require('Verifier');

const proof = require('../../zokrates/code/square/proof');

contract('SolnSquareVerifier', accounts => {
    const account_one = accounts[0];    // owner
    const account_two = accounts[1];    // another account

    describe('SolnSquareVerifier Test', () => {
        beforeEach(async () => {
            const verifier = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(verifier.address, {from: account_one});
            //console.log(this.contract);
        });

        it('should be able to mint token', async () => {

            let testProof = proof.proof;
            let result = false;
            let errorFound = false;
            try
            {
                //result = await this.contract.mintSol.call(account_two, 1, 
                //testProof.a, testProof.b, testProof.c, proof.inputs, {from: account_one});

                await this.contract.mintSol(account_two, 1, 
                    testProof.a, testProof.b, testProof.c, proof.inputs, {from: account_one});

            }
            catch(e)
            {
                console.log(e.reason);
                errorFound = true;
            }
            assert.equal(false, errorFound, "Failed to mint!");
        });


        it('should fail when using the same proof twice', async () => {
            let errorFound = false;
            let testProof = proof.proof;
            try
            {
                await this.contract.mintSol(account_two, 1, 
                testProof.a, testProof.b, testProof.c, proof.inputs, {from: account_one});

                await this.contract.mintSol(account_two, 1, 
                testProof.a, testProof.b, testProof.c, proof.inputs, {from: account_one});
                
            }
            catch(e)
            {
                console.log(e.reason);
                errorFound = true;
            }
            assert.equal(true, errorFound, "Should fail when using already used proof!");
        })


    });


});