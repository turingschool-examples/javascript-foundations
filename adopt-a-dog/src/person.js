var Dog = require("./dog.js");

class Person {
  constructor(name, dogInstance) {
    this.name = name;
    this.dog = dogInstance
    // this.dog is an instance of dog
  }
  fillFoodBowl() {
    this.dog.eat();
  }
  throwBall() {
    this.dog.fetchBall();
    return `${this.dog.name} loves playing fetch!`
  }
  introduceNewFriends(friendObj) {
    this.dog.makeNewFriend(friendObj);
  }
  adoptAPup(name, age) {
    if (!this.dog) {
      this.dog = new Dog({name: name, age: age})

    } else {
      return `You can\'t adopt ${name}. You already have ${this.dog.name}!`
  }
}
}

module.exports = Person;
