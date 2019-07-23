class Fairy {
    constructor(name) {
      this.name = name;
      this.dust = 10;
      this.clothes = {dresses: ['Iris']}
      this.disposition = 'Good natured'
      this.humanWards = [];
    }

    receiveBelief() {
      this.dust += 1;
    }

    believe() {
      this.dust += 10
    }

    makeDresses(flowers) {
      for(var index = 0; index < flowers.length; index++) {
        this.clothes.dresses.push(flowers[index])
      }
      flowers;
    }

    provoke() {
      this.disposition = 'Vengeful'
    }

    replaceInfant(infant) {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant)
      if(this.humanWards.length >= 3) {
        this.disposition = 'Good natured';
      }
      return infant;
    }
}

module.exports = Fairy