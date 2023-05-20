const calculateAnualSalary = require('./src/calculateAnualSalary');
const { inquirerMenu, readInput } = require('./src/menu');

const main = async () => {
    let opt = '';

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                calculateAnualSalary(await readInput('Rate:'));
                break;
            default:
                break;
        }
    } while (opt !== '2');
};

main();
