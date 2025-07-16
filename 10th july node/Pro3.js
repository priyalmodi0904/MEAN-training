function add(a,b){
    var z=a+b;
    console.log(z)
}
function mul(a,b){
    var z=a*b;
    console.log(z);
}



function hello(a,b,operation){
    console.log("acro");
    operation(a,b);
    console.log("tanks");
}

hello(23,45,add);
hello(23,45,mul);