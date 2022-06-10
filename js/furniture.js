import {comboBoxModule} from './ComboBoxModule.js';

// BURGER MENU
const burger = document.getElementById('burgerContainer');
const burgerNav = document.getElementById('topnav');
burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('change');
    burgerNav.classList.toggle('hide');
    if(burgerNav.classList.contains('hide')) {
        // SHOW BURGER MENU
        burgerNav.style.display = 'unset';
        setTimeout(() => {
            burgerNav.style.opacity = '1';
            burgerNav.style.transform = 'translateY(0%)';
            document.getElementById('categories').style.marginTop = '210px';
        }, 10);
    }
    else {
        // HIDE BURGER MENU
        burgerNav.style.opacity = '0';
        burgerNav.style.transform = 'translateY(-70%)';
        document.getElementById('categories').style.marginTop = '0';
        setTimeout(() => {
            burgerNav.style.display = 'none';
        }, 400);
    }
});
// HEADER TYPE
window.addEventListener('resize', (e) => {
    var widthPixel = window.innerWidth;
    // SHOW MOBILE HEADER
    if(widthPixel <= 1250) {
        document.getElementById('burgerContainer').classList.add('activate');
        let header = document.getElementsByTagName('header')[0];
        let uls = header.getElementsByTagName('ul');
        let shpCart = header.getElementsByClassName('shopping-cart');
        for (let i = 0; i < uls.length; i++) {
            uls[i].style.transform = 'translateX(-70%)';
            uls[i].style.opacity = '0';
            setTimeout(() => {
                uls[i].style.display = 'none';
            }, 400);
        }
        for (let i = 0; i < shpCart.length; i++) {
            shpCart[i].style.opacity = '0';
            shpCart[i].style.transform = 'translateX(-70%)';
            setTimeout(() => {
                shpCart[i].style.display = 'none';
            }, 400);
        }
        burgerNav.style.opacity = '0';
        burgerNav.style.transform = 'translateY(-70%)';
        document.getElementById('categories').style.marginTop = '0';
        setTimeout(() => {
            burgerNav.style.display = 'none';
        }, 400);
    }
    // SHOW DESKTOP HEADER
    if(widthPixel >= 1250) {
        if(burger.classList.contains('change')) {
            burger.classList.toggle('change');
            burgerNav.classList.toggle('hide');
        }
        document.getElementById('burgerContainer').classList.remove('activate');
        let header = document.getElementsByTagName('header')[0];
        let uls = header.getElementsByTagName('ul');
        let shpCart = header.getElementsByClassName('shopping-cart');
        for (let i = 0; i < uls.length; i++) {
            uls[i].style.display = 'flex';
            setTimeout(() => {
                uls[i].style.opacity = '1';
                uls[i].style.transform = 'translateX(0%)';
            }, 200);
        }
        for (let i = 0; i < shpCart.length; i++) {
            shpCart[i].style.display = 'unset';
            setTimeout(() => {
                shpCart[i].style.opacity = '1';
                shpCart[i].style.transform = 'translateX(0%)';
            }, 200);
        }
    }
});

// FURNITURE HOVER AND CLICK FOR INFO
const card = document.getElementsByClassName("particular-object");
const cartContainer = document.getElementsByClassName("shopping-cart-container");
for(let i = 0; i < card.length; i++) {
    card[i].addEventListener('mousemove', showShoppingCart);
    card[i].addEventListener('mouseout', hideShoppingCart);
    function showShoppingCart() {
        cartContainer[i].style.zIndex = "99999;"
        card[i].classList.add("active");
        cartContainer[i].classList.add("active");
    };
    function hideShoppingCart() {
        cartContainer[i].style.zIndex = "100;"
        card[i].classList.remove("active");
        cartContainer[i].classList.remove("active");
    };
}

// COMBOBOX
const partObject = document.getElementsByClassName('particular-object');
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', (e) => {
        const comboBox = document.getElementById('comboBox-container').style.display = 'unset';
        let productChildren = partObject[i].children;
        if(partObject[i].childElementCount === 5) {
            var productImg = productChildren[1].getAttribute('src');
            var productName = productChildren[2].textContent;
            var productNewPrice = productChildren[3].children[0].textContent;
            var productOldPrice = productChildren[3].children[1].textContent;
        }
        else if(partObject[i].childElementCount === 4) {
            var productImg = productChildren[0].getAttribute('src');
            var productName = productChildren[1].textContent;
            var productNewPrice = productChildren[2].textContent;
        }
        comboBoxModule.createComboBox(productImg, productName, productNewPrice, productOldPrice);
        console.log(productImg, productName, productNewPrice, productOldPrice)
    })
}

// SHOPPING CART ALERT
const btnToCart = document.getElementsByClassName("inShoppingCart");
for(let i = 0; i < card.length; i++) {
    btnToCart[i].addEventListener('click', addToCart);
    function addToCart() {
        const message = document.getElementById("message");
        message.classList.add("active");
        setTimeout(() => message.classList.remove("active"), 3000);
    }
}

// TYPE HEADING SHADOW
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