function init(){
    itembox=document.getElementById("itembox");
    pricebox=document.getElementById("pricebox");
    quantitybox=document.getElementById("quantitybox");
    
}
function total(){
    var item=itembox.value;
    var price=parseInt(pricebox.value);
    var quantity=parseInt(quantitybox.value);
    var total=price*quantity;
    // console.log(item,price,quantity,total);

    var td1=document.createElement("td");
    td1.innerText=item;
    var td2=document.createElement("td");
    td2.innerText=price;
    var td3=document.createElement("td");
    td3.innerText=quantity;
    var td4=document.createElement("td");
    td4.innerText=total;

    var tr=document.createElement("tr")
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    tbo.appendChild(tr)
}