module.exports = function toReadable(number) {
  const numStr = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
  };

  let numArr = [...String(number)];

  if (number <= 20 || (number % 10 === 0 && numArr.length === 2)) {
    return numStr[number];
  } else if (numArr.length === 2) {
    return `${numStr[numArr[0] * 10]} ${numStr[numArr[1]]}`;
  } else {
    if (number % 100 === 0) {
      return `${numStr[numArr[0]]} ${numStr[100]}`;
    } else if (numArr[1] == 0) {
      return `${numStr[numArr[0]]} ${numStr[100]} ${numStr[numArr[2]]}`;
    } else if (number % 10 === 0) {
      return `${numStr[numArr[0]]} ${numStr[100]} ${numStr[numArr[1] * 10]}`;
    } else if (numArr[1] == 1) {
      return `${numStr[numArr[0]]} ${numStr[100]} ${numStr[numArr[1] + numArr[2]]}`;
    } else {
      return `${numStr[numArr[0]]} ${numStr[100]} ${numStr[numArr[1] * 10]} ${numStr[numArr[2]]}`;
    }
  }
};
