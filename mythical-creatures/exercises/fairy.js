class Fairy {
    constructor (name) {
        this.name = name; 
        this.dust = 10;
        this.clothes = {dresses: ['Iris']};
        this.disposition = 'Good natured';
        this.humanWards = [];
        
    }
    receiveBelief() {
        this.dust += 1
        
    }
    believe() {
        this.dust += 10
        
    }
    makeDresses(flowers) {
        this.clothes.dresses = this.clothes.dresses.concat(flowers);
        // concat method merges two arrays. So this is merging the new flowers array being passed in on line 44
        // with the array containing just 'Iris' and returning the new array.
    }
    becomeProvoked() {
        this.disposition = 'Vengeful'
    }
    replaceInfant(infant) {
        if (this.humanWards.length < 2) {
            if (this.disposition === 'Vengeful') {
                infant.disposition = 'Malicious'
                this.humanWards.push(infant);
                return infant;
            }
        } else if (this.humanWards.length < 3) {
            if (this.disposition === 'Vengeful') {
                infant.disposition = 'Malicious';
                this.humanWards.push(infant);
                this.disposition = 'Good natured';
                return infant;
            }
        } 
            return infant;
        }
    }
    


    



module.exports = Fairy