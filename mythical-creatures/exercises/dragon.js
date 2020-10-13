class Dragon {
    constructor(name, rider, color, hungry = true, meals = 0) {
        var meals = 0;
        this.name = name;
        this.rider = rider;
        this.color = color;
        this.hungry = hungry;
        this.meals = meals;

        this.eat = function (){
            this.meals++;
            if (this.meals >= 3) {
            this.hungry = false;
            }
        }
    }
}




module.exports = Dragon;