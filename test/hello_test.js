const Hello = artifacts.require("Hello");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("hello", function (accounts) {
  it("should assert true", async () => {
    await Hello.deployed();
    return assert.isTrue(true);
  });
  describe("greet()", () => {
    it("should return, 'Hello, World!'", async ()=>{
      const hello = await Hello.deployed();
      const result = await hello.greet();
      const expected = "Hello, World!";
      assert.equal(result, expected);
    });
  });
  describe("owner()", () => {
    it("should fetch the owner", async ()=>{
      const hello = await Hello.deployed();
      const result = await hello.owner(); // accounts[0]
      const expected = accounts[0];
      assert.equal(result, expected);
    });
  });
  describe("setGreetie()", () =>{
    it("should change the greetie", async () =>{
      const hello = await Hello.deployed();
      const expected = "Hello, Human";
      await hello.setGreetie("Human");
      const result = await hello.greet();
      assert.equal(result, expected)
    })
  })
});
