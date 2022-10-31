const Direwolf = require("./direwolf")

class Stark{
    constructor(obj){
        this.name = obj.name
        this.location = obj.area || 'Winterfell'
        this.safe = false
        
    }
    sayHouseWords(){
    if (this.safe === false){
       return 'Winter is Coming'
    }else{
        return 'The North Remembers'
    }
    }
   callDirewolf(wolfName){
    var callWolf = new Direwolf(wolfName,this.location)
    callWolf.protect(this)
    return callWolf
   }
}
module.exports = Stark