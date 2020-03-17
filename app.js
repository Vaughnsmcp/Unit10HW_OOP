const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const render = require("./lib/generateHTML")
const prompts = require("./prompts");




async function getManager() {
    try {
        const managerInfo = await inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "That's not his name, and I'm telling. "

                }
            },
            {
                type: "input",
                name: "managerID",
                message: "What is your manager's ID?",
                validate: answer => {
                    const okay = answer.match(
                        /^[1-9]\d*$/
                    )
                    if (okay) {
                        return true
                    }
                    return "Enter a number."
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your manager's office number?",
                validate: answer => {
                    const okay = answer.match(
                        /^[1-9]\d*$/
                    )
                    if (okay) {
                        return true
                    }
                    return "Enter an office number."
                }
            }, {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email?",
                validate: answer => {
                    const okay = answer.match(
                        /\S+@\S+\.\S+/
                    )
                    if (okay) {
                        return true
                    }
                    return "Enter a valid email."
                }
            }
        ])
        console.log(managerInfo)
        const manager = new Manager(managerInfo.managerName, managerInfo.managerID, managerInfo.managerEmail, managerInfo.managerOfficeNumber);
        prompts.teamMembers.push(manager)
        await prompts.chooseTeamMember()
    } catch (error) {
        console.log(error)


    }


}
getManager()