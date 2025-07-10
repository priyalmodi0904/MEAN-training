function fun(){
    console.log("fun....");
    function test(){
        console.log("testing....");
    }
    return test;
}
fun()();

// hello 
var ob=fun();
ob();