const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const render = require("./lib/generateHTML")







function addmenu() {
    Inquirer.prompt([
        {
            type: "input",
            name: "ManagerName",
            message: "What is your manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "go home"

            }
        },
        {
            type: "input",
            name: "ManagerID",
            message: "What is your manager's ID?",
            validate: answer => {
                const okay = answer.match(
                    /^[1-9]\d*$/
                )
                if (okay) {
                    return true
                }
                return "Enter a number, or go home."
            }
        },
        {
            type: "input",
            name: "OfficeNumber",
            message: "What is your manager's office number?",
            validate: answer => {
                const okay = answer.match(
                    /^[1-9]\d*$/
                )
                if (okay) {
                    return true
                }
                return "Enter an office number. Stop wasting my time."
            }
        }, {
            type: "input",
            name: "ManagerEmail",
            message: "What is your manager's email?",
            validate: answer => {
                const okay = answer.match(
                    /\S+@\S+\.\S+/
                )
                if (okay) {
                    return true
                }
                return "Enter a valid email or get a new hobby."
            }
        }
    ])

}
