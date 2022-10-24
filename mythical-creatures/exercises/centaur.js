
function Centaur(params){
    var cenNo = {
     name: params.name,
     breed: params.type,
     shootBow: function(){
        return 'Twang!!!'
     }
    }
     return cenNo;
}

// var centaur1 = Centaur('Georgiana', 'Palomino')
// console.log(centaur1.breed)
module.exports = Centaur;
