const readline = require("readline-sync");

/**
 * @purpose: One string is an anagram of another if the second is simply arearrangement of the first.
 *           The Two Strings are Anagram or not..
 */
exports.anagram = () => {
  function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    var sortStr1 = str1
      .split("")
      .sort()
      .join("");
    var sortStr2 = str2
      .split("")
      .sort()
      .join("");

    return sortStr1 === sortStr2;
  }
  console.log(isAnagram("earth", "haert"));
  console.log(isAnagram("dog", "god"));
  console.log(isAnagram("foo", "bar"));
};
/**
 * @purpose:Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
 */
exports.rangePrime = () => {
  function isPrime(n) {
    if (n == 0 || n == 1) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
  let k = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 100; j++) {
      if (isPrime(k)) {
        console.log("" + k);
        k++;
      } else {
        k++;
      }
    }
    console.log(" ");
  }
};
/**
 * @purpose:Reads in integers prints them in sorted order using Bubble Sort.
 */
exports.bubbleSort = () => {
  let temp;
  let arr = [8, 3, 5, 9, 11, 2, 17, 25];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + "");
  }
};
/**
 * @purpose:Reads in strings from standard input and prints them in sorted order.
 *          Uses insertion sort.
 */
exports.insertionSort = () => {
  let temp;
  let arr = ["vivek", "akash", "dilip", "abhishek", "shankar"];
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    j = i - 1;
    while (j >= 0 && temp <= arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + "");
  }
};
/**
 * @purpose:​ Write a program with Static Functions to do Merge Sort of list of Strings.
 */
exports.mergeSort = () => {
  function merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return arr.concat(left.slice().concat(right.slice()));
  }
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }
  const array = [9, 2, 7, 6, 11, 3, 1, 10, 13, 8];
  console.log(mergeSort(array));
};
/**
 * @purpose:  Read in a list of words from File. Then prompt the user to enter a word to
 *            search the list. The program reports if the search word is found in the list.
 */
exports.binarySearch = () => {
  function search(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] == x) {
        return mid;
      } else if (arr[mid] > x) {
        return mid - 1;
      } else if (arr[mid] < x) {
        return mid + 1;
      } else {
        return -1;
      }
    }
  }
  let array = ["abhishek", "dilip", "golu", "knee", "mobile"];
  let x = "golu";
  let result = search(array, x);
  if (result == -1) {
    console.log("Element not found");
  } else {
    console.log("Element found at index:" + result);
  }
};
/**
 * @purpose:To the Util Class add ​ dayOfWeek static function that takes a date as input and prints the 
 * day of the week that date falls on. Your program should take three command-line arguments: 
 * m (month), d (day), and y (year). For m use 1 for January, 2 for February, and so forth. 
 * For output print 0 for Sunday, 1 for Monday, 2 for Tuesday, and so forth
 */
exports.dayOfWeek = () => {
  let m = readline.question("Enter the month");
  let d = readline.question("Enter the date");
  let y = readline.question("Enter the year");

  let y0 = y - (14 - m) / 12;
  let x = y0 + y0 / 4 - y0 / 100 + y0 / 400;
  let m0 = m + 12 * ((14 - m) / 12) - 2;
  let d0 = (d + x + (31 * m0) / 12) % 7;
  console.log(d0);
};

/**
 * @purpose:To the Util Class add ​ temperaturConversion static function, given the temperature
 *          in fahrenheit as input outputs the temperature in Celsius or viceversa using the formula
 */
exports.temperature = () => {
  /**
   * Celsius to Fahrenheit
   */
  let Celsius = readline.question("Enter the celsius");
  let fahrenheit = (Celsius * 9) / 5 + 32;
  console.log(fahrenheit);
  /**
   * Fahrenheit to Celsius
   */
  let F = readline.question("Enter the farenheit");
  let C = ((F - 32) * 5) / 9;
  console.log(C);
};
/**
 * @purpose: Write a Util Static Function to calculate ​ monthlyPayment that reads in three
 *           command-line arguments P, Y, and R and calculates the monthly payments you would 
 *           have to make over Y years to pay off a P principal loan amount at R per cent
 *           interest compounded monthly.
 */
exports.monthlyPayment = () => {
  let P = readline.question("Enter the principal amount");
  let Y = readline.question("Enter the year");
  let R = readline.question("Enter the percent interest");

  let n = 12 * Y;
  let r = R / (12 * 100);

  let x = Math.floor(Math.pow(1 + r, -n));
  let payment = (P * r) / (1 - x);
  console.log(payment);
};
/**
 * @purpose:Write a static function ​ sqrt t ​ o compute the square root of a nonnegative number c
 *          given in the input using Newton's method:
 */
exports.sqrt = () => {
  let c = readline.question("Enter the number");
  let t = c;
  let epsilon = 1e-15;
  if (Math.abs(t - c / t) > epsilon * t) {
    t = c / t + t;
    console.log(t);
  }
};

/**
 * @purpose:Write a static function ​ toBinary that outputs the binary (base 2) representation of
 *          the decimal number typed as the input. It is based on decomposing the number into
 *          a sum of powers of 2. For example, the binary representation of 106 is 11010102,
 */
exports.toBinary = () => {
  let x = "";
  let n = readline.question("enter the numbers");
  while (n > 0) {
    x = (n % 2) + x;
    n = Math.floor(n / 2);
  }
  console.log("Binary number is:" + x);
};

/**
 * @purpose: convert to Binary using toBinaryfunction and perform the following functions.
 *         i. Swap nibbles and find the new number.
 */
exports.swapNibble = () => {
  //    function swapNibbles(x)
  let x = readline.question("enter the number");

  let nibble = ((x & 0x0f) << 4) | ((x & 0xf0) >> 4);

  console.log(nibble);
};
/**
 * @purpose:Number should be power of 2.
 *      ii. Find the resultant number is the number is a power of 2.
 */
exports.resultantNumber = () => {
  function isPowerOfTwo(x) {
    let powerOfTwo = 1;

    while (powerOfTwo < x && powerOfTwo < 2147483648) {
      powerOfTwo *= 2;
    }
    if (x == powerOfTwo) {
      return true
    }
    else {
      return false
    }
  }
  console.log(isPowerOfTwo(1024))
}



