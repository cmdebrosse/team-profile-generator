const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/HTML-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArr = [];

const managerPrompts = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'Who is the manager of this team?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log ("Please provide your manager's name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the manager's ID number?",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter the manager's ID number.")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the manager's email address?",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please provide the manager's email.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNum',
      message: "What is the manager's office number?",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter the manager's office number.")
          return false;
        } else {
          return true;
        }
      }
    }
  ])

  .then(managerInfo => {
    const { name, id, email, officeNum } = managerInfo;
    const manager = new Manager (name, id, email, officeNum);

    teamArr.push(manager);
  })
};

const employeePrompts = () => {
  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: "What is your employee's role?",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "What is your employee's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log ("Please provide your employee's name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your employee's ID number?",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter the employee's ID number.")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the employee's email address?",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please provide the employee's email.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'githubName',
      message: "What is your engineer's GitHub username?",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log ("Please provide your engineer's GitHub username.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'schoolName',
      message: "What school does your intern attend?",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log ("Please provide your intern's school.");
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'addEmployees',
      message: 'Would you like to add to your team?',
      default: 'false'
    }
  ])

  .then(teamMembers => {
    let { name, id, email, role, githubName, schoolName, addEmployees } = teamMembers;
    let employee;

    if (role === "Engineer") {
      employee = new Engineer (name, id, email, githubName);
      console.log(employee);
    } else if (role === "Intern") {
      employee = new Intern (name, id, email, schoolName);
      console.log(employee);
    }

    teamArr.push(employee);

    if (addEmployees) {
      return employeePrompts(teamArr)
    } else {
      return teamArr;
    }
  })
};

const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Team profile has been created! Check it out with the index.html file located in the 'dist' folder.")
    }
  })
};

managerPrompts()
  .then(employeePrompts)
  .then(teamArr => {
    return generateHTML(teamArr);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });