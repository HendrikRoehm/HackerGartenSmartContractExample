pragma solidity ^0.4.4;

contract Bet {
    mapping (address => uint) choices;
    address betmaster;

    function Bet() {
        betmaster = tx.origin;
    }

    function makeBet(uint choice) {
        // 0 is no choice, positive numbers represent choices
        choices[msg.sender] = choice;
    }

    function closeBetting() returns(bool) {
        // TODO: Implement that betmaster can close the betting and insert whats finally correct
        return false;
    }

    function getBet(address better) returns(uint) {
        return choices[better];
    }
}
