// BURGER MENU
var burger = document.getElementById('burgerContainer');
var burgerNav = document.getElementById('topnav');
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
            // document.getElementsByTagName('header')[0].style.marginBottom = '250px';
        }, 10);
    }
    else {
        // HIDE BURGER MENU
        burgerNav.style.opacity = '0';
        burgerNav.style.transform = 'translateY(-70%)';
        // document.getElementsByTagName('header')[0].style.marginBottom = '0';
        setTimeout(() => {
            burgerNav.style.display = 'none';
        }, 400);
    }
});