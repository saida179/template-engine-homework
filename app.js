const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeArr = [];


function addWorkers() {
    inquirer.prompt([{
        type: "list",
        message: "job title ",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {

        type: "input",
        name: "new employee name",
        message: "Enter employee's name:",
    },
    {
        type: "input",
        name: "Id",
        message: "Enter employee's ID:",
    },
    {
        type: "input",
        name: "Email",
        message: "Enter employee's email:",
    },
])