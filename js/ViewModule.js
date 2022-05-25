function insertHeaderAndFooter() {
    const header = document.getElementsByTagName('header');
    const footer = document.getElementsByTagName('footer');
    header.innerHTML = 
    `
    <div class="logo-container">
        <a href="../index.html"><img src="../Images/Other_images/logo.png" alt="logo"></a>
    </div>
    <ul>
        <li><a href="">Мебель</a></li>
        <li><a href="">Услуги</a></li>
        <li><a href="">Предложения</a></li>
        <li><a href="about_us.html">О нас</a></li>
        <li><a href="">Контакты</a></li>
    </ul>
    <div class="shopping-cart">
        <a ><img src="../Images/Other_images/shopping-cart.png" alt="shopping cart"></a>
    </div>
    `;
    // header.innerHTML = 
}