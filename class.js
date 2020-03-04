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