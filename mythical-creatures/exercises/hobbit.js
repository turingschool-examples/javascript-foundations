class Hobbit{
    constructor(name, age = 0, adult = false, old = false, hasRing = false) {
        this.name = name;
        this.age = age;
        this.adult = adult;
        this.old = old;
        this.hasRing = hasRing;
        
        if (name === 'Frodo') {
            this.hasRing = true;
        }
    }
    
    
    

    celebrateBirthday() {
        this.age++;

        if (this.age > 32) {
            this.adult = true;
        } 

        if (this.age > 100){
            this.old = true;
        }
    }



}


module.exports = Hobbit;