// import the { utils } object using the default import and the { range } and { curry } methods using named import on the same line in /index.js
import utils from "./index.js";
const {curry,range}=utils;
// partially apply number 2 to the basic math methods of the object utils using the { curry } method of the same object and save them in 4 new variables in /index.js

const add_two = (num)=>{return num + 2}
const mul_two=(num)=>{return num * 2}
const sub_two=(num)=>{return num - 2}
const div_two=(num)=>{return num / 2}
  console.log(curry(CurriedGcd)()(12))
  console.log(curry(add_two)(5))
  // create an array of numbers 1 to  10 using the { range } method of the object { utils } in /index.js
  let range10=range(1,10);
  range10;
// apply the 4 partially applied functions to the newly created array and save the results to 4 new variables in /index.js
arr1  = arr.map(add_two)
arr2 = arr.map(mul_two)
arr3 = arr.map(sub_two)
arr4 = arr.map(div_two)
// log to the console the results of those 4 variables in index.js
console.log(arr1)
 console.log(arr2)
 console.log(arr3)
 console.log(arr4)
 