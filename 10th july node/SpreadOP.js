//Spread operator
//reverse of rest operator
//also denoted by three dots ...
var x=[23,56,5434,256]
var y=[...x];   //spread loop ek bar chl gaya mtlb 

console.log(x,y);
y.push(100,200);
console.log(x,y);

var z=[...x, 100,200,300,...x]
console.log(z)
//ek se jyada spread operator likh skte h but rest operator nhi 


//Map
var arr1=[2,2,4,6,4,2]
var arr2=arr1.map(num=>num+10); //map gives array and modify aaray size of the array doesnot change
//filter changes the size of the array
console.log(arr2)

var arr=[3,56,345,754,32];
var arr2=arr.filter(num=>num%2==0);
console.log(arr2)


var arr=[12,45,64,26,34];
var status=arr.every(num=>num>=35);         //every function returns the boolean value  har ek element k liye condition satisfy honi chahiye
console.log(status)  //same as AND operator

var status=arr.some(num=>num>=35);         //some function returns the boolean value  kisi bhi ek elemnt k liye bhi hogai  condition satisfy to ture
console.log(status)  //same as OR operator

//HOF-  Higher Order Function
// 1. ek esa fun which takes another function as an argument is this are called callback function
//2. or ek esa function which returns a function
//3. ek esa function which takes a function as an argument and returns a function
//filter map some every are HOF