var Skier = require('./Skier');

class Lift {
    constructor(limit,service){
        this.inService = service || true
        this.limit = limit
        this.skiers = []
        this.safetyBar = 'up'
    }
    admitSkier(name){
        name = new Skier(name)
        this.skiers.push(name)
    }
  
}

module.exports = Lift;