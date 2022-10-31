class Skier {
    constructor(name){
        this.name = name;
        this.hasLiftTicket = true;
        this.skillLevel = 1
        this.nextSlope = 'green circle'
    }
    takeLesson(){
        this.skillLevel += 1
    }
    pickSlope(){
        //skill level is 3 and above goint to a blue slope
        if(this.skillLevel >=5){
            this.nextSlope = 'black diamond'
        } else{
            // this.skillLevel >=3 || this.skillLevel <4){
            //     // go blue
                this.nextSlope = 'blue square'
        }
    }
}

module.exports = Skier;