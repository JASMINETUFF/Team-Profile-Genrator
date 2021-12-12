//Create a class for Employee that will be used for other files. 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//Calling the getName method/function that will return the name 
  getName() {
    return this.name; //Get the name & return the name
  }
  getId() {
    return this.id; //Get the id & return the id
  }
  getEmail() {
    return this.email; // Get the email & return the email
  }
  getRole() {
    return "Employee"; // return the string "employee" as their role.
  }
}

module.exports = Employee;
//export the function employee constructors. 