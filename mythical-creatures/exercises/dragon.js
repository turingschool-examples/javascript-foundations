
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
        this.eatting += 1
        if(this.eatting >= 3){
            this.hungry = false
       }
        return this.eatting
    }
}

module.exports = 
    Dragon
 
