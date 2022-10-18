
class  Dragon {
    constructor (name,rider){
    this.name= name
    this.rider=rider
    this.eatting = 0
    this.hungry = true
    }

    greet(){
      return  `Hi, ${this.rider}!`
    }
    
    eat(){
        this.eatting = this.eatting + 1

        if(this.eatting >= 3){
            this.hungry = false
       } else{
            this.hungry = true
       }
        return this.eatting
    }
    check(){
        if(this.eatting >= 3){
             this.hungry = false
        } else{
             this.hungry = true
        }
        return this.hungry
    }
    
}

var dragon = new Dragon('Lady Vox');
dragon.eat();
dragon.eat();
dragon.eat();
console.log('should be 3', dragon.eatting)
console.log(dragon.check())

module.exports = 
    Dragon
 
