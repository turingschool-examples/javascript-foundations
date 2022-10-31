const Victim = require("./victim")

class Werewolf{
    constructor(name){
        this.name = name
        this.form = 'human'
        this.hungry = false
    }

    completeTransformation(){
        if(this.form === 'human'){
            this.form = 'wolf'
            this.hungry = true
            return 'Aaa-Woooo!'
        }else if(this.form === 'wolf'){
            this.form = 'human'
            this.hungry = false
            return 'Where are I?'
        }
    }
    eatVictim(vic){
        if(this.form === 'human'){
            return `No way am I eating ${vic.name}, I'd like a burger!`
        }else{
        vic.alive = false
        this.form = 'human'
       return `Yum, ${vic.name} was delicious.`
        }
    }
}


module.exports = Werewolf