class Person{
    constructor(fname, lname, age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }    
}

const allPerson = new Person('Narziya','Fahadh',20);
console.log("First Name",allPerson.fname);
console.log("Last Name",allPerson.lname);
console.log("Age",allPerson.age);

class Employee{
    constructor(eid, ename){
        this.eid=eid;
        this.ename=ename;
    }
}
const empData=new Employee(101,'SID');
console.log("Employee Id",empData.eid);
console.log("Employee Name",empData.ename);

