console.log("hello priyal");
function fun(){
    console.log("hey");
}
console.log(typeof fun)

var abc=fun;
abc();

function test(ob){
    ob();   //ob me fun aagya

}

var num=100;
test(fun)


//in javascript function are variable 