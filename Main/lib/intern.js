// Require the employee Js file.
const Employee = require("./employee");

//Create a class for Itern that is an extension from the Employee file. 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school); 
        this.school = school;
    }
//Get role function that returns the string "Intern"
  getRole() {
    return "Intern";
  }
//Get getSchool function that returns the school of the intern. 
  getSchool() {
    return this.school;
  }
    
}

module.exports = Intern;
//export the function Interns constructors. 