const inquirer = require('inquirer');
const calculateAnualSalary = require('./src/calculateAnualSalary');

const prompt = inquirer.createPromptModule();
prompt([
    { type: 'input', name: 'salary', message: 'Enter your hourly rate' },
]).then((answers) => calculateAnualSalary(answers.salary));
