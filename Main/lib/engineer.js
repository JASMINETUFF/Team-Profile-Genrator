// Require the employee Js file.
const Employee = require("./employee");

//Create a class for Engineer that is an extension from the Employee file. 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, school); 
        this.github = github;
    }
//Gets github and returns it
  getGithub() {
    return this.github;
  }
//Override role from employee to engineer
  getRole() {
    return "Engineer";
  }
    
}

module.exports = Engineer;
//export the function engineer constructors. 