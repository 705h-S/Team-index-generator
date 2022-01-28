const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const path = require('path');


// class modules 
// parent
const Employee = require('./lib/Employee');
// Children
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function questions(){

        const addManager = [

            {
                type: "input",
                name: "managerName",
                message: "Who's the manager?"
            },

            {
                type: "input",
                name: "managerid",
                message: "What is the Manager's ID"
            },

            {
                type: "input",
                name: "managerOfice",
                message: "What's the manager's office number?"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What's that managers email"
            }
        ]
        function addEn(){
        const addEngineer = [

            {
                type: "input",
                name: "engineerName",
                message: "Who's the Engineer?"
            },

            {
                type: "input",
                name: "engineerid",
                message: "What is the engineer's ID"
            },

            {
                type: "input",
                name: "gitHub",
                message: "What's the engineer's GitHub?"
            },

            {
                type: "input",
                name: "managerEmail",
                message: "What's the engineer's email"
            }
        ]
    }
        function addInt(){
        const addIntern = [
            {
                type: "input",
                name: "internName",
                message: "Who's the Intern?"
            },

            {
                type: "input",
                name: "internid",
                message: "What is the Intern's ID"
            },

            {
                type: "input",
                name: "internSchool",
                message: "What school did the Intern attend?"
            },

            {
                type: "input",
                name: "internEmail",
                message: "What's the intern email"
            }

        ]
    }
   
}