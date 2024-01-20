// String is denoted by single quote and double quote.
const userName = "tanha";

// concat
const repoCount = 10;
// ?console.log('Hello my name is '+name +' and my repo count is '+ repoCount); 
// using backticks: increase readability.
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare string
// todo: why everything in javascript is an object??
// todo: how js implicitly turns string into object?
// info: primitive values like strings, numbers, booleans do not have methods or properties themselves. JavaScript automatically promotes the primitive to an object of its wrapper typ(String, Number, Boolean), allowing to use methods and properties. This process is known as auto-boxing.
const name = 'Nusrat';
const gameName = new String('Hello World');
// console.log(typeof userName); // string
// console.log(typeof gameName); // object
// console.log(gameName[0]);
// console.log(name.length);
// info: JavaScript internally converts this string variable to a String object temporarily to access the methods.
// console.log(gameName.__proto__); //? not recommended
// console.log(Object.getPrototypeOf(gameName));



