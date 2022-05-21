var debug = true;
function isDebug(message) {
    if(debug) console.log(message);
}
const card = document.getElementsByClassName("particular-object");
const cartContainer = document.getElementsByClassName("shopping-cart-container");
for(let i = 0; i < card.length; i++) {
    card[i].addEventListener('mousemove', showShoppingCart);
    card[i].addEventListener('mouseout', hideShoppingCart);
    function showShoppingCart() {
        cartContainer[i].classList.add("active");
    }
    function hideShoppingCart() {
        cartContainer[i].classList.remove("active");
    }
}