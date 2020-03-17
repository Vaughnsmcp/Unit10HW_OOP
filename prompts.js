const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const teamMembers = []
async function getEngineer() {
    const engineerInfo = await inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is your Engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "That's not his name, and I'm telling. "

            }
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is your engineer's ID?",
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
            name: "engineerGitHubUserName",
            message: "What is your engineer's Git Hub user name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Must enter a name."

            }
        }, {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email?",
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
    const engineer = new Engineer(engineerInfo.engineerName, engineerInfo.engineerID, engineerInfo.engineerEmail, engineerInfo.engineerGitHubUserName);
    teamMembers.push(engineer)

     chooseTeamMember()

}
async function getIntern() {
    const internInfo = await inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Must enter a name."

            }
        },
        {
            type: "input",
            name: "internID",
            message: "What is your intern's ID?",
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
            name: "schoolName",
            message: "What is your intern's school name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                }
                return "Must enter a name."

            }
        }, {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?",
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
    const intern = new Intern(internInfo.internName, internInfo.internID, internInfo.internEmail, internInfo.schoolName);
    teamMembers.push(intern)

    chooseTeamMember()
}

async function getTeam() {
     return await inquirer.prompt([{
        type: "list",
        name: "teamMember",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "None"]

    }])
}

async function chooseTeamMember() {
    try {
        const teamInfo = await getTeam()
    
        switch(teamInfo.teamMember) {
            case "Engineer":
                
                await getEngineer()
              break;
            case "Intern":
                
                await getIntern()
              break;
            default:
              console.log("generateHTML", teamMembers)
          }

    } catch (error) {
        console.log(error)

    }



}

module.exports = { 
    getIntern, getEngineer, getTeam, chooseTeamMember,
    teamMembers,
}













