function dec2Bin(decNumber) {
  var restStack = [],
    rest,
    binaryString = "";

  while (decNumber > 0) {
    rest = Math.floor(decNumber % 2);
    restStack.push(rest);
    decNumber = Math.floor(decNumber / 2);
  }
  while (restStack.length > 0) {
    binaryString += restStack.pop().toString();
  }
  return binaryString;
}

console.log(dec2Bin(10)); // 1010

function dec2hex(decNumber, base) {
  var restStack = [],
    rest,
    baseString = "",
    tableHexa = "0123456789ABCDEF";

  while (decNumber > 0) {
    rest = Math.floor(decNumber % base);
    restStack.push(rest);
    decNumber = Math.floor(decNumber / base);
  }

  while (restStack.length > 0) {
    baseString += tableHexa[restStack.pop()];
  }

  return baseString;
}

console.log(dec2hex(10, 16)); // A
