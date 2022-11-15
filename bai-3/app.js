// dates & times
// const now = new Date();

// console.log(now);
// console.log(typeof now);

// year, month, day, time
// console.log("getFullYear: ", now.getFullYear());
// console.log("getMonth: ", now.getMonth());
// console.log("getDate: ", now.getDate());
// console.log("getDay: ", now.getDay());
// console.log("getHours: ", now.getHours());
// console.log("getMinutes: ", now.getMinutes());
// console.log("getSeconds: ", now.getSeconds());

// timestamps
// console.log("timestamp: ", now.getTime());

// date strings
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// timestamps

const before = new Date("February 1 2022 7:30:59");
const now = new Date();

// console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 60);

console.log(mins, hours, days);
console.log(`the blog was written ${days} ago`);

// converting timestamps into date objects
const timestamp = 1678389192982;
console.log(new Date(timestamp));
