// let btn = document.querySelector("button");
// btn.addEventListener("click", func);

items = [];
let item;

window.onload = function(){
    let subtn = document.querySelector("form").children[1];
    item = document.querySelector("#newItem");
    // console.log()
    subtn.addEventListener("click", addItem);
}

function clickHandler(evt){
    evt.preventDefault();
    items.push(item.value);
    item.value = "";
    let cov = document.querySelector("#cover");
    cov.style.visibility = "hidden";
}

function addItem(evt){
    evt.preventDefault();
    items.push(item.value);
    

    let itemC = document.createElement("div");
    itemC.classList.add("itemCont");
    let nItem = document.createElement("textarea");
    nItem.rows = 1;
    nItem.cols = 50;
    nItem.value = item.value;
    nItem.readOnly = true;
    
    nItem.classList.add("item");
    itemC.appendChild(nItem);
    document.querySelector("#itemsCont").appendChild(itemC);
    item.value = "";
}