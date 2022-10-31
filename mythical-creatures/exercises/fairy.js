class Fairy{
    constructor(name){
        this.name = name
        this.dust = 10
        this.clothes = {dresses: ['Iris']}
        this.disposition = 'Good natured'
        this.humanWards = []
        
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
    replaceInfant(objInf){
        if(this.disposition === "Vengeful" && this.humanWards.length < 2){
            objInf.disposition = 'Malicious'
            this.humanWards.push(objInf)
        }else{
            this.disposition = 'Good natured'
            return objInf 
        }
     
    }

}
module.exports = Fairy