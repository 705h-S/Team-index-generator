// secound child class
// School

// refrencess parent class
const Employee = require("./Employee");

// child  to parent Employee
class Intern extends Employee{

        constructor(name, id, email, school){
            // refrences parent 
            super(name, id, email);
            this.school = school;
        }

        // methode to get school
        getSchool(){
            return this.school;
        }

        // sets rolse as Intern 
        getRole(){
            return 'Intern';
        }

}
// allows app to access this file 
module.exports = Intern