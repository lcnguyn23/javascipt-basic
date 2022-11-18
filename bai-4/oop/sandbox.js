// class
// class User {
//   constructor(username, email, score) {
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.username} logged in`);
//   }
//   logout() {
//     console.log(`${this.username} logged out`);
//   }
//   incScore() {
//     this.score += 1;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   constructor(username, email, title) {
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(user) {
//     users = users.filter((u) => u.username !== user.username);
//   }
// }

function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (user) {
  users = users.filter((u) => u.username !== user.username);
};

const userOne = new User("mario", "mario@email.com");
const userTwo = new Admin("luigi", "luigi@email.com", "black-belt karate");
const userThree = new User("shuan", "shuan@email.com");

console.log(userOne);
userOne.login();
userOne.logout();

//console.log(userTwo);

let users = [userOne, userTwo, userThree];

console.log(users);

userTwo.deleteUser(userThree);
console.log(users);
