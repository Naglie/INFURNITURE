class ComboBoxModule {
    createComboBox(productImg, productName, productNewPrice, productOldPrice) {
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
                    <div class="box-button">
                        <a id="shpCartBtn" href="">В корзину</a>
                    </div>
                </div>
            </div>
            <div class="box-characteristics-container">
                <p id="box-characteristics-name">Характеристики</p>
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
        document.getElementById('box-exit').addEventListener('click', (e) => {
            comboBox.innerHTML = '';
            comboBox.style.display = 'none';
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
    }
}
const comboBoxModule = new ComboBoxModule();
export {comboBoxModule};