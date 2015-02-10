describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("capitalizes the first letter of consecutive words", function() {
    expect(titleCase("cat call")).to.equal("Cat Call");
  });

  it("ignore a list of exceptions", function() {
    expect(titleCase("cat and call")).to.equal("Cat and Call");
  });

});
