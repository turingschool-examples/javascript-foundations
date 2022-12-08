class Magician {
    constructor(details) {
        this.name = 'The Great ' + details.name;
        this.assistant = details.assistant;
        this.favoriteAccessory = details.clothing || 'top hat';
        this.confidencePercentage = 10;
    }

    performIncantation(phrase) {
        return phrase.toUpperCase() + '!';
    }

    performTrick() {
        this.confidencePercentage += 10;
        if(this.favoriteAccessory === 'top hat') {
            return 'PULL RABBIT FROM TOP HAT';
        }
        return 'PULL DOVE FROM SLEEVE';
    }

    performShowStopper() {
        if(this.confidencePercentage > 100 && this.assistant){
            return 'WOW! The magician totally just sawed that person in half!'
        }
        return 'Oh no, this trick is not ready!'
    }
}

module.exports = Magician;
