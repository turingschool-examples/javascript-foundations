class Material {
    constructor(name,price,amount,units){
        this.name = name
        this.price = price
        this.amount = amount
        this.units = units
    }
    useMaterial(quantity){
        if(this.amount < quantity){
            return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
        }
        this.amount -= quantity
        return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    }
    calculateMaterialCost(){
       return this.amount*this.price
    }

}

module.exports = Material;
