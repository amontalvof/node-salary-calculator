const formatToCurrency = (number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(number);
};

module.exports = formatToCurrency;
