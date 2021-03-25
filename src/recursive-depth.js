const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    arr.forEach(el => {                                
      let result = 1;
      if (Array.isArray(el)) {
        result += this.calculateDepth(el);
      }
      if (result > depth) {
        depth = result;
      }
    });
    return depth;
  }
};

