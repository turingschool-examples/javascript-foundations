function hobbit(name) {
  this.name = name;
  this.age = 0;
  if (this.age >= 101) {
    this.old = true;
  } else this.old = false;
  this.celebrateBirthday = function () {
    this.age = this.age + 1;
    return this;
  }
  if (this.age <= 32) { this.adult = false } else return true;

}


// hobbit.prototype.adult = function () {
//   this.adult = true;
// }











module.exports = hobbit;