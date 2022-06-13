window.addEventListener('scroll', (e) => {
    let pixelCount = window.pageYOffset;
    if(pixelCount <= 136) {
        document.getElementById('arrowContainer').style.opacity = '0';
        document.getElementById('arrowContainer').style.cursor = 'none';
    }
    if(pixelCount >= 136) {
        document.getElementById('arrowContainer').style.opacity = '1';
        document.getElementById('arrowContainer').style.cursor = 'pointer';

        window.addEventListener('resize', (e) => {
            if(window.innerWidth < 880) {
                document.getElementById('arrowContainer').style.opacity = '0';
                document.getElementById('arrowContainer').style.cursor = 'auto';
                document.getElementById('arrowContainer').style.transform = 'translateX(-100%)';
            }
            if(window.innerWidth > 880) {
                document.getElementById('arrowContainer').style.opacity = '1';
                document.getElementById('arrowContainer').style.cursor = 'pointer';
                document.getElementById('arrowContainer').style.transform = 'translateX(0)';
            }
        });
    }
});