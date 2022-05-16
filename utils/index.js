// declare 4 variables using 4 ways allowed in JS containing values of 4 different data types in /utils/index.jslet x = 5;
var y = [1,2,3, 4];
const z = "constant";
 let  t = {
first: "Gevor",
second: "masnaget"
};
// declare 3 functions doing addition, subtraction and multiplication of 2 numbers using 3 ways allowed in JS in /utils/index.js

function add (x,y){
return x +y;
};
const subtract =function(x,y){
    return x-y;
};
const multiply=(x,y)=>x*y;

// declare an object { utils } with a method to divide 2 numbers in /utils/index.js

 export const utils={
divide(x,y){
    return x/y;
}
};

// add the 3 functions created outside of the { utils } object to the object without re-creating them

utils.multiply=multiply;

// add a method to the object utils called { range }that takes 2 numbers and creates an array containing all the numbers between those 2 in /utils/index.js

utils.range=(x,y)=>{
let arr =[];
if(x<y){
for(let i=x;i<=y;i++){
    arr.push(i);
}
return arr;
}
else if (x > y)
{
    for(let i = x -1; i>= y; i--) {
        arr.push(i);  
     }
    }
else{
    arr.push(x);

}
return arr;
};
// add a method { curry } to the object { utils } that takes a function taking multiple argumets and returns a function that can take the same amount of arguments one at a time in /utils/index.js
utils.curry=function(argumentsFunc){
    return function returnedFunc (...args){
        if ( args.length>=argumentFunc.length){
            return argumentFunc.apply (this,args);
        }
        return function(...newArgs){
            return returnedFunc.apply(this,[...args,...newArgs]);
        };
    };
};
const curriedAdd3=utils.curry(add3);

// export the object utils using both named and default export methods
export default utils;

// add 2 new methods { capitalize } and { uppercase } to the object { utils } that take a string and respectively capitalize and uppercase it in /utils/index.js
 utils.uppercase=(str)=>{return str.toUpperCase()};
utils.capitalize =(str)=>
 str  .split ("")
.map((char,i)=>(i===0 ?char.toUpperCase():char))
.join("");

