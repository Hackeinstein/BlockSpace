// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract BlockspaceToken is ERC20 {
    constructor() ERC20("Blockspace", "BKS") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}
