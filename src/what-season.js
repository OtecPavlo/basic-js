const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    const month = Date.prototype.getMonth.apply(date);
    if (month > 1 && month < 5) return 'spring';
    if (month > 4 && month < 8) return 'summer';
    if (month > 7 && month < 11) return 'fall';
    if (month === 11 || month < 2) return 'winter';
};
