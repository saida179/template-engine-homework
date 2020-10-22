const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "main.html");
const render = require("./lib/htmlRenderer");
const employeeArr = [];


function addWorkers() {
    inquirer.prompt([{
        type: "list",
        message: "Job Title ",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {

        type: "input",
        name: "New employee name",
        message: "Enter employee's Name:",
    },
    {
        type: "input",
        name: "Id",
        message: "Enter employee's ID:",
    },
    {
        type: "input",
        name: "Email",
        message: "Enter employee's Email:",
    },
])
    .then(function (answers) {
        if (answers.Choose === "Manager") {
            inquirer.prompt([
                {
                    
                    type: "input",
                    name: "?",
                    message: "?",
                }
            ])
            .then(function (res) {
                const engineer = new Engineer(answers.name, answers.id, answers.email, res.github);
                employees.push(engineer);
            })
    
}
//I hit a wall.. I'm confused from where to go from here theres something that I wanted to try out but heres no more time