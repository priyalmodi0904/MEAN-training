//object : it is real world enttity
//object consist of features and behaviour
//feature(data)->object kin kin chizo se bana h or usme kya data h 
//behaviour(function)->object k ky kya behviour h or vo kya kya kr skta h

//encapsulation->wrapping up of data and function into a single unit(object)

//class-> it is a structure in which we define our object

//object->state,behaviour,identity

//constructor->

//js doesnot support function overloading->we cannot create same name function with different signature



class Student{
    constructor(roll,name){
        this.roll=roll;
        this.name=name;

    }
    show(){
            console.log("roll:",this.roll);
        }

    vote(){
        if(this.age>=18){
            console.log("you can vote")
        }
    }    
}
var ob1=new Student(101,"priyal");
var ob2=new Student(102,"modi",34);
console.log(ob1);
console.log(ob2);
ob1.show();
ob2.vote();






//retaltionship type:
//1. Use-A => one particular object uses another object  ek obj kisi dusre obj ko use krrha h
//2. Has-A=>one object is very much connected to other object (dependency) ek object ka existence dusre object me h 
//3. Is-A=> (inheritance) object kisko belong kr rha h inheritance is top to bottom approach upr vali class ki properties niche vali class legi