class Centaur {
    constructor(centaur) {
        this.name = centaur.name;
        this.breed = centaur.type;
        this.cranky = false;
        this.crankyLevel = 0;
        this.standing = true;
        this.layingDown = false;
    }

    shoot() {
        this.crankyLevel++;
        this.crankyCounter();
        if (this.cranky === true || this.layingDown === true) {
            return 'NO!';
        }
        return 'Twang!!!';
    }

    run() {
        this.crankyLevel++;
        this.crankyCounter();
        if (this.cranky === true || this.layingDown === true) {
            return 'NO!';
        }
        return 'Clop clop clop clop!!!'
    }

    crankyCounter() {
        if (this.crankyLevel >= 3) {
            this.cranky = true;
        } else {
            this.cranky = false;
        }
    }

    sleep() {
        if (this.standing === true) {
            return 'NO!'
        }

        if (this.layingDown === true) {
            this.crankyLevel = 0;
            this.crankyCounter();
            return 'ZZZZ';
        }
    }

    layDown() {
        this.standing = false;
        this.layingDown = true;
    }

    standUp() {
        this.standing = true;
        this.layingDown = false;
    }

    drinkPotion() {
        if (this.standing === true && this.cranky === true) {
            this.crankyLevel = 0;
            this.crankyCounter();
        } else if (this.layingDown === true) {
            return 'Not while I\'m laying down!'
        } else if (this.cranky === false) {
            this.cranky = true;
        }
    }
    
};

module.exports = Centaur;