var arr=[32,45,67,33];
Array.prototype.eventList=function(){
    for(let x of this){
        if(x%2==0){
            console.log(x)
        }
    }
}
arr.eventList();