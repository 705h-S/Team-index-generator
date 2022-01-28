// Child class
// Github username 

// refrencess to parent file
const Employee = require('./Employee');

// Child class with parent of Employee 
class Engineer extends Employee{

        constructor(name, id, email, github){
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
            super(name, id, email);
            this.github = github;
        }
        // method to display user name
        getGitHub(){
            return this.github;
        }
        // will assign as engineer 
        getRole(){
            return "Engineer";
        }

}
// app can refreence this file
module.exports = Engineer