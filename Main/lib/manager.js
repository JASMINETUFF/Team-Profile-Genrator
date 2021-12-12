// Require the employee Js file.
const Employee = require("./employee");

//Create a class for Manager that is an extension from the Employee file. 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); 
        this.officeNumber= officeNumber;
    }
//Get office number and return it. 
  getOfficeNumber() {
    return this.officeNumber;
  }
//Get role function override to manager 
  getRole() {
    return "Manager";
  }
    
}

module.exports = Manager;
//export the function manager constructors. 