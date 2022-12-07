class Dragon {
    constructor(name, rider) {
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.eatCount = 0;
        
    } 
    greet() {
        return `Hi, ${this.rider}!`
    }

    eat() {
        this.eatCount += 1
        if (this.eatCount === 3)
        return this.hungry = false
    }
}






module.exports = Dragon;