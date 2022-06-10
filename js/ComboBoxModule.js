class ComboBoxModule {
    createComboBox(productImg, productName, productNewPrice, productOldPrice) {
        const comboBox = document.getElementById('comboBox-container');
        comboBox.innerHTML = 
        `<div id="comboBox">
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
        </div`

        // document.getElementById('product-img').setAttribute('src', productImg);
    }
}
const comboBoxModule = new ComboBoxModule();
export {comboBoxModule};