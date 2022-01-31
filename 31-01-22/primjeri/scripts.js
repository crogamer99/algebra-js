class Student{

    constructor(firstName, lastName, years){

        this.firstName = firstName;
        this.lastName = lastName;
        this.years = years;
    }

    basicInfo(){
        return `The student ${this.firstName} ${this.lastName} is ${this.years} years old.`;
    }
}

let student1 = new Student("Ivan", "Herkvi", 22);

console.log(student1.basicInfo());

class Report extends Student{
    constructor(firstName, lastName, years, grade){
        super(firstName, lastName, years);
        this.grade = grade;
    }

    yearLevel(){
        return `The student ${this.firstName} ${this.lastName} is a ${this.grade.toLowerCase()} student, and they are ${this.years} years old.`;
    }
}

let student2 = new Report("John", "Smith", 23, "Senior");

console.log(student2.yearLevel());
console.log(typeof(student2));