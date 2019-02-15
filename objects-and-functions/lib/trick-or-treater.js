class TrickOrTreater {
    constructor(costume, bag) {
        console.log(bag)
        this.dressedUpAs = costume.style;
        this.bag = bag ? bag : [];
        this.hasCandy = false;
        this.countCandies = 0;
    }

    putCandyInBag (candy) {
        this.bag.push(candy)
        this.hasCandy = true;
        this.countCandies = this.bag.count;
    }


    eat (candy) {
        this.bag.candies.pop()
        this.countCandies = this.bag.candies.length;
    }
}

module.exports = TrickOrTreater;