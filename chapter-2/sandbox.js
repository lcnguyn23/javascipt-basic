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

// for loop

// for (let i = 0; i < 5; i++) {
//   console.log("in loop:", i);
// }
// console.log("loop finished");

const names2 = ["shaun", "mario", "luuighe"];
// for (let i = 0; i < names2.length; i++) {
//   // console.log(names2[i]);
//   let html = `<div>${names2[i]}</div>`;
//   console.log(html);
// }

// while loop
//let i = 0;
// while (i < 5) {
//   console.log("in loop: ", i);
//   i++;
// }
// while (i < names2.length) {
//   console.log(names2[i]);
//   i++;
// }

// do .. while loop
// let i = 1;
// do {
//   console.log("in loop: ", i);
//   i++;
// } while (i < 5);

// if statement
// const age3 = 20;

// if (age3 >= 20) {
//   console.log("your are 20 yrd");
// }

// const ninjas2 = ["shaun", "ryu", "chun-li", "yoshi"];

// if (ninjas2.length > 3) {
//   console.log("that's a lot of ninjas");
// }

// const password = "pass2222";

// if (password.length >= 8) {
//   console.log("that password is long enough");
// }

console.log("------------------------");
// else if statement
// const password = "s@23";

// if (password.length >= 12 && password.includes("@")) {
//   console.log("that password is might strong");
// } else if (
//   password.length >= 8 ||
//   (password.includes("@") && password.length >= 5)
// ) {
//   console.log("that password is long enough");
// } else {
//   console.log("that password is not long enough");
// }

// logical NOT (!)
// let user = false;

// if (!user) {
//   console.log("u are in");
// }

// console.log(!true);
// console.log(!false);

// break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10];
// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue; // bo qua
//   }
//   console.log("your score is: ", scores[i]);
//   if (scores[i] === 100) {
//     console.log("congratsm u got top score");
//     break; // dung lai tai day
//   }
// }

// switch statement
const grade = "D";

switch (grade) {
  case "A":
    console.log(`Your grade is: ${grade}`);
    break;
  case "B":
    console.log(`Your grade is: ${grade}`);
    break;
  case "C":
    console.log(`Your grade is: ${grade}`);
    break;
  case "D":
    console.log(`Your grade is: ${grade}`);
    break;
  case "E":
    console.log(`Your grade is: ${grade}`);
    break;
  default:
    console.log(`Not a valid grade`);
}

// variables & block scope
const age4 = 35;
if (true) {
  const age4 = 40;
  let name = "shuan";
  console.log("inside 1st code block: ", age4, name);

  if (true) {
    let age4 = 50;
    let name = "ren";
    console.log("inside 2nd code block: ", age4, name);
  }
}
console.log("outside code block: ", age4);

////////////////////////////////////////////
// function declaration
function greet() {
  console.log("Hello there!");
}

// function expression
const speak = function (name = "ken", time = "evenning") {
  console.log(`good ${time}, ${name}`);
};

greet();
greet();
greet();

speak("shuan");
speak();

// returning value in function
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// arrow function

// const calcArea = (radius, something) => {
//   return 3.14 * radius ** 2;
// };

const calcArea = (radius) => 3.14 * radius ** 2;

console.log(calcArea(4));

// practise arrow function
const greet2 = function () {
  return "hello world";
};

const greet3 = () => "hello world";
const res = greet3();
console.log(res);

const bill = function (product, tax) {
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    total += product[i] + product[i] * tax;
  }
  return total;
};

const bill2 = (product, tax) => {
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    total += product[i] + product[i] * tax;
  }
  return total;
};

console.log(bill2([10, 15, 20], 0.2));

//////
const name2 = "shaun";
// functions
const greet4 = () => "hello";
let resultOne = greet4();
console.log(resultOne);

// methods

let resultTwo = name2.toUpperCase();
console.log(resultTwo);

/////////
// callbacks & foreach
const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};

// myFunc(function (value) {
//   console.log(value);
// });

myFunc((value) => {
  console.log(value);
});

const people = ["mario", "luigi", "ryu", "shuan", "chun-li"];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

// people.forEach(function (person) {
//   console.log(person);
// });

// people.forEach((person, index) => {
//   console.log(index, person);
// });

people.forEach(logPerson);

/////
// get a reference to the 'ul'
const ul = document.querySelector(".people");

let html = ``;

people.forEach((person) => {
  // create html template
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;

///////////////////
// object literals
// const blogs = [
//   { title: "why mac $ cheese rules", likes: 30 },
//   { title: "10 things to make with marmite", likes: 50 },
// ];

// console.log(blogs);

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@thehudoj.co.uk",
  location: "berlin",
  blogs: [
    { title: "why mac $ cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 50 },
  ],
  login() {
    console.log("the user logged in");
  },
  logout() {
    console.log("the user logged out");
  },
  logBlogs() {
    //console.log(this.blogs);
    console.log("this user has written the following blog:");
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

// console.log(user);
// console.log(user.name);

// //user.age = 35;
// console.log(user.age);
// //console.log(user);
// console.log(user["location"]);
// user["name"] = "chun-li";
// console.log(user["name"]);
// console.log(typeof user);

// user.login();
// user.logout();
// const pName = "mario";
// pName.toUpperCase();

// user.logBlogs();

////////
// Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 5.3;
console.log(Math.round(area)); // 7.7 -> 8, 7.1 -> 7, 5.3 -> 5
console.log(Math.floor(area)); // 7.7 -> 7, 7.1 -> 7, 5.3 -> 5
console.log(Math.ceil(area)); // 7.7 -> 8, 7.1 -> 8, 5.3 -> 6
console.log(Math.trunc(area)); // 5.3 -> 5

// random numbers
const random1 = Math.random();
console.log(Math.round(random1 * 100));
