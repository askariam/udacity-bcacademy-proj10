pragma solidity >=0.4.21 <0.6.0;


// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./ERC721Mintable.sol";
import "./verifier.sol";


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is MyCompleteERC721Token
{
    Verifier private _verifier;

    constructor(address verifierAddress) public
    {
        _verifier = Verifier(verifierAddress);
    }
    
// TODO define a solutions struct that can hold an index & an address

struct Solution
    {
        uint256 index;
        address solnAddress;
    }

// TODO define an array of the above struct
mapping(bytes32 => Solution) private solutions;

// TODO define a mapping to store unique solutions submitted
mapping(bytes32 => bool) private submittedSolutions;

// TODO Create an event to emit when a solution is added
event SolutionAdded(uint256 index, address _address);

// TODO Create a function to add the solutions to the array and emit the event
function addSolution(bytes32 solKey, uint256 index, address _address) internal {
    solutions[solKey].index = index;
    solutions[solKey].solnAddress = _address;
    emit SolutionAdded(index, _address);
}


// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
function mintSol(address _address, uint256 index, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input)
public returns (bool)
{
    bytes32 solKey = keccak256(abi.encodePacked(a,b,c, input));
    require(submittedSolutions[solKey] == false, "Solution Already Exists!");
    require(_verifier.verifyTx(a,b,c, input) == true, "Invalid Solution!");
    submittedSolutions[solKey] = true;
    addSolution(solKey, index, _address);
    return super.mint(_address, index, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/");

}

}

  


























