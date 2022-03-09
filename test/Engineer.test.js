// Test for engineer

// refrence to what it's going to test for..
const Engineer = require("../lib/Engineer");

// refrence parent?
// const Employee = require('../lib/Employee');

// what am I going to test for?
describe("Engineer object", () => {
  // What should it do?
  it("Should create an object of github with the parameters of parent", () => {
    // Arange
    const name = "Josh";
    const id = 1;
    const email = "fakeemail@gmail.com";
    const gitHub = "705h-S";
    // Act
    const en = new Engineer(name, id, email, gitHub);
    // Assert
    expect(en.github).toEqual(gitHub);
  });

  // What should it do?
  it("getRole() should override and as employee", () => {
    // Arange
    const name = "Josh";
    const id = 1;
    const email = "fakeemail@gmail.com";
    const gitHub = "705h-S";
    // Act
    const en = new Engineer(name, id, email, gitHub);
    // Assert
    expect(en.getRole()).toEqual("Engineer");
  });
});
