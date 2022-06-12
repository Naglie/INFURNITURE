// import {comboBoxModule} from './ComboBoxModule.js';
var xhr= new XMLHttpRequest();
xhr.open('GET', 'productInfo.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return;
    document.getElementById('hidden-info').innerHTML = this.responseText;
};
xhr.send();


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
            uls[i].style.transform = 'translateY(-300px)';
            uls[i].style.opacity = '0';
            setTimeout(() => {
                uls[i].style.display = 'none';
            }, 600);
        }
        for (let i = 0; i < shpCart.length; i++) {
            shpCart[i].style.opacity = '0';
            shpCart[i].style.transform = 'translateY(-300px)';
            setTimeout(() => {
                shpCart[i].style.display = 'none';
            }, 600);
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

// SHOPPING CART ALERT
const btnToCart = document.getElementsByClassName('inShoppingCart');
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
    if (pixelCount < 640) {
        removeShadow();
    }
    if (pixelCount > 640) {
        setShadow();
    }
});
function removeShadow() {
    document.getElementById('message').style.top = "20px";
    for(let i = 0; i < furnitureType.length; i++) {
        furnitureType[i].style.boxShadow = 'none';
    }
}
function setShadow() {
    document.getElementById('message').style.top = "80px";
    for(let i = 0; i < furnitureType.length; i++) {
        furnitureType[i].style.boxShadow = '0 8px 8px 0 rgba(0,0,0,0.2)';
    }
}


// COMBOBOX
const partObject = document.getElementsByClassName('particular-object');
for (let i = 0; i < card.length; i++) {
    if(card[i].childElementCount === 5) {
        var productImgClick = card[i].children[1]
    }
    if(card[i].childElementCount === 4) {
        var productImgClick = card[i].children[0]
    }
    productImgClick.addEventListener('click', (e) => {
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
        createComboBox(productImg, productName, productNewPrice, productOldPrice);
        document.getElementById('dark-screen').style.display = 'unset';
        document.getElementById('dark-screen').style.opacity = '1';
        document.getElementById('message').style.display = 'none';
        // console.log(productImg, productName, productNewPrice, productOldPrice)
    })
}


function createComboBox(productImg, productName, productNewPrice, productOldPrice) {
    const comboBox = document.getElementById('comboBox-container');
    comboBox.style.display = 'unset';
    comboBox.innerHTML = 
    `<div id="comboBox">
        <div id="box-exit" class="box-exit-btn"><img src="../Images/Other_images/Group 21.png"></div>
        <div class="box-img_info-container">
            <div class="box-img-container">
                <img id="product-img" src="" alt="product image">
            </div>
            <div class="box-info-container">
                <p id="product-name"></p>
                <div class="product-prices">
                    <p id="product-new-price"></p>
                    <p id="product-old-price"></p>
                </div>
                <div id="shpCartBtn" class="box-button">
                    <a href="">В корзину</a>
                </div>
            </div>
        </div>
        <p id="box-characteristics-name">Характеристики</p>
        <div class="box-characteristics-container">
            <div class="box-characteristics1">
                <p id="product-1"></p>
                <p id="product-2"></p>
                <p id="product-3"></p>
                <p id="product-4"></p>
            </div>
            <div class="box-characteristics2">
                <p id="product-5"></p>
                <p id="product-6"></p>
                <p id="product-7"></p>
            </div>
        </div>
    </div`;

    // FUNCTION TO HIDE THE COMBOBOX
    function hideComboBox() {
        comboBox.innerHTML = '';
        comboBox.style.display = 'none';
        document.getElementById('dark-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('dark-screen').style.display = 'none';
            document.getElementById('message').style.display = 'flex';
        }, 200);
    }

    // LISTENERS TO CLOSE THE COMBOBOX
    document.getElementById('box-exit').addEventListener('click', (e) => {
        e.preventDefault();
        hideComboBox()
    });
    document.getElementById('shpCartBtn').addEventListener('click', (e) => {
        e.preventDefault();
        hideComboBox()
    });
    document.getElementById('dark-screen').addEventListener('click', (e) => {
        e.preventDefault();
        hideComboBox()
    });
    
    if(productOldPrice !== undefined) {
        document.getElementById('product-old-price').style.display = 'unset';
        document.getElementById('product-new-price').style.color = '#E63333';
        document.getElementById('product-img').setAttribute('src', productImg);
        document.getElementById('product-name').innerHTML = productName;
        document.getElementById('product-new-price').innerHTML = productNewPrice;
        document.getElementById('product-old-price').innerHTML = productOldPrice;
    }
    if(productOldPrice === undefined) {
        document.getElementById('product-img').setAttribute('src', productImg);
        document.getElementById('product-name').innerHTML = productName;
        document.getElementById('product-new-price').innerHTML = productNewPrice;
        document.getElementById('product-old-price').style.display = 'none';
        document.getElementById('product-new-price').style.color = 'black';
    }
    const infoBlock = document.getElementsByClassName('product-info-block');
    for (let i = 0; i < infoBlock.length; i++) {
        let blockChildren = infoBlock[i].children;
        if(blockChildren[0].textContent === productName) {
            var characteristic1 = blockChildren[1].textContent;
            var characteristic2 = blockChildren[2].textContent;
            var characteristic3 = blockChildren[3].textContent;
            var characteristic4 = blockChildren[4].textContent;
            var characteristic5 = blockChildren[5].textContent;
            var characteristic6 = blockChildren[6].textContent;
            var characteristic7 = blockChildren[7].textContent;

            document.getElementById('product-1').innerHTML = characteristic1;
            document.getElementById('product-2').innerHTML = characteristic2;
            document.getElementById('product-3').innerHTML = characteristic3;
            document.getElementById('product-4').innerHTML = characteristic4;
            document.getElementById('product-5').innerHTML = characteristic5;
            document.getElementById('product-6').innerHTML = characteristic6;
            document.getElementById('product-7').innerHTML = characteristic7;
        }
    }
}