"strict mode";

const newExercise = (n) => {
  console.log(`<--------- Exercise ${n} --------->`);
};
/*1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
newExercise(1);

const calcSum = (a, b) => {
  if (a == b) {
    return a * 3;
  } else {
    return a + b;
  }
};

console.log(calcSum(2, 3));
console.log(calcSum(3, 3));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
newExercise(2);

const isFifty = (n1, n2) => {
  if (n1 === 50 || n2 === 50 || n1 + n2 === 50) {
    return true;
  } else {
    return false;
  }
};

console.log(isFifty(50, 2));
console.log(isFifty(20, 30));
console.log(isFifty(5, 2));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
newExercise(3);
const removeCharacter = (string1, num) => {
  return string1.slice(0, num) + string1.slice(num + 1);
};

console.log(removeCharacter("Hello", 0));

/*

4)
 Create a function to find the largest of three given integers.
*/
newExercise(4);

const findLargest = (n1, n2, n3) => {
  if (n1 >= n2 && n1 >= n3) {
    return n1;
  } else if (n2 >= n1 && n2 >= n3) {
    return n2;
  } else if (n3 >= n1 && n3 >= n2) {
    return n3;
  }
};

console.log(findLargest(5, 10, 11));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

newExercise(5);

const checkRange = (num) => {
  if (num >= 40 && num <= 60) {
    return `In 40-60 range`;
  } else if (num >= 70 && num <= 100) {
    return `In 70-100 range`;
  } else return `Not in either range`;
};

console.log(checkRange(50));
console.log(checkRange(80));
console.log(checkRange(101));

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

newExercise(6);

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

newExercise(7);

const checkCityName = (string) => {
  let firstPart = string.slice(0, 3);
  if (firstPart == "New" || firstPart == "Los") {
    return string;
  } else return `blank`;
};

console.log(checkCityName("New York"));
console.log(checkCityName("New Amsterdam"));
console.log(checkCityName("Los Angelos"));
console.log(checkCityName("Glasgow"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

newExercise(8);

const sumThree = (array) => {
  if (array.length == 3) {
    let finalSum = 0;
    for (i = 0; i < array.length; i++) {
      finalSum += array[i];
    }
    return finalSum;
  } else return `Not an array of length 3!`;
};

console.log(sumThree([2, 3, 4, 5, 6]));
console.log(sumThree([2, 3, 5]));
console.log(sumThree([2, 3, 4]));

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

newExercise(9);

const checkForOneOrThree = (array) => {
  if (array.length == 2) {
    if (array.includes(1) || array.includes(3)) {
      console.log(`Contains 1 or 3`);
      return true;
    } else return false;
  } else return `Not an array of length 2!`;
};

console.log(checkForOneOrThree([5, 2, 3]));

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

newExercise(10);

const checkForNoOneOrThree = (array) => {
  if (array.length == 2) {
    if (!array.includes(1) && !array.includes(3)) {
      console.log(`Does not contain 1 or 3`);
      return true;
    } else return false;
  } else return `Not an array of length 2!`;
};

console.log(checkForNoOneOrThree([2, 4]));

/*
11)

Create a function to find the longest string from a given array of strings.
*/

newExercise(11);

const findLongestString = (array) => {
  let longestString = array[1];
  for (string of array) {
    if (string.length > longestString.length) {
      longestString = string;
    }
  }
  return longestString;
};

console.log(
  findLongestString(["abc", "abcdefg", "abcdef", "abcde", "abcd", "abc"])
);

/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

newExercise(12);

const findAngleType = (angle) => {
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle == 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle == 180) {
    return "Straight angle";
  }
};

console.log(findAngleType(45));
console.log(findAngleType(90));
console.log(findAngleType(95));
console.log(findAngleType(180));

/*
13)

Create a function to find the index of the greatest element of a given array of integers
*/
newExercise(13);

const findIndexOfGreatestElement = (array) => {
  let greatestElementIndex = 0;
  let greatestElement = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > greatestElement) {
      greatestElementIndex = i;
      greatestElement = array[i];
    }
  }
  return greatestElementIndex;
};

console.log(findIndexOfGreatestElement([1, 2, 3, 5, 4]));

/*
14)

Create a function to get the largest even number from an array of integers.
*/
newExercise(14);

const getLargestEvenNumber = (array) => {
  let largestEvenNumber = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] > largestEvenNumber) {
      largestEvenNumber = array[i];
    }
    // return largestEvenNumber;
  }
  return largestEvenNumber;
};

console.log(getLargestEvenNumber([100, 101, 108, 100, 106]));

/*
16)

Create a function to check from two given integers, whether one is positive and another one is negative.
*/
newExercise(16);

const isPositiveIsNegative = (a, b) => {
  let answer1 = "";
  let answer2 = "";
  if (a > 0) {
    answer1 = true;
  } else {
    answer1 = false;
  }
  if (b < 0) {
    answer2 = true;
  } else {
    answer2 = false;
  }
  return `${answer1} ${answer2}`;
};

console.log(isPositiveIsNegative(2, -2));

console.log(isPositiveIsNegative(2, 2));

console.log(isPositiveIsNegative(0, 0));

/*
17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/

newExercise(17);

const changeCase = (string) => {
  //   let newString = "";
  if (string.length > 3) {
    return string.slice(0, 3).toLowerCase() + string.slice(3).toUpperCase();
  } else return string.toUpperCase();
};

console.log(changeCase("abcdefght"));
console.log(changeCase("abcdefght"));
console.log(changeCase("ab"));
console.log(changeCase("abc"));
console.log(changeCase("abcd"));
console.log(changeCase("abcde"));

/*

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

*/
const checkRangeOfSum = (a, b) => {
  let sum = calcSum(a, b);
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else return 80;
};

console.log(checkRangeOfSum(40, 12));
console.log(checkRangeOfSum(40, 42));

/*
19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.

*/

newExercise(19);

const convertNumberToString = (num) => {
  let output = "";
  if (num % 3 === 0) {
    output += "Diego";
  }
  if (num % 5 === 0) {
    output += "Riccardo";
  }
  if (num % 7 === 0) {
    output += "Stefano";
  }
  if (num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
    output = num;
  }
  return output;
};

console.log(convertNumberToString(28));
console.log(convertNumberToString(30));
console.log(convertNumberToString(34));

/*
20)

Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC*/

newExercise(20);

const returnsAcronym = (phrase) => {
  let stringArray = phrase.split(" ");
  let acronym = "";
  for (string of stringArray) {
    acronym += string.slice(0, 1);
  }
  return acronym.toUpperCase();
};

console.log(returnsAcronym("British Broadcasting Dorporation"));
