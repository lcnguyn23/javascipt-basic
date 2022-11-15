// const now = new Date();

// // console.log(dateFns.isToday(now));

// // formatting options
// console.log(dateFns.format(now, "YYYY"));
// console.log(dateFns.format(now, "MMM"));
// console.log(dateFns.format(now, "dddd"));
// console.log(dateFns.format(now, "Do"));
// console.log(dateFns.format(now, "dddd Do MMM YYYY"));

// // comparing dates
// const before = new Date("February 1 2022 12:00:00");

// console.log(dateFns.distanceInWords(now, before, { adDSuffix: true }));

// async
// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log("callback function fired");
// }, 2000);

// console.log(3);
// console.log(4);

// http request
// const getTodos = (resource, callback) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       // console.log(request, request.readyState);
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error getting resource");
//       }
//     });
//     // https://jsonplaceholder.typicode.com/todos/
//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("todos/luigi.json")
//   .then((data) => {
//     console.log("promise 1 resolved:", data);
//     return getTodos("todos/mario.json");
//   })
//   .then((data) => {
//     console.log("promise 2 resolved: ", data);
//     return getTodos("todos/shuan.json");
//   })
//   .then((data) => {
//     console.log("promise 3 resolved: ", data);
//   })
//   .catch((err) => {
//     console.log("promise rejected: ", err);
//   });

// getTodos("todos/luigi.json", (err, data) => {
//   console.log(data);
//   getTodos("todos/mario.json", (err, data) => {
//     console.log(data);
//     getTodos("todos/shuan.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// promise example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve("some data");
//     // reject("some error");
//   });
// };

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch api

// fetch("todos/luigi.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

// async & await
const getTodos = async () => {
  const response = await fetch("todos/luigi.json");
  if (response.status !== 200) {
    throw new Error("catch fetch the data");
  }
  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log("rejected:", err));
