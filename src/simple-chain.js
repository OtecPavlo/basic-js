const CustomError = require("../extensions/custom-error");

const chainMaker = {
  'result': [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
     return this;
  },
  removeLink(position) {
    if (Number.isInteger(position)) {
      this.result.splice(position - 1, 1);
      return this;
    }
    this.result = [];
    throw new Error('Error')
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let finish = this.result.join('~~');
    this.result = [];
    return finish;
  }
};

module.exports = chainMaker;
