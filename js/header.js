var burger = document.getElementById('burgerContainer');
var burgerNav = document.getElementById('topnav');
// HEADER TYPE (resize page, BUT better to use load)
window.addEventListener('resize', (e) => {
    var widthPixel = window.innerWidth;
    // SHOW MOBILE HEADER
    if(widthPixel <= 1250) {
        document.getElementById('burgerContainer').classList.add('activate');
        document.getElementsByTagName('header')[0].style.marginBottom = '0px';
        let header = document.getElementsByTagName('header')[0];
        let uls = header.getElementsByTagName('ul');
        let shpCart = header.getElementsByClassName('shopping-cart');
        for (let i = 0; i < uls.length; i++) {
            uls[i].style.transform = 'translateY(-300px)';
            uls[i].style.opacity = '0';
            setTimeout(() => {
                uls[i].style.display = 'none';
            }, 400);
        }
        for (let i = 0; i < shpCart.length; i++) {
            shpCart[i].style.opacity = '0';
            shpCart[i].style.transform = 'translateY(-300px)';
            setTimeout(() => {
                shpCart[i].style.display = 'none';
            }, 400);
        }
        burgerNav.style.opacity = '0';
        burgerNav.style.transform = 'translateY(-70%)';
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
        document.getElementsByTagName('header')[0].style.marginBottom = '0px';
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
window.addEventListener('load', (e) => {
    var widthPixel = window.innerWidth;
    // SHOW MOBILE HEADER
    if(widthPixel <= 1250) {
        document.getElementById('burgerContainer').classList.add('activate');
        document.getElementsByTagName('header')[0].style.marginBottom = '0px';
        let header = document.getElementsByTagName('header')[0];
        let uls = header.getElementsByTagName('ul');
        let shpCart = header.getElementsByClassName('shopping-cart');
        for (let i = 0; i < uls.length; i++) {
            uls[i].style.transform = 'translateY(-300px)';
            uls[i].style.opacity = '0';
            setTimeout(() => {
                uls[i].style.display = 'none';
            }, 400);
        }
        for (let i = 0; i < shpCart.length; i++) {
            shpCart[i].style.opacity = '0';
            shpCart[i].style.transform = 'translateY(-300px)';
            setTimeout(() => {
                shpCart[i].style.display = 'none';
            }, 400);
        }
        burgerNav.style.opacity = '0';
        burgerNav.style.transform = 'translateY(-70%)';
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
        document.getElementsByTagName('header')[0].style.marginBottom = '0px';
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