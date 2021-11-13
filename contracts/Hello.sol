// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Hello is Ownable {
  string private _greeting = "Hello";
  string private _sep = ", ";
  string private _greetie = "World!";

  function greet() external view returns (string memory) {
    return string(abi.encodePacked(_greeting, _sep, _greetie));
  }
  // calldata is what is passed in exterally
  // onlyOwner is from openzeppelin contract thatt restricts callability to the owner
  function setGreetie(string calldata _newGreetie) external onlyOwner {
    _greetie = _newGreetie;
  }
}
