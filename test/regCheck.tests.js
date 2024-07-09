const assert = require("assert");
const regCheck = require("../regCheck");

describe("regCheck", function () {
  it("Registration numbers from Cape Town", function () {
    assert.equal(regCheck("DC 55 YU GP", "GP"), true);
    assert.equal(regCheck("DV 23 NB GP", "GP"), true);
  });

  it("Registration numbers not from Cape Town", function () {
    assert.equal(regCheck("CA 123-456", "GP"), false);
    assert.equal(regCheck("CY 123-456", "GP"), false);
  });
});
