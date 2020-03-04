class friends{
    constructor(fId, fName){
        this.id = fId;
        this.name = fName;
        this.institute = "Marine Technology";
    }
}

const friends1 = new friends(1, "rafiq");
const friends2 = new friends(2, "zakir");
console.log(friends1, friends2);
console.log(friends1.name,friends2.institute);

//this is inheritence
class boroVai{
    constructor(){
        this.vaiName = "khalil";
    }
}

class fname extends boroVai{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name+" "+this.vaiName;
    }
}
const baby = new fname("arif");
const baby1 = new fname("shakhwat");
console.log(baby.getFullName());
console.log(baby, baby1);