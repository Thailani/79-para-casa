menuListArray = ["Pizza Vegetariana",
                 "Pizza de Frango",
                 "Pizza Portuguesa",
                 "Pizza Quatro Queijos",
                 "Pizza de Calabresa",
                 "Pizza Extravaganza"];

function getMenu(){
    var htmldata;
    menuListArray.sort();
    for(var i=0;i<menuListArray.length;i++){
        htmldata+ menuListArray[i] + '<br>';
    }
    document.getElementById("displayMenu").innerHTML= htmldata;
}

function addItem(){
    var htmldata;
    varimgtags='<img id="im1" src="images/pizzaImg.png"/>'
    var item=document.getElementById("addItem").value;
    menuListArray.sort();
    htmldata=""
    for(var i=0;i<menuListArray.length;i++){
        htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;

}

function addTop(){
    var item=document.getElementById("addItem").value;
     menuListArray.push(item);
    addItem(); 
}