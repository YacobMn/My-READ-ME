// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
    {
        type: 'input',
        message: 'what is your TITLE?',
        name: 'title',
    }
]).then(file => {
    console.log(file)
// TODO: Create a function to write README file
    function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    }
})



// TODO: Create a function to initialize app
// generate the readMe file. 
function init() {
    //1 get the questions and the use the answer to =>
    //2. wwrite the file.

}

// Function call to initialize app
init();
