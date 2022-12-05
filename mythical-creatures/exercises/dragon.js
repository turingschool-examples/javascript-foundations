class Dragon{
    constructor(name,rider) {
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.belly = 0;
    }

    greet(){
        return `Hi, ${this.rider}!`
    }

    eat(){
        this.belly++;
        if(this.belly >= 3){
            this.hungry = false;
        }
    }
}

module.exports = Dragon;
