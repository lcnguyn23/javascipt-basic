// let age = 25;
// let year = 2022;

// console.log(age, year);

// age = 30;
// console.log(age, year);

// const points = 100;
// // points = 50; // const(hang so) khong the ghi de len
// console.log(points);

// var score = 75;
// console.log(score);

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

// let result2 = email.lastIndexOf("r");

// let result2 = email.slice(2, 9);

// let result2 = email.substring(3, 10);

let result2 = email.replace("m", "w");

console.log(result2);

// numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operatiors +, -, / , *, **, %
console.log(10 / 2);
// let result3 = radius % 3;
// let result3 = pi * radius ** 2;

// order of operation - B I D M A S

let result3 = 5 * (10 - 3) ** 2;

console.log(result3);

//let likes = 10;
//likes = likes + 1;
//likes++;
//++likes;
//likes += 10;
//likes *= 2;
//likes -= 5;
//likes /= 5;
//console.log(likes);

//console.log(5 / "hello");
//console.log(5 * "hello");

//let result4 = "the blog has " + likes + " likes";
//console.log(result4);

//////
const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;

// concatenation way
// let result5 =
//   "The blog called " + title + " by " + author + " has " + likes + " likes ";
// console.log(result5);

// template string way using  `` (!= "" != '')
// let result5 = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result5);

// // creating html templates
// let html = `
//   <h2>${title}</h2>
//   <p>By ${author}</p>
//   <span>This blog has ${likes} likes</span>
// `;
// console.log(html);

// array
let ninjas = ["shaun", "ryu", "chun-li"];
// ninjas[1] = "ken";
// console.log(ninjas[1]);

let ages = [20, 25, 30, 40, 50, 60];
//console.log(ages[3]);

let random = ["shuan", "crystal", 30, 40];
// console.log(random);

console.log(ninjas.length);

// array methods
// let result5 = ninjas.join(",");
// let result5 = ninjas.indexOf("chun-li");
// let result5 = ninjas.concat(["ken", "crystal"]);
let result5 = ninjas.push("ken");
result5 = ninjas.pop();
console.log(result5);
console.log(ninjas);

let age = null;

console.log(age, age + 3, `the age is ${age}`);
// undefined, NaN, "the age is undefined"
// not defined => undefined, undefined + number,... => NaN
// null, 3 , "the age is null"
// null, null + number,... => number,...

// boolean & comparisons
console.log(true, false, "true", "false");

// methods can return booleans
// let email2 = "luihud@dhdhdjdj.co.uk";

// let result6 = email2.includes("!");

// let names = ["marios", "ludge", "toad"];
// let result7 = names.includes("browsers");
// console.log(result7);

// comparison operatiors
// let age2 = 25;

// console.log(age2 == 25); // true
// console.log(age2 == 30); // false
// console.log(age2 != 30); // true
// console.log(age2 != 25); // false
// console.log(age2 > 20); // true
// console.log(age2 < 20); // false
// console.log(age2 <= 20); // false
// console.log(age2 >= 20); // true

// let name1 = "shaun";

// console.log(name1 == "shaun");
// console.log(name1 != "shaun");
// console.log(name1 > "shaun");
// console.log(name1 > "crystal");
// console.log(name1 <= "shaun");
// console.log(name1 >= "shaun");
// console.log(name1 < "crystal");

let age1 = 25;

// loose comparison (different types can still be equal)

console.log(age1 == 25);
console.log(age1 == "25");
console.log(age1 != 25);
console.log(age1 != "25");

// strict comparison (different types cannot be equal)

console.log(age1 === 25);
console.log(age1 === "25");
console.log(age1 !== 25);
console.log(age1 !== "25");

// type conversion
let score = "100";

// score = Number(score);

// console.log(score + 1);
// console.log(typeof score);

// let result8 = Number("hello"); // NaN
// let result8 = String(50); // String
// let result8 = Boolean(0); // boolean
// let result8 = Boolean('2'); // boolean
// console.log(result8, typeof result8);
