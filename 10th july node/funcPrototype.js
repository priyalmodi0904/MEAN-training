
class Student{
constructor(roll,name,age){
    this.roll=roll;
    this.age=age;
    this.name=name;
}

show(){
        console.log(this.roll,this.name,this.age);
    }
}

Student.prototype.print=function(){
    console.log("\n Roll:",this.roll)
    console.log("Name:",this.name);
    console.log("Age:",this.age)
    
}
const ob1=new Student(101,'vikas',23);
ob1.show();
ob1.print();


// const ob1= new Student(101,'priyal',21);
// const ob2=new Student(102,'modi',21);
//  console.log(ob1);
//  console.log(ob2);
//  ob1.show();
//  ob2.show();







 //js is not an object oriented language it looks loke object oriented