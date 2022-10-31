class Werewolf{
    constructor(name){
        this.name = name
        this.form = 'human'
        
    }
    completeTransformation(){
        this.form = 'wolf'
        return 'Aaa-Woooo!'
    }
}


module.exports = Werewolf