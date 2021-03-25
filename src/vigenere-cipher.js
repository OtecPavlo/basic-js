const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type
  }
  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let x = 0;
    while (message.length > key.length) {
      key += key[x % key.length]
      x += 1;
    }
    let result = '';
    for (let i = 0, j = 0; i < message.length; i += 1) {
      if (/[A-Z]/.test(message[i])) {
        result += String.fromCharCode(((message.charCodeAt(i) + key.charCodeAt(j) - 130) % 26) + 65)
        j += 1;
      }
      else {
        result += message[i];
      }
    }
    if (this.type != false) {
      return result
    }
    return result.split('').reverse().join('');
  }    
  decrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let x = 0;
    while (message.length > key.length) {
      key += key[x % key.length]
      x += 1;
    }
    let result = '';
    for (let i = 0, j = 0; i < message.length; i += 1) {
      if (/[A-Z]/.test(message[i])) {
        result += String.fromCharCode(((26 + (message.charCodeAt(i) - 65) - (key.charCodeAt(j) - 65)) % 26) + 65)
        j += 1;
      }
      else {
        result += message[i];
      }
    }
    if (this.type != false) {
      return result
    }
    return result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
