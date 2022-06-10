// BURGER MENU
burger = document.getElementById('burgerContainer');
burgerNav = document.getElementById('topnav');
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
        }, 10);
    }
    else {
        // HIDE BURGER MENU
        burgerNav.style.opacity = '0';
        burgerNav.style.transform = 'translateY(-70%)';
        setTimeout(() => {
            burgerNav.style.display = 'none';
        }, 400);
    }
});
// HEADER TYPE (resize page)
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