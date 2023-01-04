class Novel {
    constructor (name ,title){
        this.name = name;
        this.title = title;
    }

    getAtuthor() {
        return this.name + this.title; 
      
    }
}
    class Dog extends Novel{
        constructor(model){
            super();
            this.model = model;
        }            
    }

const myDog = new Dog('BullDogs')
const test = new Novel ("áccsd" ,"st");
let myNovel = new Novel ("nguyen ngoc anh "," toi tháy hoa vang tren cỏ xanh")

console.log(">>>check address :",myNovel.getAtuthor());