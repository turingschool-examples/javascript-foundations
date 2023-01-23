const Direwolf = require("./direwolf");

class Stark {
    constructor(obj) {
        this.name = obj.name
        this.location = obj.area || 'Winterfell'
        this.safe = false;
    }
    sayHouseWords() {
        if (this.safe) {
        return 'The North Remembers'
        } 
        return 'Winter is Coming'
        }
    callDirewolf(name, location) {
        var direwolf = new Direwolf(name, location)
        direwolf.home = this.location
        direwolf.protect(this)
        return direwolf
    }
    }



module.exports = Stark