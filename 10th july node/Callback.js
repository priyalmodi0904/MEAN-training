// function add(a,b,callback){
//     for(let x=1;x<3874;x++){}
//         var c=a+b;
//         callback(c);
    
// }
// console.log("Start...");
// setTimeout(add,1000,34,44,(result)=>{
//     console.log("Result:",result);
// })
// console.log("Thanks...");



//setTimeout- sirf ek bar chlta h 
//setInterval-paritcular interval me bar bar chlta h

function hello(){
    console.log("helloooo");

    // setTimeout(hello,5000)
    // setInterval(hello,5000)
}

 const intervalobj=setInterval(hello,5000);
 setTimeout(()=>clearInterval(intervalobj),10000);