var Dog = require("./dog.js");

class Person {
  constructor(name,dog) {
    this.name = name
    this.dog = dog

  }
  fillFoodBowl(){
    this.dog.hungry = false
  }
  throwBall(){
    if(this.dog.energyLevel <=3){
    return
    }else{
      this.dog.energyLevel -= 1 
      return `${this.dog.name} loves playing fetch!`
    }
  }
  introduceNewFriends(fri){
    this.dog.friends.push(fri.name)
  }

  adoptAPup(name,age){
    // if (this.dog === undefined) {
      if(!this.dog){
    var newPup = new Dog({name:name,age:age})
    this.dog = newPup
    }else{
      return `You can\'t adopt Chloe. You already have ${this.dog.name}!`
    }

}
}
module.exports = Person;
