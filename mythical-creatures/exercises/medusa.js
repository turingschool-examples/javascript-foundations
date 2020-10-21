class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
    }

    stare(person) {
        if (person.stoned === false) {
            person.stoned = true;
            this.statues.push(person);
        }
        if (this.statues.length > 3) {
            var luckyOne = this.statues.shift();
            luckyOne.stoned = false;
        }
    }
};


module.exports = Medusa;