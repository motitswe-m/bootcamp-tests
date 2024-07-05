describe("Greet Function test", function () {
  it("greet Masego", function () {
    "This function greets an Masego";
    assert.equal(greet("Masego"), "Hello, Masego");
  });
  it("greet Samantha", function () {
    "This function greets Samantha";
    assert.equal(greet("Samantha"), "Hello, Samantha");
  });
  it("greet Tom?", function () {
    assert.equal(greet("Tom"), "Hello, Tom");
  });
});
