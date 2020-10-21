class Werewolf {
    constructor(name) {
        this.name = name;
        this.human = true;
        this.wolf = false;
        this.hungry = false;
    }

    transform() {
        if (this.wolf === false) {
            this.human = false;
            this.wolf = true;
            this.hungry = true;
        } else {
            this.human = true;
            this.wolf = false;
        }
    }
}


module.exports = Werewolf;