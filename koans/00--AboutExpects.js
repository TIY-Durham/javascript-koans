var expect = require('chai').expect,
    FILL_ME_IN;

describe("About Expects", function() {
  // We shall contemplate truth by testing reality, via spec expectations.
  it("should expect true", function() {
<<<<<<< HEAD
    expect(1 == true).to.be.true;
    expect(true).to.be.true;
=======
    expect(true).to.be.true; //This should be true
>>>>>>> 976b52e2f59453c2c21fe4790571e74709245d6d
  });

  // To understand reality, we must compare our expectations against reality.
  it("should expect equality", function () {
    var actual = 1 + 1;

    expect(actual === 2).to.be.true
<<<<<<< HEAD
    expect(1+1 === 2).to.be.true
=======
>>>>>>> 976b52e2f59453c2c21fe4790571e74709245d6d
  });

  // Some ways of asserting equality are better than others.
  it("should assert equality a better way", function () {
    var actual = 1 + 1;

    // to.equal() compares using "strict" equality (===)
    expect(actual).to.equal(2);
  });

  // Sometimes you need to be really exact about what you "type."
  it("should check the _type_ first", function () {
    var actual = (1 + 1).toString();

    // use to.be.a() to check the type of a value
    expect(actual).to.be.a("string");

    expect(actual).to.equal("2"); // Fails?
  });

  // Sometimes we will ask you to fill in the values.
  it("should have filled in values", function () {
    expect(1 + 1).to.equal(2);
  });
});
