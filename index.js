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