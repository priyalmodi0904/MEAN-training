function fun(){
    console.log("fun....");
    function test(){
        console.log("testing....");
    }
    return test;
}
fun()();


var ob=fun();
ob();