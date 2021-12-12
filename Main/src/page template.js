//Create the team
const newTeam = team => {

//create manager card
    const generateManager = manager => {
        return `
        <div class="employee-card">
        <div class="card-header">
        <h1 class="card-title">${manager.getName()}</h1>
        <h2 class="card-title">${manager.getRole()}</h2>
        </div>
        <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
          </ul>
      </div>
      </div>

        `;
    };
//create engineer card
    const generateEngineer = engineer => {
        return `
        <div class="employee-card">
        <div class="card-header">
        <h1 class="card-title">${engineer.getName()}</h1>
        <h2 class="card-title">${engineer.getRole()}</h2>
        </div>
        <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
          </ul>
      </div>
      </div>

        `;
    };
//create intern card
    const generateIntern = intern => {
        return `
        <div class="employee-card">
        <div class="card-header">
        <h1 class="card-title">${intern.getName()}</h1>
        <h2 class="card-title">${intern.getRole()}</h2>
        </div>
        <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
      </div>
      </div>
        `;
    };
//empty array for HTMLS
    const html = [];
//push html for the manager
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    // push html for the engineer
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    //push html for the intern
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
    //Adds all the elements of an array into a string, separated by the specified separator string.

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Builder</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
<div class="container-fluid">
<div class="row">
    <div class="col-12 jumbotron mb-2 team-heading">
        <p>My Team</p>
    </div>
</div>
</div>
<div class="container">
<div class="row">
    <div class="team-area col-12 d-flex justify-content-center">
        ${newTeam(team)}
    </div>
</div>
</div>
</body>
</html>

`;
};