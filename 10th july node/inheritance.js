//js use extends keyword for inheritance
class demo{
    fun1(){
        console.log("demo function")
    }
    fun2(){
        console.log("demo fun2")
    }
    fun3(){
        console.log("demo fun3")
    }

}
class Sample extends demo{
    hello(){
        console.log("hello");
    }
    fun2(){
        console.log("sample fun2")
    }
    fun3(){
        super.fun3();
        console.log("sample fun3");
    }
}

var ob=new Sample();
ob.fun1();
ob.hello(); 
ob.fun2();  //gives priority to sample class  override
ob.fun3(); //used super keyword to run the parent class function  override+inheritance

//arrow function donot change the object or ye object sath me lekr chlte h no need of binding 
//normal function me object change ho jata h 