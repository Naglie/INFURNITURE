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
        cartContainer[i].style.zIndex = "999999;"
        card[i].classList.add("active");
        cartContainer[i].classList.add("active");
    }
    function hideShoppingCart() {
        cartContainer[i].style.zIndex = "100;"
        card[i].classList.remove("active");
        cartContainer[i].classList.remove("active");
    }
}
const btnToCart = document.getElementsByClassName("inShoppingCart");
for(let i = 0; i < card.length; i++) {
    btnToCart[i].addEventListener('click', addToCart);
    function addToCart() {
        const message = document.getElementById("message");
        message.classList.add("active");
        setTimeout(() => message.classList.remove("active"), 3000);
    }
}
const furnitureType = document.getElementsByTagName('h2');
window.addEventListener('scroll', function () {
    var pixelCount = window.pageYOffset;
    if (pixelCount < 540) {
        message.style.top = "20px";
        for(let i = 0; i < card.length; i++) {
            furnitureType[i].style.boxShadow = "0 0px 0px 0 rgba(0,0,0,0.2)";
        }
    }
    if (pixelCount > 540) {
        message.style.top = "80px";
        for(let i = 0; i < card.length; i++) {
            furnitureType[i].style.boxShadow = "0 8px 8px 0 rgba(0,0,0,0.2)";
        }
    }
})