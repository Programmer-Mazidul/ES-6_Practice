class student {
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.school = "CCIT"
    }
}

const student1 = new student(12, "Mazid");
const student2 = new student(22, "Mahabub");
console.log(student1, student2);