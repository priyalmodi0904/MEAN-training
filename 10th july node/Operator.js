//Rest operator denontes by three dots   ...
//this operator group the multiple comma separated values and creates an array
function hello(...data){
    console.log(data);
}
hello(23,4,5,7,4,3,57,43,3,2,7)   //n no. of values   forms an array of this values
hello()

function hey(x,y,...data){
    console.log(x,y)
    console.log(data);

}
hey(34,6,344,2,4,7,43);
hey(2,4)
hey()