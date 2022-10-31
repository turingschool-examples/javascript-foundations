
class Centaur{
   constructor(obj){
      this.name = obj.name;
      this.breed = obj.type;
      this.standing = true;
      this.countBow = 0;
      this.countRun = 0;
      this.cranky = false
   }
   shootBow() {
      this.countBow +=1 ;
      this.checkcranky()
      return 'Twang!!!'
   }
   run() {
     this.countRun += 1;
     this.checkcranky()
      return 'Clop clop clop clop!!!'
   }
   checkcranky() {
      if(this.countBow + this.countRun === 3) {
         this.cranky = true
      }
   }
}

module.exports = Centaur;