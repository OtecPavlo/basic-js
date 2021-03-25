const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Error");
  }
  const result = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === '--discard-next') {
      i += 1
      continue;
    }
    if (arr[i] === '--discard-prev') {
      if (arr[i-2] === '--discard-next'){
        continue;
      }
      result.pop()
      continue;
    }
    if (arr[i] === '--double-next') {
      if (arr[i + 1] === undefined) {
        continue;
      }
      result.push(arr[i + 1]);
      continue;
    }
    if (arr[i] === '--double-prev') {
      if (arr[i - 1] === undefined || arr[i - 2] === '--discard-next') {
        continue;
      }
     result.push(arr[i - 1])
     continue;
    }
    result.push(arr[i]);
  }
  return result;
}
