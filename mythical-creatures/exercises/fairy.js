class Fairy {
    constructor(name) {
      this.name = name;
      this.dust = 10;
      this.clothes = {dresses: ['Iris']}
      this.disposition = 'Good natured'
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

    // replaceInfant(infant) {
    //   infant = {
    //     name: infant.name,
    //     eyes: infant.eyes,
    //     // disposition: infant.disposition
    //   }
    }
}

module.exports = Fairy