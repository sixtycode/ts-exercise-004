/* 
● Create a function that can create a triangle pattern according to the height we provide like the
following :

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

● Parameters : height → triangle height
● Example input: 5
*/
const _height: number = 1;
if (_height < 1) {
  console.log("invalid height");
} else {
  let _counter: number = 0;
  let _arrHeight: string[] = [];

  _counter = 0;
  while (_counter < _arrHeight.length) {
    console.log(_arrHeight[_counter]);
    _counter++;
  }
}

/* 
Exercise - Example Array Pseudocode

● Create a function that receiving
array as input, and this function can
find maximum value in array without
using built in method in javascript.
● Parameters : array
● Output: number

● Example input: [10, 55, 79, 32]
● Example output: 79
*/

/*
Exercise 1

● Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10

● Parameters : height → triangle height
*/

/*
Exercise 2

● Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
*/

/*
Exercise 3

● Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))2
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”
*/

/*
Exercise 4
● Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/

/*
Exercise 5

● Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”]
*/
const _string: string = "Hello World";
let _splitString: string[] = _string.split(" ");
console.log(_splitString);
