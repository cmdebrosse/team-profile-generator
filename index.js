const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/HTML-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamArr = [];