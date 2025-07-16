var arr=[23,5,5,2,6,7,56]

var[x,y,z]=arr       //destructuring


// var x=arr[0]   //traditional way
// var y=arr[1]
// var z=arr[2]



var[x,y,z,...rest]=arr
console.log(x ,y ,z)
console.log(rest)




//destructuring works on array and objects