
class Dragon {
    constructor (name, rider) {
        this.name = name
        this.rider = rider
    }
    greet() {
        return `Hi, ${this.rider}!`
    }
}

module.exports = Dragon