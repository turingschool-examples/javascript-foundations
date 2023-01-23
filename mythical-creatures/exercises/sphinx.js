class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    if (this.riddles.length < 3) { 
      this.riddles.push(riddle);
    } else if (this.riddles.length === 3) {
      this.riddles.push(riddle);
      this.riddles.shift();
    }
  }
  attemptAnswer(answer) {
    if (this.riddles.length === 1 && this.riddles[0].answer === answer) {
      this.riddles.splice(0,1)
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
    }
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answer) {
        this.riddles.splice(i, 1);
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      }
    }
    this.heroesEaten++;
  }
} 
  





module.exports = Sphinx