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
        document.getElementById('box-exit').addEventListener('click', (e) => {
            e.preventDefault();
            comboBox.innerHTML = '';
            comboBox.style.display = 'none';
            document.getElementById('dark-screen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('dark-screen').style.display = 'none';
                document.getElementById('message').style.display = 'flex';
            }, 200);
        });
        document.getElementById('shpCartBtn').addEventListener('click', (e) => {
            e.preventDefault();
            comboBox.innerHTML = '';
            comboBox.style.display = 'none';
            document.getElementById('dark-screen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('dark-screen').style.display = 'none';
                document.getElementById('message').style.display = 'flex';
            }, 200);
        });
        
        if(productOldPrice !== undefined) {
            document.getElementById('product-old-price').style.display = 'unset';
            document.getElementById('product-new-price').style.color = '#E63333';
            document.getElementById('product-img').setAttribute('src', productImg);
            document.getElementById('product-name').innerHTML = productName;
            document.getElementById('product-new-price').innerHTML = productNewPrice;
            document.getElementById('product-old-price').innerHTML = productOldPrice;
            
            const infoBlock = document.getElementsByClassName('product-info-block');
            for (let i = 0; i < infoBlock.length; i++) {
                let blockChildren = infoBlock[i].children;
                console.log("dsd")
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