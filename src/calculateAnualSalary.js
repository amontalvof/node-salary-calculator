const printInConsole = require('./printInConsole');

const calculateAnualSalary = (hourlyRate, hoursOfWorkPerWeek) => {
    // const hoursOfWorkPerWeek = 40;
    const weeksOfWorkPerMonth = 4;
    const amountOfMonths = 12;

    const monthlySalary = hourlyRate * hoursOfWorkPerWeek * weeksOfWorkPerMonth;
    const anualSalary =
        hourlyRate * hoursOfWorkPerWeek * weeksOfWorkPerMonth * amountOfMonths;

    let taxesValue = 0;
    let taxesPercent = '0%';

    switch (true) {
        case anualSalary <= 9950:
            taxesValue = anualSalary * 0.1;
            taxesPercent = '10%';
            break;
        case 9951 <= anualSalary && anualSalary <= 40525:
            taxesValue = anualSalary * 0.12;
            taxesPercent = '12%';
            break;
        case 40526 <= anualSalary && anualSalary <= 86375:
            taxesValue = anualSalary * 0.22;
            taxesPercent = '22%';
            break;
        case 86376 <= anualSalary && anualSalary <= 164925:
            taxesValue = anualSalary * 0.24;
            taxesPercent = '24%';
            break;
        case 164926 <= anualSalary && anualSalary <= 209425:
            taxesValue = anualSalary * 0.32;
            taxesPercent = '32%';
            break;
        case 209426 <= anualSalary && anualSalary <= 523600:
            taxesValue = anualSalary * 0.35;
            taxesPercent = '35%';
            break;
        case 523600 <= anualSalary:
            taxesValue = anualSalary * 0.37;
            taxesPercent = '37%';
            break;
        default:
            break;
    }
    printInConsole({
        hourlyRate,
        monthlySalary,
        taxesPercent,
        anualSalary,
        taxesValue,
    });
};

module.exports = calculateAnualSalary;
