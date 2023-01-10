class Dog {
  constructor(dogDetail) {
    this.name = dogDetail.name;
    this.age = dogDetail.age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
  }
  eat() {
    if (this.hungry) {
      this.hungry = false;
      return 'Yum!';
    } else {
      return 'I refuse to eat.';
    }
  }
  fetchBall() {
    if (this.energyLevel <= 3) {
      return 'Nah, I\'m going to sleep instead.';
    } else {
      this.energyLevel --;
      return 'This is fun!';
    }
  }
  sleep() {
    if (this.energyLevel < 10 ) {
      this.energyLevel ++;
    }
    return 'I have too much energy to rest. I\'m going to chew something instead.'
  }
  makeNewFriend(newDogFriend) {
    this.friends.push(newDogFriend.name)
  }

}

module.exports = Dog;
