class Pirate{
    constructor(name,job,cursed){
        this.name = name
        this.job = job ||'scallywag'
        this.cursed = false
        this.booty = 0
    }
    robShip(){
        this.booty += 100
        if(this.booty <= 500){
            return this.booty, 'YAARRR!'
        } else{
            this.booty = 500
            // is this bad thing to do? assigned 500 is there other way?
            this.cursed = true
            return `ARG! I've been cursed!`
        }
    }

    liftCurse(){
        //minus 300 from booty when fn is called
        if(this.cursed === false){
            return `You don't need to lift a curse!`
        } else{
            this.booty = this.booty -300;
            this.cursed = false
            return `Your curse has been lifted!`
        }
    }
}


module.exports = Pirate