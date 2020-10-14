class Pirate {
    constructor(name, job = 'scallywag', cursed = false, booty = 0) {
        this.name = name;
        this.job = job;
        this.cursed = cursed;
        this.booty = booty;
    }

    robShip() {
        this.booty = this.booty + 100;
        return 'YAARRR!'
    }

}

module.exports = Pirate;