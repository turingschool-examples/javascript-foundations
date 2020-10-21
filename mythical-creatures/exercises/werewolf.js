class Werewolf {
    constructor(name) {
        this.name = name;
        this.human = true;
        this.wolf = false;
        this.hungry = false;
        this.victims = [];
    }

    transform() {
        if (this.wolf === false) {
            this.human = false;
            this.wolf = true;
            this.hungry = true;
        } else {
            this.human = true;
            this.wolf = false;
            this.hungry = false;
        }
    }

    eat(victim) {
        if (this.hungry === false) {
            return 'Eat lettuce you rabbit!';
        } else {
            this.victims.push(victim);
            this.hungry = false;
        }
        this.transform();
    }
}


module.exports = Werewolf;