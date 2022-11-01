// filter method
const scores = [10, 30, 15, 20, 25, 40, 45, 5];

const filteredScores = scores.filter((score) => {
  return score > 20;
});

console.log(filteredScores);

const users = [
  { name: "shuan", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);

const notPremiumUsers = users.filter((user) => !user.premium);

console.log(premiumUsers);

//////////////////////

// map method
const prices = [20, 30, 40, 15, 50, 80, 5, 10];

const salePrices = prices.map((price) => price / 2);

console.log(salePrices);

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
];

const saleProducts = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(saleProducts, products);

//////////////////////

// reduce method
// const scores --> const scores in filter method
// acc -> tich luy, curr -> gia tri hien tai
const resultS = scores.reduce((acc, curr) => {
  if (curr > 30) {
    acc++;
  }
  return acc;
}, 0);

console.log(resultS);

const playerScores = [
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
];

const marioTotal = playerScores.reduce((acc, curr) => {
  if (curr.player === "mario") {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(marioTotal);

//////////////////////

// find method
// const scores
console.log(scores);

const firstHighScore = scores.find((score) => score > 30);

console.log(firstHighScore);

//////////////////////
// sort method
const names = ["shuan", "mario", "chun-li", "yoshi", "luigi"];

names.sort();
names.reverse();
console.log(names);

// const scores
scores.sort((a, b) => b - a);
console.log(scores);

// const player
const playerScores2 = [
  { player: "mario", score: 20 },
  { player: "luigi", score: 10 },
  { player: "chun-li", score: 50 },
  { player: "yoshi", score: 50 },
  { player: "shuan", score: 70 },
];

// playerScores2.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (b.score > a.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

playerScores2.sort((a, b) => b.score - a.score);

console.log(playerScores2);

//////////////////////

// chaining array method
// const products = [
//   { name: "gold star", price: 20 },
//   { name: "mushroom", price: 40 },
//   { name: "green shells", price: 30 },
//   { name: "banana skin", price: 10 },
//   { name: "red shells", price: 50 },
// ];

// const filterdProducts = products.filter((product) => product.price > 20);

// const promos = filterdProducts.map((product) => {
//   return `the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);
