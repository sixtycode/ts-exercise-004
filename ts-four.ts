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
// function trianglePattern(_inputHeight: number) {
//   const _height: number = 5;
//   let _counter: number = 0;
//   if (_height <= 0) {
//     console.log("invalid height");
//   } else {
//     let _arrHeight: string[] = [];

//     _counter = 0;
//     while (_counter < _arrHeight.length) {
//       console.log(_arrHeight[_counter]);
//       _counter++;
//     }
//   }
//   return _
// }

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
function findMax(_array: number[]): number {
  let _counter: number = 0;
  if (_array[0] !== undefined) {
    let _maximumValue: number = _array[0];
    _counter = 0;
    while (_counter < _array.length) {
      if (_array[_counter] > _maximumValue) {
        _maximumValue = _array[_counter];
      }
      _counter++;
    }
    return _maximumValue;
  } else {
    return -1;
  }
}

let _arrayInput: number[] = [];
_arrayInput.push(10, 55, 79, 32);

if (findMax(_arrayInput) == -1) {
  console.log("invalid");
} else {
  console.log(`Initial Array Value: [${_arrayInput}]`);
  console.log(`Maximum Value in Array: ${findMax(_arrayInput)}`);
}

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
const _weightbmi: number = 105;
const _heightbmi: number = 173;

/*
Exercise 4
● Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/
function removeOddNumbers(_arrayOdd: number[]) {
  let _temp: number[] = _arrayOdd;
  let _final: number[] = [];
  let _arrCounter: number = 0;
  while (_arrCounter < _temp.length) {
    if (_temp[_arrCounter] % 2 != 0) {
      _temp[_arrCounter] = 0;
    }
    _arrCounter++;
  }

  _arrCounter = 0;
  while (_arrCounter < _temp.length) {
    if (_temp[_arrCounter] != 0) {
      _final.push(_temp[_arrCounter]);
    }
    _arrCounter++;
  }
  return _final;
}

const _total: number = 10;
if (_total == 0) {
  let _zeroTotal: number[] = [];
  _zeroTotal.push(_total);
  console.log(`Initial Array Value: [${_zeroTotal}]`);
  console.log(`Even Numbers Only: [${_zeroTotal}]`);
} else if (_total < 0) {
  console.log("invalid length");
} else {
  let _arrNum: number[] = [];
  let _counterArray = 0;
  while (_counterArray < _total) {
    _arrNum.push(_counterArray + 1);
    _counterArray++;
  }
  console.log(`Initial Array Value: [${_arrNum}]`);
  console.log(`Even Numbers Only: [${removeOddNumbers(_arrNum)}]`);
}

/*
Exercise 5

● Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”]
*/
function splitString(_inputWord: string) {
  let _splitString: string[] = _inputWord.split(" ");
  return _splitString;
}

const _string: string = "Hello World";
console.log(splitString(_string));
