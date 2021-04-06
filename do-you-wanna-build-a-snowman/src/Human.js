var Snowman = require('./Snowman');

class Human {
  constructor(namey) {
    this.name = namey;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0,
    }
    // gatherMaterials(mats, num) {
    //   this.materials = mats;
    //   materials.carrots = 1;
    //   materials.buttons = 5;
    // }
  }
}

module.exports = Human;

//npm test do-you-wanna-build-a-snowman/test/Human-test.js
