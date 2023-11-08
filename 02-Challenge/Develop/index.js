// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is your TITLE?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'provide a discription',
        name: 'discription'
    },
    {
        type: 'input',
        message: 'table of content?',
        name: 'content'
    },
    {
        type: 'input',
        message: 'installation',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'what is this used for?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'do you have a license?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'who contrubited in this project?',
        name: 'contribution',
    }
];

// TODO: Create a function to write README file
inquirer.prompt(questions).then(responses => {
    console.log(responses)

    fs.writeFile('README.md', generateMarkdown(responses), (err) =>     /// JSON.text ?
    err ? console.log(err) : console.log('Commit logged!')
    );
})


// TODO: Create a function to initialize app

// // generate the readMe file. 
// function init() {
// //     //1 get the questions and the use the answer to =>
// //     //2. wwrite the file.

//  }

// // Function call to initialize app
// init();
