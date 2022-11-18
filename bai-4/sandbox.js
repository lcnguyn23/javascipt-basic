// // store data in local storage
// localStorage.setItem("name", "mario");
// localStorage.setItem("age", 50);

// // get data from local storage
// let names = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// console.log(names, age);

// // updating data
// localStorage.setItem("name", "luigi");
// localStorage.setItem("age", 40);

// // delete
// localStorage.clear();

// names = localStorage.getItem("name");
// age = localStorage.getItem("age");

// console.log(names, age);

const todos = [
  { text: "play mariokart", author: "shuan" },
  { text: "buy some bingchilling", author: "mario" },
  { text: "buy some bread", author: "luigi" },
];

// console.log(JSON.stringify(todos));
localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");

console.log(JSON.parse(stored));
