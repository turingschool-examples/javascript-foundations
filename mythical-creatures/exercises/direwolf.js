 class Stark {
     constructor(person) {
         person = undefined
         if (person) {
             this.name = person.name;
         }

        //  this.name = !undefined || person.name; - DOES NOT WORK!

         //if nothing is passed in as an argument, we hit an error, because we can't do undefined.name


         //two cases:
         //1 - an object is passed in as a "person" --> everything works
         // 2 - nothing is passed in as a "person" --> broken

        //error being hit: person.name
        // i need to prevent js from reading "person.name" if there's no person

     }
 }

 module.exports = Stark;

//  npm test mythical-creatures/test/direwolf-test.js
