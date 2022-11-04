class Craft {
    constructor(craftObj){
        this.name = craftObj.type
        this.materials = craftObj.materials
        this.completed = false
    }
    completeCraft(){
        this.completed = true
        return 'All done! It looks great!'
    }
    calculateProjectTotal(){
        var a = 0
       for (var i = 0; i< this.materials.length; i++){
        a+=this.materials[i].calculateMaterialCost()
       }
       return a
    
    }
}

module.exports = Craft;
