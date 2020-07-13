pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function explode(uint y) public {
    storedData = y + 123;
    revert("boom");
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
