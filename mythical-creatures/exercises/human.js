const Ogre = require("./ogre");

class Human {
    constructor(name) {
        this.name = name
        this.encounterCounter = 0
        this.knockedOut = false;

    }
    noticesOgre() {
        if (this.encounterCounter % 3 === 0 && this.encounterCounter !== 0) {
            return true;
        }
        return false;

    }
}


module.exports = Human;