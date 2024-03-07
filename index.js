const calculateAnualSalary = require('./src/calculateAnualSalary');
const { inquirerMenu, readInput } = require('./src/menu');

const main = async () => {
    let opt = '';
    let hourlyRate = 0;
    let hoursOfWork = 0;
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                hourlyRate = await readInput('Rate:');
                break;
            case '2':
                hoursOfWork = await readInput('Hours:');
                break;
            default:
                break;
        }
        if (hourlyRate && hoursOfWork) {
            calculateAnualSalary(hourlyRate, hoursOfWork);
        }
    } while (opt !== '3');
};

main();
