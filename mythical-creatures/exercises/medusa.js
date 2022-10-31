var Person = require('./person');
var Statue = require('./statue');
class Medusa {
    constructor(name){
        this.name = name
        this.statues = []
    }
    gazeAtVictim(victim){
        if(this.statues.length <3){
        var newStatue = new Statue(victim.name)
        this.statues.push(newStatue)
        } else {
            newStatue = new Statue(victim.name)
            var alive = this.statues.shift()
            var revive = new Person(alive.name)
            this.statues.push(newStatue)
            revive.mood = "relieved"
            return revive

        }
    }
    
}
module.exports = Medusa