const formatToCurrency = require('./formatToCurrency');

const printInConsole = ({
    hourlyRate,
    monthlySalary,
    taxesPercent,
    anualSalary,
    taxesValue,
}) => {
    console.log('Hourly Rate            ->', formatToCurrency(hourlyRate));
    console.log('Monthly Salary         ->', formatToCurrency(monthlySalary));
    console.log('Assigned Taxes         ->', taxesPercent);
    console.log('Anual Salary           ->', formatToCurrency(anualSalary));
    console.log('Anual Taxes            ->', formatToCurrency(taxesValue));
    console.log(
        'Total Received         ->',
        formatToCurrency(anualSalary - taxesValue)
    );
    console.log(
        'Total Monthly Received ->',
        formatToCurrency((anualSalary - taxesValue) / 12)
    );
};

module.exports = printInConsole;
