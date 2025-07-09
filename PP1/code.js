function init(){
    rollbox=document.getElementById("rollbox");
     branchbox=document.getElementById("branchbox");
      javabox=document.getElementById("javabox");
       cppbox=document.getElementById("cppbox");
       tbo=document.getElementById("tbo")
}

function add(evt){
    evt.preventDefault();
    var roll=rollbox.value;
    var branch=branchbox.value;
    var java=parseInt(javabox.value);                  // above variable name isnwritten with value here
    var cpp= parseInt(cppbox.value );
    var total=java+cpp;
    // console.log(roll,branch,java,cpp,total);
     
    var td1=document.createElement("td");
    td1.innerText=roll;
    var td2=document.createElement("td");
    td2.innerText=branch;
    var td3=document.createElement("td");
    td3.innerText=java;
    var td4=document.createElement("td");
    td4.innerText=cpp;
    var td5=document.createElement("td");
    td5.innerText=total;

    var tr=document.createElement("tr");
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)

    tbo.appendChild(tr)

    evt.target.reset();







}
function save(){
    







    var rows=tbo.querySelectorAll("tr")
    // alert(rows.length)
    for(var row of rows){
        var tds=row.querySelectorAll("td");
        var ob={
            roll:tds[0].innerText,
            branch:tds[1].innerText,
            marks:{
                java:tds[2].innerText,
                cpp:tds[3].innerText
        }
    }
    // console.log(ob)
    
}
}