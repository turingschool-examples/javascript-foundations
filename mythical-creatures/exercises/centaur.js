
class Centaur{
   constructor(obj){
      this.name = obj.name;
      this.breed = obj.type;
      this.standing = true;
      this.layingDown = false;
      this.countBow = 0;
      this.countRun = 0;
      this.cranky = false;
      
   }
   shootBow() {
      if(this.cranky === true || this.layingDown === true){
         return "NO!"
      }else{
      this.countBow +=1 ;
      this.checkcranky()
      return 'Twang!!!'
   }
   }
   run() {
      if(this.cranky === true || this.layingDown === true){
         return "NO!"
      }else{
     this.countRun += 1;
     this.checkcranky()
      return 'Clop clop clop clop!!!'
      }
   }
   checkcranky() {
      if(this.countBow + this.countRun === 3) {
         this.cranky = true
      }
   }
   sleep(){
      this.cranky = false
      if(this.standing === true){
         return "NO!"
      } else if( this.layingDown === true){
         return "ZZZZ"
      }
   }
   layDown(){
      this.cranky = false
      this.standing = false
      this.layingDown = true
   }
   standUp(){
      this.standing = true
      this.layingDown = false
   }
   drinkPotion(){
      if(this.layingDown === true){
         return "Not while I'm laying down!"
      }else{
      this.cranky = false
      }
   }
}

module.exports = Centaur;