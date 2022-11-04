class Human{
    constructor(name){
        this.name = name
        this.encounterCounter = 0
    }

noticesOgre(){
    if(this.encounterCounter > 1){
        return false
        }else{
        return true
        }
    }
}
module.exports = Human