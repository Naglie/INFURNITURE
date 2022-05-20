var debug = true;
function isDebug(message) {
    if(debug) console.log(message);
}
const inShoppingCart = document.getElementById("inShoppingCart");
const card = document.getElementsByClassName("particular-object");
card.addEventListener("focused", showShoppingCart);
function showShoppingCart() {
    if(inShoppingCart.hasAttributes("none")){
        inShoppingCart.removeAttribute("display");
    }
}

function hideShoppingCart() {
    
}