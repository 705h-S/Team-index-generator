const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const path = require("path");

// class modules
// parent
const Employee = require("./lib/Employee");
// Children
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateHTML = require("./src/Template");

// empty array to include team members.
const teamArray = [];

//  prompt questions
const teamMemberType = [
  {
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "teamMember",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const questions = {
  Manager: [
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "name",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter a name.";
        }
      },
    },
    {
      type: "input",
      message: "What is the team manager's id?",
      name: "id",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an id.";
        }
      },
    },
    {
      type: "input",
      message: "What is the team manager's email?",
      name: "email",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an email.";
        }
      },
    },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "officeNumber",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an Office number.";
        }
      },
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "addTeamMember",
      choices: ["yes", "no"],
    },
  ],

  Engineer: [
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "name",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter a name.";
        }
      },
    },
    {
      type: "input",
      message: "What is the engineer's id?",
      name: "id",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an id.";
        }
      },
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "email",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an email.";
        }
      },
    },
    {
      type: "input",
      message: "What is the engineer's Github username?",
      name: "github",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter a github username.";
        }
      },
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "addTeamMember",
      choices: ["yes", "no"],
    },
  ],

  Intern: [
    {
      type: "input",
      message: "What is the intern's name?",
      name: "name",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter a name.";
        }
      },
    },
    {
      type: "input",
      message: "What is the intern's id?",
      name: "id",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an id.";
        }
      },
    },
    {
      type: "input",
      message: "What is the intern's email?",
      name: "email",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter an email.";
        }
      },
    },
    {
      type: "input",
      message: "What is the intern's school name?",
      name: "school",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          return "Please enter a school.";
        }
      },
    },
    {
      type: "list",
      message: "Would you like to add another team member?",
      name: "addTeamMember",
      choices: ["yes", "no"],
    },
  ],
};

function init() {
  inquirer.prompt(teamMemberType).then((answer) => {
    if (answer.teamMember === "Manager") {
      inquirer.prompt(questions.Manager).then((answer) => {
        const manager = new Manager(
          answer.name,
          answer.id,
          answer.email,
          answer.officeNumber
        );

        teamArray.push(manager);

        if (answer.addTeamMember === "yes") {
          init();
        } else {
          generateCard(teamArray);
        }
      });
    } else if (answer.teamMember === "Engineer") {
      inquirer.prompt(questions.Engineer).then((answer) => {
        const engineer = new Engineer(
          answer.name,
          answer.id,
          answer.email,
          answer.github
        );

        teamArray.push(engineer);

        if (answer.addTeamMember === "yes") {
          init();
        } else {
          generateCard(teamArray);
        }
      });
    } else if (answer.teamMember === "Intern") {
      inquirer.prompt(questions.Intern).then((answer) => {
        const intern = new Intern(
          answer.name,
          answer.id,
          answer.email,
          answer.school
        );

        teamArray.push(intern);

        if (answer.addTeamMember === "yes") {
          init();
        } else {
          generateCard(teamArray);
        }
      });
    }
  });
}

init();

function generateCard(teamArray) {
  writeToFile(generateHTML(teamArray));
}

function writeToFile(employeeData) {
  fs.writeFile("./dist/index.html", employeeData, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been created");
    }
  });
}
