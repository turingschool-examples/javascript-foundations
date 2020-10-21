class Magician{

    constructor (inputObject) {
        this.name = inputObject.name;  
        this.topHat = true;
        this.confident = false;
        this.spellsCast = 0;
        if (inputObject.topHat === false) {
            this.topHat = false;
        }
        
    }

    incantation(spellScript) {
        return (spellScript.toUpperCase() + '!')
    }
    
    cast() {
        this.spellsCast++;

        if (this.spellsCast >= 3) {
            this.confident = true;
        }

        if (this.topHat === true) {
            return 'PULL RABBIT FROM TOP HAT'
        } else if (this.topHat === false) {
            return 'PULL DOVE FROM SLEEVE'
        }   
    }

    performShowStopper() {
        if (this.confident === true) {
            return 'WOW! The magician totally just sawed that person in half!'
        } else {
            return 'Oh no! Practice more before attempting this trick!'
        }
    }
   
}

module.exports = Magician;