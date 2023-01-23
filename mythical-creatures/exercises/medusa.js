var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(medusaInfo) {
        this.name = medusaInfo;
        this.statues = [];
    
    }
    gazeAtVictim(victim) {
        var newStatue = new Statue (victim.name)
        if (this.statues.length <= 2) {
            this.statues.push(newStatue)
        } else if (this.statues.length >= 3) {
            var releasedVictim = new Person(this.statues[0].name)
            this.statues.shift()
            this.statues.push(newStatue)
            releasedVictim.mood = 'relieved'
            return releasedVictim
        }
        
    }
} 








module.exports = Medusa
