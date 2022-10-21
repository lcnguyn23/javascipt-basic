// const para = document.querySelector("body > h1");

// console.log(para);

//const paras = document.querySelectorAll("p");
//const errors = document.querySelectorAll(".error");
// paras.forEach((para) => {
//   console.log(para);
// });

//console.log(paras[1]);
//console.log(errors);

////////////
// get element by ID
// const title = document.getElementById("page-title");
// console.log(title);

// get elements by their class name
// const errors = document.getElementsByClassName("error");
// console.log(errors);
// console.log(errors[1]);
// errors.forEach((error) => {      // errors !array => (X)forEach
//   console.log(error);
// });

// get elements by their tag name
// const paras = document.getElementsByTagName("p");
// console.log(paras);
// console.log(paras[1]);

////////////
// const para = document.querySelector("p");
// console.log(para.innerText);
// para.innerText += "ninjas are awesome!";

// const paras = document.querySelectorAll("p");
// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += " new text";
// });

// const content = document.querySelector(".content");
// console.log(content.innerHTML);
// content.innerHTML = "<h2>THIS IS A NEW H2</h2>";

// const people = ["mario", "luigi", "yoshi"];
// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://www.w3schools.com");
// link.innerText = "w3schools website";

// const mssg = document.querySelector("p.error");
// console.log(mssg.getAttribute("class"));
// mssg.setAttribute("class", "success");
// mssg.setAttribute("style", "color: green;");

// const title = document.querySelector("h1");
// title.setAttribute("style", "margin: 50px");
// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = "50px";
// title.style.color = "crimson";
// title.style.fontSize = "60px";

// const content = document.querySelector("p");
// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");

// const paras = document.querySelectorAll("p");
// paras.forEach((p) => {
//   // console.log(p.textContent); // textContent , innerText
//   if (p.textContent.includes("error")) {
//     p.classList.add("error");
//   }
//   if (p.innerText.includes("success")) {
//     p.classList.add("success");
//   }
// });

// const title = document.querySelector(".title");
// title.classList.toggle("test");

// const article = document.querySelector("article");
// console.log(article.children);
// console.log(Array.from(article.children));

// Array.from(article.children).forEach((child) => {
//   child.classList.add("article-element");
// });

// const title = document.querySelector("h2");
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.previousElementSibling);

// // chaining
// console.log(title.nextElementSibling.parentElement.children);

//// EVENT BASICS ////

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("you clicked me");
// });

// const ul = document.querySelector("ul");
// ul.remove();

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "something new to do";
//  // ul.innerHTML += '<li>something new</li>'
//  // ul.append(li);
//   ul.prepend(li);
// });

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // console.log("item clicked");
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(item);
//     // e.target.style.textDecoration = "line-through";
//     console.log("event in LI");
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

// ul.addEventListener("click", (e) => {
//   // console.log("event in UL");
//   if (e.target.tagName === "LI") {
//     e.target.remove();
//   }
// });

const copy = document.querySelector(".copy-me");

copy.addEventListener("copy", () => {
  console.log("OI! my content is copyright");
});

const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos -${e.offsetX} y pos - ${e.offsetY}`;
});

// document.addEventListener("wheel", (e) => {
//   console.log(e.pageX, e.pageY);
// });

