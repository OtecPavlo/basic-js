const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(CURRENT_ACTIVITY) {
  if (typeof CURRENT_ACTIVITY != 'string') return false;
  if (CURRENT_ACTIVITY > 0 && CURRENT_ACTIVITY < 15) {
    const k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / CURRENT_ACTIVITY) / k);
  }
    return false;
};
