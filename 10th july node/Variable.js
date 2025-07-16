function hello(){
    
    var x=10;
    let y=10;
    const z=10;
    console.log("Before block X:",x,"Y",y)
    {
        var x=20;
        let y=20;
        console.log("Inside Block X:",x,"Y:",y)
    }
    console.log("Outside X:",x,"Y:",y)
}
hello()


// var keyword is used  for function scope
//let keyword is used for block scope
//const keyword is used for block scope