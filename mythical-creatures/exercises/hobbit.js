class Hobbit {
    constructor(name){
        this.name = name.name
        this.age = 0
        this.adult = true
        this.old = false
        this.hasRing = false
       
    }
    celebrateBirthday(){
        this.age = this.age + 1
        if(this.age <=32){
            this.adult = false
        } else if (this.age >32 && this.age <=100){
            //why cant || or work?
            this.adult = true
        } else {
            this.age = 101
            this.old = true
        }
    }
    getRing(){
        if(this.name === 'Frodo'){
            this.hasRing = true
            return 'Here is the ring!'
        } else{
           return "You can't have it!"
        }
    }
}
    


// bilbo and mark is inside an object
// return bilbo.name value
module.exports = Hobbit

