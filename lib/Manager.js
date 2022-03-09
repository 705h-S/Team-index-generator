// Third child
// office number

// refrence to parent class
const Employee = require("./Employee");

// child to parent class Employee
class Manager extends Employee {
  // constructor
  constructor(name, id, email, officeNumber) {
    // refrence to parent class properties
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // method to get office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // assigns this class as manaager
  getRole() {
    return "Manager";
  }
}

// allows app to refrence to this app
module.exports = Manager;
