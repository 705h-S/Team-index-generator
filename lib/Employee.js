// Parent Class
//name
//ID
//email
//role

// Class etiquette Should start with capitial
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // methods

  // Name
  getName() {
    return this.name;
  }

  // id
  getId() {
    return this.id;
  }

  //email
  getEmail() {
    return this.email;
  }

  //role
  getRole() {
    return "Employee";
  }
}
// Exporting defualt/ value so that app can use
module.exports = Employee;
