class Bag{
    constructor(empty) {
        this.empty = true,
        this.count = 0,
        this.candies = []
    }
    fill(candy){
        this.candies.push(candy)
        this.count ++
        // console.log(this.candies)
    }
    contains(candy){
       for(var i = 0; i < this.candies.length; i++){
        // console.log(this.candies)
        // console.log(candy)
     if(this.candies[i].type === candy){
        return true
     } 
     }
     return false      
    } 
}

module.exports = Bag;