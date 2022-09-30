let age = 25;
let year = 2022;

console.log(age, year);

age = 30;
console.log(age, year);

const points = 100;
// points = 50; // const(hang so) khong the ghi de len
console.log(points);

var score = 75;
console.log(score);

/* 
  number: 1, 2, 3, 100, 3.14, ....
  string: "abc", "mario@gmail.com", ...
  boolean: true, false
  null: no value
  undefined: not yet been defined
  object: data structures - array, dates, literals,...
  symbol: used with object
*/

// strings
console.log("hello, world");

let mail = "mario@gmail.com";
console.log(mail);

// string concatenation
let firstName = "Brandon";
let lastName = "Sanchez";

let fullName = firstName + " " + lastName;
console.log(fullName);

// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = mail.indexOf("@");
console.log(index);

// common string methods

let email = "mario@gmail.com";

// let result2 = email.indexOf("r");

// let result2 = email.slice(2, 9);

// let result2 = email.substring(3, 10);

let result2 = email.replace("m", "w");

console.log(result2);
