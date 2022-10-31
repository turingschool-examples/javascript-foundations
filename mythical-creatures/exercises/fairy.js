class Fairy{
    constructor(name){
        this.name = name
        this.dust = 10
        this.clothes = {dresses: ['Iris']}
        this.disposition = 'Good natured'
    }
    receiveBelief(){
        this.dust +=1
    }
    believe(){
        this.dust +=10
    }
    makeDresses(array){
        this.clothes.dresses.push(...array)
    }
    becomeProvoked(){
        this.disposition = "Vengeful"
    }
}
module.exports = Fairy