class Centaur {
    constructor(info) {
        this.name = info.name
        this.breed = info.type
        this.cranky = false
        this.standing = true
        this.counter = 0
        this.layingDown = false

    }
    shootBow() {
        if (this.cranky || this.layingDown) {
            return "NO!";
        }
        this.counter += 1;
        if (this.counter >=3) {
            this.cranky = true;
        }
        return 'Twang!!!'
    }

    run() {
        if (this.cranky || this.layingDown) {
        return "NO!"
        }
        this.counter +=1; 
        if (this.counter >=3) {
            this.cranky = true;
        }
        return 'Clop clop clop clop!!!'
    }
    sleep() {
        if (this.standing === true) {
        return 'NO!'
        } else if (this.layingDown === true) {
        this.cranky = false
        return 'ZZZZ'
        }
    }
    layDown() {
        this.standing = false;
        this.layingDown = true;
    }
    standUp() {
        this.standing = true
        this.layingDown = false
    }
    drinkPotion() {
        if (this.standing === true) {
            this.cranky = false
        } else if (this.layingDown === true) {
            return `Not while I\'m laying down!`
        }
        
    }
}



module.exports = Centaur