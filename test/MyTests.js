const { expect } = require("chai");

// Comman part for all upcoming tests
const { 
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { assertHardhatInvariant } = require("hardhat/internal/core/errors");


describe("Token contract", function () {
  // Reusable fixture to perform the same setup in every test.
  async function deployTokenFixture() {
    // Get the Signers here.
    const [owner, addr1, addr2] = await ethers.getSigners();

    // To get access to token business logic
    const hardhatToken = await ethers.deployContract("Token");

    await hardhatToken.waitForDeployment();

    const totalSupply = await hardhatToken.totalSupply()

    return { hardhatToken, owner, addr1, addr2, totalSupply };
  }

  describe("Experimental tests", function () {
    it("Check name and symbol of the token ", async function () {
      const { hardhatToken } = await loadFixture(deployTokenFixture);

      expect(await hardhatToken.name()).to.equal("My Hardhat Token");
      expect(await hardhatToken.symbol()).to.equal("MHT");
    });

    it("Check predefined total supply amount", async function () {
      const { totalSupply } = await loadFixture(deployTokenFixture);
      
      expect(totalSupply).to.equal(1000000);
    });

    it("Check transfers", async function () {
      const { hardhatToken, owner, addr1, addr2 } = await loadFixture(deployTokenFixture);

      const senderBalance = await hardhatToken.balanceOf(owner.address)
      console.log("sender balance: " + senderBalance)

      const receiverBalance = await hardhatToken.balanceOf(addr1.address)
      console.log("receiver balance: " + receiverBalance)

      await hardhatToken.transfer(addr1.address, 100)

      expect(await hardhatToken.balanceOf(owner.address)).to.equal(senderBalance - BigInt(100))
      expect(await hardhatToken.balanceOf(addr1.address)).to.equal(receiverBalance + BigInt(100))

      const senderBalanceAfter = await hardhatToken.balanceOf(owner.address)
      console.log("sender balance after transaction: " + senderBalanceAfter)

      const receiverBalanceAfter = await hardhatToken.balanceOf(addr1.address)
      console.log("receiver balance after transaction: " + receiverBalanceAfter)
    });

    it("Check more then total supply transfer", async function () {
      const { hardhatToken, owner, addr1 } = await loadFixture(deployTokenFixture);

      const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

      await expect(hardhatToken.transfer(addr1.address, 1000001)
      ).to.be.revertedWith("Not enough tokens");

      expect(await hardhatToken.balanceOf(owner.address)).to.equal(initialOwnerBalance)
    });
  });
});