// rest parameter
const double = (num1, num2, num3) => {
  // do something
  console.log(num1, num2, num3);
};

const double2 = (...nums) => {
  console.log(nums);
  return nums.map((num) => num * 2);
};

const result = double(1, 2, 3);
console.log(result);

const result2 = double2(1, 2, 3, 5, 2, 3, 1, 22, 3, 3, 2, 1, 2);
console.log(result2);

// spread syntax (arrays)
const people = ["mario", "shuan", "ryu"];
const members = ["chun-li", "luigi", ...people];
console.log(members);

// spread syntax (objects)
const person = { name: "shuan", age: 30, job: "ninja" };
const personClone = { ...person, location: "hanoi" };
console.log(personClone);

// sets
const namesArray = ["shuan", "mario", "ryu", "chun-li", "ryu"];
console.log(namesArray);

// const namesSet = new Set(namesArray);
// console.log(namesSet);

const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(21);
ages.add(22).add(23).add(24);
ages.add(22);
ages.delete(22);

console.log(ages, ages.size);
console.log(ages.has(21), ages.has(22));

ages.clear();
console.log(ages);

const ninjas = new Set([
  { name: "shuan", age: 20 },
  { name: "mario", age: 21 },
  { name: "chun-li", age: 22 },
]);

ninjas.forEach((ninja) => console.log(ninja.name, ninja.age));

// symbol
console.log("//// Symbol() ////");

const symbol1 = Symbol("a generic name");
const symbol2 = Symbol("a generic name");

console.log(symbol1, typeof symbol1, symbol2, typeof symbol2);
console.log(symbol1 === symbol2);

const ninja = {};
