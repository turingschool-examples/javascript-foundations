class Dragon {
    constructor(name, rider){
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.meals = 0
    }
    greet(rider){
        return `Hi, ${this.rider}!`
    }
    eat(){
        this.meals++
        if (this.meals > 2){
            return this.hungry = false
    }
}
}

module.exports = Dragon