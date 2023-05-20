const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'Do you want to calculate your salary?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Enter your hourly rate`,
            },
            {
                value: '2',
                name: `${'2.'.green} Exit`,
            },
        ],
    },
];

const inquirerMenu = async () => {
    const { option } = await inquirer.prompt(questions);
    return option;
};

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                const isNumber = /^-?[\d.]+(?:e-?\d+)?$/.test(value);
                if (!isNumber) {
                    return 'Please enter a valid value.';
                }
                return true;
            },
        },
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
};

module.exports = {
    inquirerMenu,
    readInput,
};
