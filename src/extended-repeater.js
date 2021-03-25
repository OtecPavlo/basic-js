const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const defaultOptions = {
    repeatTimes: 0,
    separator: '+',
    addition: '',
    additionRepeatTimes: 0,
    additionSeparator: '|'
  }
  for (const [key, value] of Object.entries(options)) {
    defaultOptions[key] = String(value);
  }
  const arrStr = Array(options.repeatTimes).fill(String(str));
  const strAddition = Array(options.additionRepeatTimes).fill(defaultOptions.addition).join(`${defaultOptions.additionSeparator}`);
  return arrStr.join(`${strAddition}${defaultOptions.separator}`) + strAddition;
};
