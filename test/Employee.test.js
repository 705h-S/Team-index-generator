// going to test for employee

// refrence to what its going to test for...
const Emplpoyee = require("../lib/Employee");

// what am I going to test?
describe("Employee object", () => {
  // what should it do?
  it("Should create an object of employee name", () => {
    // Arange
    const name = "Josh";
    // Act
    const em = new Emplpoyee(name);
    // Assert
    expect(em.name).toEqual(name);
  });

  // what should it do?
  it("Should create an object 0f employees id with  name", () => {
    // Arange
    const name = "Josh";
    const id = 1;
    // Act
    const em = new Emplpoyee(name, id);
    // Assert
    expect(em.id).toEqual(id);
  });

  //what should it do ?
  it("Should create an object of employees id, name and email", () => {
    // Arange
    const name = "Josh";
    const id = 1;
    const email = "fakeemail@gmail.com";
    // Act
    const em = new Emplpoyee(name, id, email);
    // Assert
    expect(em.email).toEqual(email);
  });

  //what should it do?
  it("getRole() should override as employee", () => {
    //Arange
    const name = "Josh";
    const id = 1;
    const email = "fakeemail@gmail.com";
    // Act
    const em = new Emplpoyee(name, id, email);
    // Assert
    expect(em.getRole()).toEqual("Employee");
  });
});
