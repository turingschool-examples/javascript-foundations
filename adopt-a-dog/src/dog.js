class Dog {
  constructor(obj) {
    this.name = obj.name
    this.age = obj.age
    this.energyLevel = 5
    this.hungry = true
    this.friends = []
  }
  eat(){
    if(this.hungry === true){
      this.hungry = false
      return 'Yum!'
    }else {
      return 'I refuse to eat.'
    }
  }
  fetchBall(){
  if(this.energyLevel > 3){
    this.energyLevel -= 1
    return 'This is fun!'
  }
    return `Nah, I\'m going to sleep instead.`
  
  }
  sleep(){
    if(this.energyLevel >= 10){
      return 'I have too much energy to rest. I\'m going to chew something instead.'
    }else{
         return this.energyLevel +=1
  }
}
makeNewFriend(fri){
  this.friends.push(fri.name)
  return console.log(this.friends[0])
}
}
module.exports = Dog;
