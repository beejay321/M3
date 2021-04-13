/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sumOfInt = function (num1, num2) {
  if (num1 === num2) {
    console.log(3 * (num1 + num2));
  } else {
    console.log(num1 + num2);
  }
};
// sumOfInt(12, 76);
// sumOfInt(76, 76);

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const checkIf = function (givNum1, givNum2) {
  if (givNum1 === 50 || givNum2 === 50) {
    console.log(true);
  } else if (givNum1 + givNum2 === 50) {
    console.log(true);
  } else {
    console.log(false);
  }
};

// checkIf(12, 25);
// checkIf(12, 50);
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const remChar = function (givenString) {
  console.log(givenString.slice(0, 5) + givenString.slice(6));
};
// remChar("a given String");
/*

4)
 Create a function to find the largest of three given integers.
*/
const largestInt = function (first, second, third) {
  console.log(Math.max(first, second, third));
};
// largestInt(34, 67, 98);
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const checkRange = function (r1, r2) {
  if ((r1 >= 40 && r1 <= 60) || (r1 >= 70 && r1 <= 100)) {
    console.log(true);
  } else if ((r2 >= 40 && r2 <= 60) || (r2 >= 70 && r2 <= 100)) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// checkRange(100, 8);

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const createStr = function (givenStr, copy) {
  for (let i = 0; i < copy; i++) {
    console.log(givenStr.slice(1, 4));
  }
};
// createStr("given string", 5);

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const displayCity = function (city) {
  if (city.slice(0, 3) === "Los" || city.slice(0, 3) === "New") {
    console.log(city);
  }
};
//  displayCity("Los Angeles");
//  displayCity("New Jersey");
//  displayCity("Barcelona");

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
let givenArray = [23, 54, 70];
let sum = 0;
const sumOf3 = function () {
  for (let i = 0; i < givenArray.length; i++) {
    sum = sum + givenArray[i];
  }
  return sum;
};
// console.log(sumOf3());

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
let arrayOfInt = [3, 3, 3, 3, 505, 67, 27, 9, 5, 88, 53, 78, 10, 67];
const ifContains = function () {
  for (let i = 0; i < arrayOfInt.length; i++) {
    if (arrayOfInt[i] === 3 || arrayOfInt[i] === 1) {
      console.log(true);
    }
  }
};
// ifContains();

/* 10)  Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/

const ifNotContains = function () {
  for (let i = 0; i < arrayOfInt.length; i++) {
    if (arrayOfInt[i] !== 3 || arrayOfInt[i] !== 1) {
      console.log(true);
    }
  }
};
// ifNotContains();

/*11)

Create a function to find the longest string from a given array of strings.*/
let arrayOfStr = [
  "find",
  "the",
  "longest",
  "string",
  "in",
  "an",
  "array",
  "of",
  "strings",
];
let longest = 0;

const findLongest = function () {
  for (let i = 0; i < arrayOfStr.length; i++) {
    if (arrayOfStr[i].length > longest) longest = arrayOfStr[i];
  }
  return longest;
};
// findLongest();

/*12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/

const findTypAngle = function (angle) {
  if (angle > 0 && angle < 90) {
    result = "Acute angle";
  } else if (angle === 90) {
    result = "Right angle";
  } else if (angle > 90 && angle < 180) {
    result = "Obtuse angle";
  } else if (angle === 180) {
    result = "Straight angle";
  }
  return result;
};
// console.log(findTypAngle(67));

/*13)

Create a function to find the index of the greatest element of a given array of integers*/
// let arrayOfInt = [3, 3, 3, 3, 505, 67, 27, 9, 5, 88, 53, 78, 10, 67];
greatest = 0;
const findIndex = function () {
  for (let i = 0; i <= arrayOfInt.length; i++) {
    if (greatest < arrayOfInt[i]) {
      greatest = arrayOfInt[i];
    }
  }
};
findIndex();

/*14)

Create a function to get the largest even number from an array of integers.*/

// let arrayOfInt = [3, 3, 3, 3, 505, 67, 27, 9, 5, 88, 53, 78, 10, 67];
let largest = 0;
const largestEven = function () {
  for (let i = 0; i <= arrayOfInt.length; i++) {
    if (largest < arrayOfInt[i]) {
      largest = arrayOfInt[i];
      console.log(largest);
    }
  }
};
// largestEven();

/*15)

Create a function to check from two given integers, whether one is positive and another one is negative.*/
const posOrNeg = function (par1, par2) {
  if (par1 < 0 || par2 < 0) {
    result = "one is negative";
  } else if (par1 > 0 || par2 > 0) {
    result = "one is positive";
  }
};

/*16)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. 
If the string length is less than 3 convert all the characters in upper case. 
*/
const strUppCase = function (newStr) {
  if (newStr.slice(0,2))
};
/*17)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/

const sumOf2 = function (int1, int2) {
  let summ = int1 + int2;
  if (summ > 50 && summ < 80) {
    result = 65;
  } else {
    result = 80;
  }
  return result;
};
// console.log(sumOf2(67, 5));
/*18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".*/

const convertToStr = function (numstr) {
  if (numstr % 3 === 0) {
    result = "Diego";
  } else if (numstr % 5 === 0) {
    result = "Riccardo";
  } else if (numstr % 7 === 0) {
    result = "Stefano";
  } else {
    result = numstr;
  }
  return result;
};
// console.log(convertToStr(84));
/*19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/

const retAcronym = function (phrase) {
  let acronym = [];
  let splitstr = phrase.split(" ");
  for (let i = 0; i < splitstr.length; i++) {
    splitstr[0] + splitstr[1] + splitstr[2];
  }
};
// acronym("British Broadcasting Corporation");

//
