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
const btnToCart = document.getElementsByClassName("inShoppingCart");
for(let i = 0; i < card.length; i++) {
    btnToCart[i].addEventListener('click', addToCart);
    function addToCart() {
        const message = document.getElementById("message");
        message.classList.add("active");
        setTimeout(() => message.classList.remove("active"), 2000);
    }
}
window.addEventListener('scroll', function () {
    var pixelCount = window.pageYOffset;
    if (pixelCount < 480) {
        message.style.top = "20px"
    }
    if (pixelCount > 480) {
        message.style.top = "80px"
    }
})