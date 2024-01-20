/** build in methods of string */
const gameName = 'Hello World';
// topic: length
console.log(gameName.length);

// topic: toUpperCase
console.log(gameName.toUpperCase());

// topic: toLowerCase
console.log(gameName.toLowerCase());

// topic: charAt
console.log(gameName.charAt(-1));

// topic: indexOf
console.log(gameName.indexOf('d'));

// topic: substring
const newGameName = gameName.substring(0, 4);
console.log(newGameName);

//topic: slice
// todo: substring vs slice
const anotherGameName = gameName.slice(-8,-4);
console.log(anotherGameName);

// topic: trim
const myName = '      Nusrat Tanha';
console.log(myName.trim());

// topic: replace
const url = 'https://nusrat.com/nusrat%20tanha';
console.log(url.replace('%20', '-'));

// topic: includes
const message = 'hello world';
console.log(message.includes('Hello'));

// topic: split
console.log(message.split(' '));