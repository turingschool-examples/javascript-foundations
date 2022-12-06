
class Dragon {
    constructor (name, rider) {
        this.name = name
        this.rider = rider
        this.fed = 0
        this.hungry = true
    }
    greet() {
        return `Hi, ${this.rider}!`
    }
    eat() {
        this.fed++
        if (this.fed >= 3) {
            this.hungry = false
        } 
    }
}

module.exports = Dragon